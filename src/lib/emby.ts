interface EmbyUser {
  Id: string;
  Name: string;
  ServerId: string;
  HasPassword: boolean;
  HasConfiguredPassword: boolean;
  HasConfiguredEasyPassword: boolean;
  EnableAutoLogin: boolean;
  LastLoginDate?: string;
  LastActivityDate?: string;
  Configuration: {
    PlayDefaultAudioTrack: boolean;
    DisplayMissingEpisodes: boolean;
    GroupedFolders: string[];
    SubtitleMode: string;
    DisplayCollectionsView: boolean;
    EnableLocalPassword: boolean;
    OrderedViews: string[];
    LatestItemsExcludes: string[];
    MyMediaExcludes: string[];
    HidePlayedInLatest: boolean;
    RememberAudioSelections: boolean;
    RememberSubtitleSelections: boolean;
    EnableNextEpisodeAutoPlay: boolean;
  };
  Policy: {
    IsAdministrator: boolean;
    IsHidden: boolean;
    IsDisabled: boolean;
    BlockedTags: string[];
    EnableUserPreferenceAccess: boolean;
    AccessSchedules: unknown[];
    BlockUnratedItems: string[];
    EnableRemoteControlOfOtherUsers: boolean;
    EnableSharedDeviceControl: boolean;
    EnableRemoteAccess: boolean;
    EnableLiveTvManagement: boolean;
    EnableLiveTvAccess: boolean;
    EnableMediaPlayback: boolean;
    EnableAudioPlaybackTranscoding: boolean;
    EnableVideoPlaybackTranscoding: boolean;
    EnableVideoPlaybackRemuxing: boolean;
    EnableContentDeletion: boolean;
    EnableContentDownloading: boolean;
    EnableSyncTranscoding: boolean;
    EnableMediaConversion: boolean;
    EnabledDevices: string[];
    EnableAllDevices: boolean;
    EnabledChannels: string[];
    EnableAllChannels: boolean;
    EnabledFolders: string[];
    EnableAllFolders: boolean;
    InvalidLoginAttemptCount: number;
    LoginAttemptsBeforeLockout: number;
    MaxActiveSessions: number;
    EnablePublicSharing: boolean;
    BlockedMediaFolders: string[];
    BlockedChannels: string[];
    RemoteClientBitrateLimit: number;
    AuthenticationProviderId: string;
    PasswordResetProviderId: string;
    SyncPlayAccess: string;
  };
  PrimaryImageTag?: string;
}

interface EmbyLibrary {
  Name: string;
  Id: string;
  Path: string;
  CollectionType: string;
  LibraryOptions: {
    EnableRealtimeMonitor: boolean;
    EnableChapterImageExtraction: boolean;
    ExtractChapterImagesDuringLibraryScan: boolean;
    DownloadImagesInAdvance: boolean;
    PathInfos: Array<{
      Path: string;
      NetworkPath?: string;
    }>;
    SaveLocalMetadata: boolean;
    EnableInternetProviders: boolean;
    EnableAutomaticSeriesGrouping: boolean;
    EnableEmbeddedTitles: boolean;
    EnableEmbeddedEpisodeInfos: boolean;
    AutomaticRefreshIntervalDays: number;
    PreferredMetadataLanguage: string;
    PreferredImageLanguage: string;
    ContentType: string;
    MetadataCountryCode: string;
    SeasonZeroDisplayName: string;
    MetadataSavers: string[];
    DisabledLocalMetadataReaders: string[];
    LocalMetadataReaderOrder: string[];
    DisabledSubtitleFetchers: string[];
    SubtitleFetcherOrder: string[];
    SkipSubtitlesIfEmbeddedSubtitlesPresent: boolean;
    SkipSubtitlesIfAudioTrackMatches: boolean;
    SubtitleDownloadLanguages: string[];
    RequirePerfectSubtitleMatch: boolean;
    SaveSubtitlesWithMedia: boolean;
    ForcedSubtitleDownloadLanguages: string[];
    HearingImpairedSubtitleDownloadLanguages: string[];
    TypeOptions: Array<{
      Type: string;
      MetadataFetchers: string[];
      MetadataFetcherOrder: string[];
      ImageFetchers: string[];
      ImageFetcherOrder: string[];
      ImageOptions: Array<{
        Limit: number;
        MinWidth: number;
        Type: string;
      }>;
    }>;
    CollapseSingleItemFolders: boolean;
    EnableAdultMetadata: boolean;
    ImportCollections: boolean;
    MinCollectionItems: number;
    MusicFolderStructure: string;
    MinItemsToCreateFolder: number;
    EnableEmbeddedImageExtraction: boolean;
    DedupeVirtualAlbums: boolean;
  };
  IsFolder: boolean;
  Type: string;
  CollectionFolders: string[];
  ImageTags: Record<string, unknown>;
  BackdropImageTags: Record<string, unknown>;
  ScreenshotImageTags: Record<string, unknown>;
  ParentId?: string;
  LocationType: string;
  LockedFields: string[];
  LockData: boolean;
  Width?: number;
  Height?: number;
  Taglines: string[];
  Genres: string[];
  Studios: Array<{
    Name: string;
    Id: string;
  }>;
  ParentLogoItemId?: string;
  ParentBackdropItemId?: string;
  ParentBackdropImageTags: string[];
  LocalTrailerCount: number;
  UserData: {
    Rating: number;
    PlayedPercentage: number;
    UnplayedItemCount: number;
    PlaybackPositionTicks: number;
    PlayCount: number;
    IsFavorite: boolean;
    LastPlayedDate?: string;
    Played: boolean;
    Key?: string;
    ItemId: string;
  };
  RecursiveItemCount: number;
  ChildCount: number;
  SeriesName?: string;
  SeriesId?: string;
  SeasonId?: string;
  SpecialFeatureCount: number;
  DisplayPreferencesId: string;
  Status: string;
  AirTime?: string;
  AirDays: string[];
  IndexNumber?: number;
  ParentIndexNumber?: number;
  RemoteTrailers: Array<{
    Url: string;
    Name: string;
  }>;
  ProviderIds: Record<string, string>;
  IsHD: boolean;
  People: Array<{
    Name: string;
    Id: string;
    Role?: string;
    Type: string;
    PrimaryImageTag?: string;
  }>;
  GenreItems: Array<{
    Name: string;
    Id: string;
  }>;
}

export class EmbyService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
  }

  private async makeRequest<T>(endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', body?: unknown): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: HeadersInit = {
      'X-Emby-Token': this.apiKey,
      'Content-Type': 'application/json',
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (body && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Emby API error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Emby API request failed: ${method} ${url}`, error);
      throw error;
    }
  }

  // Test connection to Emby server
  async testConnection(): Promise<boolean> {
    try {
      await this.makeRequest('/System/Info');
      return true;
    } catch (error) {
      console.error('Emby connection test failed:', error);
      return false;
    }
  }

  // Get system information
  async getSystemInfo() {
    return this.makeRequest('/System/Info');
  }

  // Get all users
  async getUsers(): Promise<EmbyUser[]> {
    return this.makeRequest<EmbyUser[]>('/Users');
  }

  // Get specific user
  async getUser(userId: string): Promise<EmbyUser> {
    return this.makeRequest<EmbyUser>(`/Users/${userId}`);
  }

  // Create new user
  async createUser(userData: {
    Name: string;
    Password: string;
  }): Promise<EmbyUser> {
    return this.makeRequest<EmbyUser>('/Users/New', 'POST', userData);
  }

  // Update user
  async updateUser(userId: string, userData: Partial<EmbyUser>): Promise<void> {
    return this.makeRequest(`/Users/${userId}`, 'POST', userData);
  }

  // Delete user
  async deleteUser(userId: string): Promise<void> {
    return this.makeRequest(`/Users/${userId}`, 'DELETE');
  }

  // Update user policy
  async updateUserPolicy(userId: string, policy: Partial<EmbyUser['Policy']>): Promise<void> {
    return this.makeRequest(`/Users/${userId}/Policy`, 'POST', policy);
  }

  // Get user policy
  async getUserPolicy(userId: string): Promise<EmbyUser['Policy']> {
    return this.makeRequest<EmbyUser['Policy']>(`/Users/${userId}/Policy`);
  }

  // Get libraries
  async getLibraries(): Promise<EmbyLibrary[]> {
    return this.makeRequest<EmbyLibrary[]>('/Library/VirtualFolders');
  }

  // Get library items
  async getLibraryItems(libraryId: string, options?: {
    Recursive?: boolean;
    IncludeItemTypes?: string;
    Fields?: string;
    StartIndex?: number;
    Limit?: number;
  }): Promise<{
    Items: EmbyUser[];
    TotalRecordCount: number;
  }> {
    const params = new URLSearchParams();
    if (options) {
      Object.entries(options).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }

    const endpoint = `/Items?ParentId=${libraryId}&${params.toString()}`;
    return this.makeRequest(endpoint);
  }

  // Authenticate user (for testing)
  async authenticateUser(username: string, password: string): Promise<{
    User: EmbyUser;
    AccessToken: string;
    ServerId: string;
  }> {
    const authData = {
      Username: username,
      Pw: password,
    };

    return this.makeRequest('/Users/authenticatebyname', 'POST', authData);
  }

  // Enable/disable user
  async setUserEnabled(userId: string, enabled: boolean): Promise<void> {
    const policy = { IsDisabled: !enabled };
    return this.updateUserPolicy(userId, policy);
  }

  // Set user password
  async setUserPassword(userId: string, newPassword: string): Promise<void> {
    return this.makeRequest(`/Users/${userId}/Password`, 'POST', { NewPassword: newPassword });
  }

  // Block/unblock user (set IsDisabled policy)
  async blockUser(userId: string, blocked: boolean = true): Promise<void> {
    return this.setUserEnabled(userId, !blocked);
  }

  // Get user sessions (active connections)
  async getUserSessions(userId?: string): Promise<Array<{
    Id: string;
    UserId: string;
    UserName: string;
    Client: string;
    LastActivityDate: string;
    LastPlaybackCheckIn: string;
    DeviceName: string;
    DeviceId: string;
    ApplicationVersion: string;
    AppIconUrl: string;
    SupportedCommands: string[];
    TranscodingInfo: {
      AudioCodec: string;
      VideoCodec: string;
      Container: string;
      IsVideoDirect: boolean;
      IsAudioDirect: boolean;
      Bitrate: number;
      Framerate: number;
      CompletionPercentage: number;
      Width: number;
      Height: number;
      AudioChannels: number;
      HardwareAccelerationType: string;
      TranscodeReasons: string[];
    };
    PlayState: {
      CanSeek: boolean;
      Paused: boolean;
      IsMuted: boolean;
      VolumeLevel: number;
      AudioStreamIndex: number;
      SubtitleStreamIndex: number;
      MediaSourceId: string;
      PlayMethod: string;
      RepeatMode: string;
      SubtitleOffset: number;
      PlaybackRate: number;
    };
    AdditionalUsers: Array<{
      UserId: string;
      UserName: string;
    }>;
    Capabilities: {
      PlayableMediaTypes: string[];
      SupportedCommands: string[];
      SupportsMediaControl: boolean;
      SupportsContentUploading: boolean;
      SupportsPersistentIdentifier: boolean;
      SupportsSync: boolean;
      DeviceProfile: {
        Name: string;
        Id: string;
        MaxStreamingBitrate: number;
        MaxStaticBitrate: number;
        MusicStreamingTranscodingBitrate: number;
        DirectPlayProfiles: Array<{
          Container: string;
          Type: string;
          VideoCodec: string;
          AudioCodec: string;
        }>;
        TranscodingProfiles: Array<{
          Container: string;
          Type: string;
          VideoCodec: string;
          AudioCodec: string;
          Protocol: string;
          EstimateContentLength: boolean;
          EnableMpegtsM2TsMode: boolean;
          TranscodeSeekInfo: string;
          CopyTimestamps: boolean;
          Context: string;
          EnableSubtitlesInManifest: boolean;
          MaxAudioChannels: string;
          MinSegments: number;
          SegmentLength: number;
          BreakOnNonKeyFrames: boolean;
          Conditions: Array<{
            Condition: string;
            Property: string;
            Value: string;
            IsRequired: boolean;
          }>;
        }>;
        ContainerProfiles: Array<{
          Type: string;
          Conditions: Array<{
            Condition: string;
            Property: string;
            Value: string;
            IsRequired: boolean;
          }>;
          Container: string;
        }>;
        CodecProfiles: Array<{
          Type: string;
          Conditions: Array<{
            Condition: string;
            Property: string;
            Value: string;
            IsRequired: boolean;
          }>;
          ApplyConditions: Array<{
            Condition: string;
            Property: string;
            Value: string;
            IsRequired: boolean;
          }>;
          Codec: string;
          Container: string;
        }>;
        ResponseProfiles: Array<{
          Type: string;
          Container: string;
          AudioCodec: string;
          VideoCodec: string;
          OrgPn: string;
          MimeType: string;
          Conditions: Array<{
            Condition: string;
            Property: string;
            Value: string;
            IsRequired: boolean;
          }>;
        }>;
        SubtitleProfiles: Array<{
          Format: string;
          Method: string;
          DidlMode: string;
          Language: string;
          Container: string;
        }>;
      };
    };
    RemoteEndPoint: string;
    PlayableMediaTypes: string[];
    PlaylistItemId: string;
    ServerId: string;
    UserPrimaryImageTag: string;
    SupportedCommands: string[];
  }>> {
    const endpoint = userId ? `/Sessions?UserId=${userId}` : '/Sessions';
    return this.makeRequest(endpoint);
  }

  // Kill user session
  async killUserSession(sessionId: string): Promise<void> {
    return this.makeRequest(`/Sessions/${sessionId}`, 'DELETE');
  }

  // Get user activity (recent activity)
  async getUserActivity(userId: string, options?: {
    Limit?: number;
    StartIndex?: number;
  }): Promise<{
    Items: Array<{
      Id: string;
      Name: string;
      ServerId: string;
      Type: string;
      UserId: string;
      DateCreated: string;
      DateModified: string;
      UserData: {
        Rating: number;
        PlayedPercentage: number;
        UnplayedItemCount: number;
        PlaybackPositionTicks: number;
        PlayCount: number;
        IsFavorite: boolean;
        LastPlayedDate?: string;
        Played: boolean;
        Key?: string;
        ItemId: string;
      };
      PrimaryImageTag?: string;
      ImageTags: Record<string, string>;
      BackdropImageTags: string[];
      ScreenshotImageTags: string[];
      SeriesName?: string;
      SeriesId?: string;
      SeasonId?: string;
      SeasonName?: string;
      SeasonNumber?: number;
      SeriesPrimaryImageTag?: string;
      SeriesBackdropImageTags: string[];
      ParentBackdropImageTags: string[];
      ParentBackdropItemId?: string;
      ParentLogoImageTag?: string;
      ParentLogoItemId?: string;
      AlbumArtist?: string;
      AlbumArtists: Array<{
        Name: string;
        Id: string;
      }>;
      ArtistItems: Array<{
        Name: string;
        Id: string;
      }>;
      IndexNumber?: number;
      ParentIndexNumber?: number;
      RemoteTrailers: Array<{
        Url: string;
        Name: string;
      }>;
      ProviderIds: Record<string, string>;
      IsHD: boolean;
      IsFolder: boolean;
      ParentId?: string;
      Type: string;
      People: Array<{
        Name: string;
        Id: string;
        Role?: string;
        Type: string;
        PrimaryImageTag?: string;
      }>;
      Studios: Array<{
        Name: string;
        Id: string;
      }>;
      GenreItems: Array<{
        Name: string;
        Id: string;
      }>;
      ParentLogoItemId?: string;
      ParentBackdropItemId?: string;
      ParentBackdropImageTags: string[];
      LocalTrailerCount: number;
      UserData: {
        Rating: number;
        PlayedPercentage: number;
        UnplayedItemCount: number;
        PlaybackPositionTicks: number;
        PlayCount: number;
        IsFavorite: boolean;
        LastPlayedDate?: string;
        Played: boolean;
        Key?: string;
        ItemId: string;
      };
      RecursiveItemCount: number;
      ChildCount: number;
      SeriesName?: string;
      SeriesId?: string;
      SeasonId?: string;
      SpecialFeatureCount: number;
      DisplayPreferencesId: string;
      Status: string;
      AirTime?: string;
      AirDays: string[];
      Tags: string[];
      PrimaryImageAspectRatio: number;
      Artists: string[];
      ArtistItems: Array<{
        Name: string;
        Id: string;
      }>;
      Album?: string;
      CollectionType: string;
      DisplayOrder: string;
      AlbumId?: string;
      AlbumPrimaryImageTag?: string;
      SeriesPrimaryImageTag?: string;
      AlbumArtist?: string;
      AlbumArtists: Array<{
        Name: string;
        Id: string;
      }>;
      SeasonName?: string;
      SeasonNumber?: number;
      SeriesBackdropImageTags: string[];
      ParentBackdropImageTags: string[];
      ParentBackdropItemId?: string;
      ParentLogoImageTag?: string;
      ParentLogoItemId?: string;
      AlbumPrimaryImageTag?: string;
      SeriesPrimaryImageTag?: string;
      AlbumArtist?: string;
      AlbumArtists: Array<{
        Name: string;
        Id: string;
      }>;
      ArtistItems: Array<{
        Name: string;
        Id: string;
      }>;
      SongCount: number;
      Etag?: string;
      ImageTags: Record<string, string>;
      BackdropImageTags: string[];
      ScreenshotImageTags: string[];
      LocalTrailerCount: number;
      UserData: {
        Rating: number;
        PlayedPercentage: number;
        UnplayedItemCount: number;
        PlaybackPositionTicks: number;
        PlayCount: number;
        IsFavorite: boolean;
        LastPlayedDate?: string;
        Played: boolean;
        Key?: string;
        ItemId: string;
      };
      RecursiveItemCount: number;
      ChildCount: number;
      SeriesName?: string;
      SeriesId?: string;
      SeasonId?: string;
      SpecialFeatureCount: number;
      DisplayPreferencesId: string;
      Status: string;
      AirTime?: string;
      AirDays: string[];
      Tags: string[];
      PrimaryImageAspectRatio: number;
      Artists: string[];
      ArtistItems: Array<{
        Name: string;
        Id: string;
      }>;
      Album?: string;
      CollectionType: string;
      DisplayOrder: string;
      AlbumId?: string;
      AlbumPrimaryImageTag?: string;
      SeriesPrimaryImageTag?: string;
      AlbumArtist?: string;
      AlbumArtists: Array<{
        Name: string;
        Id: string;
      }>;
      SeasonName?: string;
      SeasonNumber?: number;
      SeriesBackdropImageTags: string[];
      ParentBackdropImageTags: string[];
      ParentBackdropItemId?: string;
      ParentLogoImageTag?: string;
      ParentLogoItemId?: string;
      AlbumPrimaryImageTag?: string;
      SeriesPrimaryImageTag?: string;
      AlbumArtist?: string;
      AlbumArtists: Array<{
        Name: string;
        Id: string;
      }>;
      ArtistItems: Array<{
        Name: string;
        Id: string;
      }>;
      SongCount: number;
      Etag?: string;
    }>;
    TotalRecordCount: number;
  }> {
    const params = new URLSearchParams();
    if (options) {
      Object.entries(options).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }

    const endpoint = `/Users/${userId}/Items/Latest?${params.toString()}`;
    return this.makeRequest(endpoint);
  }

  // Sync user data (get user info and sync with local database)
  async syncUserData(userId: string): Promise<{
    embyUser: EmbyUser;
    lastActivity?: string;
    isOnline: boolean;
    sessions: number;
  }> {
    const [embyUser, sessions] = await Promise.all([
      this.getUser(userId),
      this.getUserSessions(userId)
    ]);

    const isOnline = sessions.length > 0;
    const lastActivity = sessions.length > 0 
      ? sessions[0].LastActivityDate 
      : embyUser.LastActivityDate;

    return {
      embyUser,
      lastActivity,
      isOnline,
      sessions: sessions.length
    };
  }
}

export default EmbyService;
