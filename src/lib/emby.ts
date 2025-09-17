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
    AccessSchedules: any[];
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
  ImageTags: any;
  BackdropImageTags: any;
  ScreenshotImageTags: any;
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
}

export class EmbyService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
  }

  private async makeRequest<T>(endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', body?: any): Promise<T> {
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
    Items: any[];
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
    const userData = { NewPassword: newPassword };
    return this.updateUser(userId, userData);
  }
}

export default EmbyService;