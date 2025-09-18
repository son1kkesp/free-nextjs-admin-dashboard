
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EmbyUser
 * 
 */
export type EmbyUser = $Result.DefaultSelection<Prisma.$EmbyUserPayload>
/**
 * Model ResellerTier
 * 
 */
export type ResellerTier = $Result.DefaultSelection<Prisma.$ResellerTierPayload>
/**
 * Model CreditBalance
 * 
 */
export type CreditBalance = $Result.DefaultSelection<Prisma.$CreditBalancePayload>
/**
 * Model CreditLog
 * 
 */
export type CreditLog = $Result.DefaultSelection<Prisma.$CreditLogPayload>
/**
 * Model EmbyServer
 * 
 */
export type EmbyServer = $Result.DefaultSelection<Prisma.$EmbyServerPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model PackageLibrary
 * 
 */
export type PackageLibrary = $Result.DefaultSelection<Prisma.$PackageLibraryPayload>
/**
 * Model UserServerLink
 * 
 */
export type UserServerLink = $Result.DefaultSelection<Prisma.$UserServerLinkPayload>
/**
 * Model EmbyAccount
 * 
 */
export type EmbyAccount = $Result.DefaultSelection<Prisma.$EmbyAccountPayload>
/**
 * Model UserPolicy
 * 
 */
export type UserPolicy = $Result.DefaultSelection<Prisma.$UserPolicyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  TECH_ADMIN: 'TECH_ADMIN',
  PREMIUM_RESELLER: 'PREMIUM_RESELLER',
  ADVANCED_RESELLER: 'ADVANCED_RESELLER',
  BASIC_RESELLER: 'BASIC_RESELLER',
  READ_ONLY: 'READ_ONLY'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const AccountStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  EXPIRED: 'EXPIRED'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.embyUser`: Exposes CRUD operations for the **EmbyUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmbyUsers
    * const embyUsers = await prisma.embyUser.findMany()
    * ```
    */
  get embyUser(): Prisma.EmbyUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resellerTier`: Exposes CRUD operations for the **ResellerTier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResellerTiers
    * const resellerTiers = await prisma.resellerTier.findMany()
    * ```
    */
  get resellerTier(): Prisma.ResellerTierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditBalance`: Exposes CRUD operations for the **CreditBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditBalances
    * const creditBalances = await prisma.creditBalance.findMany()
    * ```
    */
  get creditBalance(): Prisma.CreditBalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditLog`: Exposes CRUD operations for the **CreditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditLogs
    * const creditLogs = await prisma.creditLog.findMany()
    * ```
    */
  get creditLog(): Prisma.CreditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.embyServer`: Exposes CRUD operations for the **EmbyServer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmbyServers
    * const embyServers = await prisma.embyServer.findMany()
    * ```
    */
  get embyServer(): Prisma.EmbyServerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packageLibrary`: Exposes CRUD operations for the **PackageLibrary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageLibraries
    * const packageLibraries = await prisma.packageLibrary.findMany()
    * ```
    */
  get packageLibrary(): Prisma.PackageLibraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userServerLink`: Exposes CRUD operations for the **UserServerLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserServerLinks
    * const userServerLinks = await prisma.userServerLink.findMany()
    * ```
    */
  get userServerLink(): Prisma.UserServerLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.embyAccount`: Exposes CRUD operations for the **EmbyAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmbyAccounts
    * const embyAccounts = await prisma.embyAccount.findMany()
    * ```
    */
  get embyAccount(): Prisma.EmbyAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPolicy`: Exposes CRUD operations for the **UserPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPolicies
    * const userPolicies = await prisma.userPolicy.findMany()
    * ```
    */
  get userPolicy(): Prisma.UserPolicyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    EmbyUser: 'EmbyUser',
    ResellerTier: 'ResellerTier',
    CreditBalance: 'CreditBalance',
    CreditLog: 'CreditLog',
    EmbyServer: 'EmbyServer',
    Package: 'Package',
    PackageLibrary: 'PackageLibrary',
    UserServerLink: 'UserServerLink',
    EmbyAccount: 'EmbyAccount',
    UserPolicy: 'UserPolicy'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "embyUser" | "resellerTier" | "creditBalance" | "creditLog" | "embyServer" | "package" | "packageLibrary" | "userServerLink" | "embyAccount" | "userPolicy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EmbyUser: {
        payload: Prisma.$EmbyUserPayload<ExtArgs>
        fields: Prisma.EmbyUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmbyUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmbyUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>
          }
          findFirst: {
            args: Prisma.EmbyUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmbyUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>
          }
          findMany: {
            args: Prisma.EmbyUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>[]
          }
          create: {
            args: Prisma.EmbyUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>
          }
          createMany: {
            args: Prisma.EmbyUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmbyUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>[]
          }
          delete: {
            args: Prisma.EmbyUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>
          }
          update: {
            args: Prisma.EmbyUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>
          }
          deleteMany: {
            args: Prisma.EmbyUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmbyUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmbyUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>[]
          }
          upsert: {
            args: Prisma.EmbyUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyUserPayload>
          }
          aggregate: {
            args: Prisma.EmbyUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbyUser>
          }
          groupBy: {
            args: Prisma.EmbyUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmbyUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmbyUserCountArgs<ExtArgs>
            result: $Utils.Optional<EmbyUserCountAggregateOutputType> | number
          }
        }
      }
      ResellerTier: {
        payload: Prisma.$ResellerTierPayload<ExtArgs>
        fields: Prisma.ResellerTierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResellerTierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResellerTierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>
          }
          findFirst: {
            args: Prisma.ResellerTierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResellerTierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>
          }
          findMany: {
            args: Prisma.ResellerTierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>[]
          }
          create: {
            args: Prisma.ResellerTierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>
          }
          createMany: {
            args: Prisma.ResellerTierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResellerTierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>[]
          }
          delete: {
            args: Prisma.ResellerTierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>
          }
          update: {
            args: Prisma.ResellerTierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>
          }
          deleteMany: {
            args: Prisma.ResellerTierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResellerTierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResellerTierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>[]
          }
          upsert: {
            args: Prisma.ResellerTierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerTierPayload>
          }
          aggregate: {
            args: Prisma.ResellerTierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResellerTier>
          }
          groupBy: {
            args: Prisma.ResellerTierGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResellerTierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResellerTierCountArgs<ExtArgs>
            result: $Utils.Optional<ResellerTierCountAggregateOutputType> | number
          }
        }
      }
      CreditBalance: {
        payload: Prisma.$CreditBalancePayload<ExtArgs>
        fields: Prisma.CreditBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>
          }
          findFirst: {
            args: Prisma.CreditBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>
          }
          findMany: {
            args: Prisma.CreditBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>[]
          }
          create: {
            args: Prisma.CreditBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>
          }
          createMany: {
            args: Prisma.CreditBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>[]
          }
          delete: {
            args: Prisma.CreditBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>
          }
          update: {
            args: Prisma.CreditBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>
          }
          deleteMany: {
            args: Prisma.CreditBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>[]
          }
          upsert: {
            args: Prisma.CreditBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditBalancePayload>
          }
          aggregate: {
            args: Prisma.CreditBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditBalance>
          }
          groupBy: {
            args: Prisma.CreditBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<CreditBalanceCountAggregateOutputType> | number
          }
        }
      }
      CreditLog: {
        payload: Prisma.$CreditLogPayload<ExtArgs>
        fields: Prisma.CreditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>
          }
          findFirst: {
            args: Prisma.CreditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>
          }
          findMany: {
            args: Prisma.CreditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>[]
          }
          create: {
            args: Prisma.CreditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>
          }
          createMany: {
            args: Prisma.CreditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>[]
          }
          delete: {
            args: Prisma.CreditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>
          }
          update: {
            args: Prisma.CreditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>
          }
          deleteMany: {
            args: Prisma.CreditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>[]
          }
          upsert: {
            args: Prisma.CreditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLogPayload>
          }
          aggregate: {
            args: Prisma.CreditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditLog>
          }
          groupBy: {
            args: Prisma.CreditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditLogCountArgs<ExtArgs>
            result: $Utils.Optional<CreditLogCountAggregateOutputType> | number
          }
        }
      }
      EmbyServer: {
        payload: Prisma.$EmbyServerPayload<ExtArgs>
        fields: Prisma.EmbyServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmbyServerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmbyServerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>
          }
          findFirst: {
            args: Prisma.EmbyServerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmbyServerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>
          }
          findMany: {
            args: Prisma.EmbyServerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>[]
          }
          create: {
            args: Prisma.EmbyServerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>
          }
          createMany: {
            args: Prisma.EmbyServerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmbyServerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>[]
          }
          delete: {
            args: Prisma.EmbyServerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>
          }
          update: {
            args: Prisma.EmbyServerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>
          }
          deleteMany: {
            args: Prisma.EmbyServerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmbyServerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmbyServerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>[]
          }
          upsert: {
            args: Prisma.EmbyServerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyServerPayload>
          }
          aggregate: {
            args: Prisma.EmbyServerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbyServer>
          }
          groupBy: {
            args: Prisma.EmbyServerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmbyServerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmbyServerCountArgs<ExtArgs>
            result: $Utils.Optional<EmbyServerCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      PackageLibrary: {
        payload: Prisma.$PackageLibraryPayload<ExtArgs>
        fields: Prisma.PackageLibraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageLibraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageLibraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>
          }
          findFirst: {
            args: Prisma.PackageLibraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageLibraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>
          }
          findMany: {
            args: Prisma.PackageLibraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>[]
          }
          create: {
            args: Prisma.PackageLibraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>
          }
          createMany: {
            args: Prisma.PackageLibraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageLibraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>[]
          }
          delete: {
            args: Prisma.PackageLibraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>
          }
          update: {
            args: Prisma.PackageLibraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>
          }
          deleteMany: {
            args: Prisma.PackageLibraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageLibraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageLibraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>[]
          }
          upsert: {
            args: Prisma.PackageLibraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageLibraryPayload>
          }
          aggregate: {
            args: Prisma.PackageLibraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackageLibrary>
          }
          groupBy: {
            args: Prisma.PackageLibraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageLibraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageLibraryCountArgs<ExtArgs>
            result: $Utils.Optional<PackageLibraryCountAggregateOutputType> | number
          }
        }
      }
      UserServerLink: {
        payload: Prisma.$UserServerLinkPayload<ExtArgs>
        fields: Prisma.UserServerLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserServerLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserServerLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>
          }
          findFirst: {
            args: Prisma.UserServerLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserServerLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>
          }
          findMany: {
            args: Prisma.UserServerLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>[]
          }
          create: {
            args: Prisma.UserServerLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>
          }
          createMany: {
            args: Prisma.UserServerLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserServerLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>[]
          }
          delete: {
            args: Prisma.UserServerLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>
          }
          update: {
            args: Prisma.UserServerLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>
          }
          deleteMany: {
            args: Prisma.UserServerLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserServerLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserServerLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>[]
          }
          upsert: {
            args: Prisma.UserServerLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserServerLinkPayload>
          }
          aggregate: {
            args: Prisma.UserServerLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserServerLink>
          }
          groupBy: {
            args: Prisma.UserServerLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserServerLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserServerLinkCountArgs<ExtArgs>
            result: $Utils.Optional<UserServerLinkCountAggregateOutputType> | number
          }
        }
      }
      EmbyAccount: {
        payload: Prisma.$EmbyAccountPayload<ExtArgs>
        fields: Prisma.EmbyAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmbyAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmbyAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>
          }
          findFirst: {
            args: Prisma.EmbyAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmbyAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>
          }
          findMany: {
            args: Prisma.EmbyAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>[]
          }
          create: {
            args: Prisma.EmbyAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>
          }
          createMany: {
            args: Prisma.EmbyAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmbyAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>[]
          }
          delete: {
            args: Prisma.EmbyAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>
          }
          update: {
            args: Prisma.EmbyAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>
          }
          deleteMany: {
            args: Prisma.EmbyAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmbyAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmbyAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>[]
          }
          upsert: {
            args: Prisma.EmbyAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbyAccountPayload>
          }
          aggregate: {
            args: Prisma.EmbyAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbyAccount>
          }
          groupBy: {
            args: Prisma.EmbyAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmbyAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmbyAccountCountArgs<ExtArgs>
            result: $Utils.Optional<EmbyAccountCountAggregateOutputType> | number
          }
        }
      }
      UserPolicy: {
        payload: Prisma.$UserPolicyPayload<ExtArgs>
        fields: Prisma.UserPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>
          }
          findFirst: {
            args: Prisma.UserPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>
          }
          findMany: {
            args: Prisma.UserPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>[]
          }
          create: {
            args: Prisma.UserPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>
          }
          createMany: {
            args: Prisma.UserPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>[]
          }
          delete: {
            args: Prisma.UserPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>
          }
          update: {
            args: Prisma.UserPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>
          }
          deleteMany: {
            args: Prisma.UserPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>[]
          }
          upsert: {
            args: Prisma.UserPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPolicyPayload>
          }
          aggregate: {
            args: Prisma.UserPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPolicy>
          }
          groupBy: {
            args: Prisma.UserPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<UserPolicyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    embyUser?: EmbyUserOmit
    resellerTier?: ResellerTierOmit
    creditBalance?: CreditBalanceOmit
    creditLog?: CreditLogOmit
    embyServer?: EmbyServerOmit
    package?: PackageOmit
    packageLibrary?: PackageLibraryOmit
    userServerLink?: UserServerLinkOmit
    embyAccount?: EmbyAccountOmit
    userPolicy?: UserPolicyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedServers: number
    creditLogsAuthored: number
    creditLogsTargeted: number
    suspendedLinks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedServers?: boolean | UserCountOutputTypeCountOwnedServersArgs
    creditLogsAuthored?: boolean | UserCountOutputTypeCountCreditLogsAuthoredArgs
    creditLogsTargeted?: boolean | UserCountOutputTypeCountCreditLogsTargetedArgs
    suspendedLinks?: boolean | UserCountOutputTypeCountSuspendedLinksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbyServerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditLogsAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditLogsTargetedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuspendedLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserServerLinkWhereInput
  }


  /**
   * Count Type EmbyUserCountOutputType
   */

  export type EmbyUserCountOutputType = {
    userServerLinks: number
    embyAccounts: number
  }

  export type EmbyUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userServerLinks?: boolean | EmbyUserCountOutputTypeCountUserServerLinksArgs
    embyAccounts?: boolean | EmbyUserCountOutputTypeCountEmbyAccountsArgs
  }

  // Custom InputTypes
  /**
   * EmbyUserCountOutputType without action
   */
  export type EmbyUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUserCountOutputType
     */
    select?: EmbyUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmbyUserCountOutputType without action
   */
  export type EmbyUserCountOutputTypeCountUserServerLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserServerLinkWhereInput
  }

  /**
   * EmbyUserCountOutputType without action
   */
  export type EmbyUserCountOutputTypeCountEmbyAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbyAccountWhereInput
  }


  /**
   * Count Type ResellerTierCountOutputType
   */

  export type ResellerTierCountOutputType = {
    users: number
  }

  export type ResellerTierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ResellerTierCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ResellerTierCountOutputType without action
   */
  export type ResellerTierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTierCountOutputType
     */
    select?: ResellerTierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResellerTierCountOutputType without action
   */
  export type ResellerTierCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type EmbyServerCountOutputType
   */

  export type EmbyServerCountOutputType = {
    packages: number
    userLinks: number
    embyAccounts: number
    userPolicies: number
  }

  export type EmbyServerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packages?: boolean | EmbyServerCountOutputTypeCountPackagesArgs
    userLinks?: boolean | EmbyServerCountOutputTypeCountUserLinksArgs
    embyAccounts?: boolean | EmbyServerCountOutputTypeCountEmbyAccountsArgs
    userPolicies?: boolean | EmbyServerCountOutputTypeCountUserPoliciesArgs
  }

  // Custom InputTypes
  /**
   * EmbyServerCountOutputType without action
   */
  export type EmbyServerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServerCountOutputType
     */
    select?: EmbyServerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmbyServerCountOutputType without action
   */
  export type EmbyServerCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }

  /**
   * EmbyServerCountOutputType without action
   */
  export type EmbyServerCountOutputTypeCountUserLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserServerLinkWhereInput
  }

  /**
   * EmbyServerCountOutputType without action
   */
  export type EmbyServerCountOutputTypeCountEmbyAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbyAccountWhereInput
  }

  /**
   * EmbyServerCountOutputType without action
   */
  export type EmbyServerCountOutputTypeCountUserPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPolicyWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    libraries: number
    userLinks: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libraries?: boolean | PackageCountOutputTypeCountLibrariesArgs
    userLinks?: boolean | PackageCountOutputTypeCountUserLinksArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageLibraryWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountUserLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserServerLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    hashedPassword: string | null
    role: $Enums.RoleName | null
    defaultDomain: string | null
    resellerTierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    suspensionUntil: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    hashedPassword: string | null
    role: $Enums.RoleName | null
    defaultDomain: string | null
    resellerTierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    suspensionUntil: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    hashedPassword: number
    role: number
    defaultDomain: number
    resellerTierId: number
    createdAt: number
    updatedAt: number
    isActive: number
    suspensionUntil: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    role?: true
    defaultDomain?: true
    resellerTierId?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    suspensionUntil?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    role?: true
    defaultDomain?: true
    resellerTierId?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    suspensionUntil?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    role?: true
    defaultDomain?: true
    resellerTierId?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    suspensionUntil?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    hashedPassword: string | null
    role: $Enums.RoleName
    defaultDomain: string | null
    resellerTierId: string | null
    createdAt: Date
    updatedAt: Date
    isActive: boolean
    suspensionUntil: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    role?: boolean
    defaultDomain?: boolean
    resellerTierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    suspensionUntil?: boolean
    resellerTier?: boolean | User$resellerTierArgs<ExtArgs>
    creditBalance?: boolean | User$creditBalanceArgs<ExtArgs>
    ownedServers?: boolean | User$ownedServersArgs<ExtArgs>
    creditLogsAuthored?: boolean | User$creditLogsAuthoredArgs<ExtArgs>
    creditLogsTargeted?: boolean | User$creditLogsTargetedArgs<ExtArgs>
    suspendedLinks?: boolean | User$suspendedLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    role?: boolean
    defaultDomain?: boolean
    resellerTierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    suspensionUntil?: boolean
    resellerTier?: boolean | User$resellerTierArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    role?: boolean
    defaultDomain?: boolean
    resellerTierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    suspensionUntil?: boolean
    resellerTier?: boolean | User$resellerTierArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    role?: boolean
    defaultDomain?: boolean
    resellerTierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    suspensionUntil?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "hashedPassword" | "role" | "defaultDomain" | "resellerTierId" | "createdAt" | "updatedAt" | "isActive" | "suspensionUntil", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resellerTier?: boolean | User$resellerTierArgs<ExtArgs>
    creditBalance?: boolean | User$creditBalanceArgs<ExtArgs>
    ownedServers?: boolean | User$ownedServersArgs<ExtArgs>
    creditLogsAuthored?: boolean | User$creditLogsAuthoredArgs<ExtArgs>
    creditLogsTargeted?: boolean | User$creditLogsTargetedArgs<ExtArgs>
    suspendedLinks?: boolean | User$suspendedLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resellerTier?: boolean | User$resellerTierArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resellerTier?: boolean | User$resellerTierArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resellerTier: Prisma.$ResellerTierPayload<ExtArgs> | null
      creditBalance: Prisma.$CreditBalancePayload<ExtArgs> | null
      ownedServers: Prisma.$EmbyServerPayload<ExtArgs>[]
      creditLogsAuthored: Prisma.$CreditLogPayload<ExtArgs>[]
      creditLogsTargeted: Prisma.$CreditLogPayload<ExtArgs>[]
      suspendedLinks: Prisma.$UserServerLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      hashedPassword: string | null
      role: $Enums.RoleName
      defaultDomain: string | null
      resellerTierId: string | null
      createdAt: Date
      updatedAt: Date
      isActive: boolean
      suspensionUntil: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resellerTier<T extends User$resellerTierArgs<ExtArgs> = {}>(args?: Subset<T, User$resellerTierArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creditBalance<T extends User$creditBalanceArgs<ExtArgs> = {}>(args?: Subset<T, User$creditBalanceArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ownedServers<T extends User$ownedServersArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedServersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditLogsAuthored<T extends User$creditLogsAuthoredArgs<ExtArgs> = {}>(args?: Subset<T, User$creditLogsAuthoredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditLogsTargeted<T extends User$creditLogsTargetedArgs<ExtArgs> = {}>(args?: Subset<T, User$creditLogsTargetedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suspendedLinks<T extends User$suspendedLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$suspendedLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'RoleName'>
    readonly defaultDomain: FieldRef<"User", 'String'>
    readonly resellerTierId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly suspensionUntil: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resellerTier
   */
  export type User$resellerTierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    where?: ResellerTierWhereInput
  }

  /**
   * User.creditBalance
   */
  export type User$creditBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    where?: CreditBalanceWhereInput
  }

  /**
   * User.ownedServers
   */
  export type User$ownedServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    where?: EmbyServerWhereInput
    orderBy?: EmbyServerOrderByWithRelationInput | EmbyServerOrderByWithRelationInput[]
    cursor?: EmbyServerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbyServerScalarFieldEnum | EmbyServerScalarFieldEnum[]
  }

  /**
   * User.creditLogsAuthored
   */
  export type User$creditLogsAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    where?: CreditLogWhereInput
    orderBy?: CreditLogOrderByWithRelationInput | CreditLogOrderByWithRelationInput[]
    cursor?: CreditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditLogScalarFieldEnum | CreditLogScalarFieldEnum[]
  }

  /**
   * User.creditLogsTargeted
   */
  export type User$creditLogsTargetedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    where?: CreditLogWhereInput
    orderBy?: CreditLogOrderByWithRelationInput | CreditLogOrderByWithRelationInput[]
    cursor?: CreditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditLogScalarFieldEnum | CreditLogScalarFieldEnum[]
  }

  /**
   * User.suspendedLinks
   */
  export type User$suspendedLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    where?: UserServerLinkWhereInput
    orderBy?: UserServerLinkOrderByWithRelationInput | UserServerLinkOrderByWithRelationInput[]
    cursor?: UserServerLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserServerLinkScalarFieldEnum | UserServerLinkScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EmbyUser
   */

  export type AggregateEmbyUser = {
    _count: EmbyUserCountAggregateOutputType | null
    _min: EmbyUserMinAggregateOutputType | null
    _max: EmbyUserMaxAggregateOutputType | null
  }

  export type EmbyUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmbyUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmbyUserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    hashedPassword: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmbyUserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmbyUserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmbyUserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmbyUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbyUser to aggregate.
     */
    where?: EmbyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyUsers to fetch.
     */
    orderBy?: EmbyUserOrderByWithRelationInput | EmbyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmbyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmbyUsers
    **/
    _count?: true | EmbyUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbyUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbyUserMaxAggregateInputType
  }

  export type GetEmbyUserAggregateType<T extends EmbyUserAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbyUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbyUser[P]>
      : GetScalarType<T[P], AggregateEmbyUser[P]>
  }




  export type EmbyUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbyUserWhereInput
    orderBy?: EmbyUserOrderByWithAggregationInput | EmbyUserOrderByWithAggregationInput[]
    by: EmbyUserScalarFieldEnum[] | EmbyUserScalarFieldEnum
    having?: EmbyUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbyUserCountAggregateInputType | true
    _min?: EmbyUserMinAggregateInputType
    _max?: EmbyUserMaxAggregateInputType
  }

  export type EmbyUserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    hashedPassword: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmbyUserCountAggregateOutputType | null
    _min: EmbyUserMinAggregateOutputType | null
    _max: EmbyUserMaxAggregateOutputType | null
  }

  type GetEmbyUserGroupByPayload<T extends EmbyUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbyUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbyUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbyUserGroupByOutputType[P]>
            : GetScalarType<T[P], EmbyUserGroupByOutputType[P]>
        }
      >
    >


  export type EmbyUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userServerLinks?: boolean | EmbyUser$userServerLinksArgs<ExtArgs>
    embyAccounts?: boolean | EmbyUser$embyAccountsArgs<ExtArgs>
    _count?: boolean | EmbyUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embyUser"]>

  export type EmbyUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["embyUser"]>

  export type EmbyUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["embyUser"]>

  export type EmbyUserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmbyUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "hashedPassword" | "createdAt" | "updatedAt", ExtArgs["result"]["embyUser"]>
  export type EmbyUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userServerLinks?: boolean | EmbyUser$userServerLinksArgs<ExtArgs>
    embyAccounts?: boolean | EmbyUser$embyAccountsArgs<ExtArgs>
    _count?: boolean | EmbyUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmbyUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmbyUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmbyUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmbyUser"
    objects: {
      userServerLinks: Prisma.$UserServerLinkPayload<ExtArgs>[]
      embyAccounts: Prisma.$EmbyAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      hashedPassword: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["embyUser"]>
    composites: {}
  }

  type EmbyUserGetPayload<S extends boolean | null | undefined | EmbyUserDefaultArgs> = $Result.GetResult<Prisma.$EmbyUserPayload, S>

  type EmbyUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmbyUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmbyUserCountAggregateInputType | true
    }

  export interface EmbyUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmbyUser'], meta: { name: 'EmbyUser' } }
    /**
     * Find zero or one EmbyUser that matches the filter.
     * @param {EmbyUserFindUniqueArgs} args - Arguments to find a EmbyUser
     * @example
     * // Get one EmbyUser
     * const embyUser = await prisma.embyUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmbyUserFindUniqueArgs>(args: SelectSubset<T, EmbyUserFindUniqueArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmbyUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmbyUserFindUniqueOrThrowArgs} args - Arguments to find a EmbyUser
     * @example
     * // Get one EmbyUser
     * const embyUser = await prisma.embyUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmbyUserFindUniqueOrThrowArgs>(args: SelectSubset<T, EmbyUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmbyUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyUserFindFirstArgs} args - Arguments to find a EmbyUser
     * @example
     * // Get one EmbyUser
     * const embyUser = await prisma.embyUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmbyUserFindFirstArgs>(args?: SelectSubset<T, EmbyUserFindFirstArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmbyUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyUserFindFirstOrThrowArgs} args - Arguments to find a EmbyUser
     * @example
     * // Get one EmbyUser
     * const embyUser = await prisma.embyUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmbyUserFindFirstOrThrowArgs>(args?: SelectSubset<T, EmbyUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmbyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmbyUsers
     * const embyUsers = await prisma.embyUser.findMany()
     * 
     * // Get first 10 EmbyUsers
     * const embyUsers = await prisma.embyUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embyUserWithIdOnly = await prisma.embyUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmbyUserFindManyArgs>(args?: SelectSubset<T, EmbyUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmbyUser.
     * @param {EmbyUserCreateArgs} args - Arguments to create a EmbyUser.
     * @example
     * // Create one EmbyUser
     * const EmbyUser = await prisma.embyUser.create({
     *   data: {
     *     // ... data to create a EmbyUser
     *   }
     * })
     * 
     */
    create<T extends EmbyUserCreateArgs>(args: SelectSubset<T, EmbyUserCreateArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmbyUsers.
     * @param {EmbyUserCreateManyArgs} args - Arguments to create many EmbyUsers.
     * @example
     * // Create many EmbyUsers
     * const embyUser = await prisma.embyUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmbyUserCreateManyArgs>(args?: SelectSubset<T, EmbyUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmbyUsers and returns the data saved in the database.
     * @param {EmbyUserCreateManyAndReturnArgs} args - Arguments to create many EmbyUsers.
     * @example
     * // Create many EmbyUsers
     * const embyUser = await prisma.embyUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmbyUsers and only return the `id`
     * const embyUserWithIdOnly = await prisma.embyUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmbyUserCreateManyAndReturnArgs>(args?: SelectSubset<T, EmbyUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmbyUser.
     * @param {EmbyUserDeleteArgs} args - Arguments to delete one EmbyUser.
     * @example
     * // Delete one EmbyUser
     * const EmbyUser = await prisma.embyUser.delete({
     *   where: {
     *     // ... filter to delete one EmbyUser
     *   }
     * })
     * 
     */
    delete<T extends EmbyUserDeleteArgs>(args: SelectSubset<T, EmbyUserDeleteArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmbyUser.
     * @param {EmbyUserUpdateArgs} args - Arguments to update one EmbyUser.
     * @example
     * // Update one EmbyUser
     * const embyUser = await prisma.embyUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmbyUserUpdateArgs>(args: SelectSubset<T, EmbyUserUpdateArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmbyUsers.
     * @param {EmbyUserDeleteManyArgs} args - Arguments to filter EmbyUsers to delete.
     * @example
     * // Delete a few EmbyUsers
     * const { count } = await prisma.embyUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmbyUserDeleteManyArgs>(args?: SelectSubset<T, EmbyUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmbyUsers
     * const embyUser = await prisma.embyUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmbyUserUpdateManyArgs>(args: SelectSubset<T, EmbyUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbyUsers and returns the data updated in the database.
     * @param {EmbyUserUpdateManyAndReturnArgs} args - Arguments to update many EmbyUsers.
     * @example
     * // Update many EmbyUsers
     * const embyUser = await prisma.embyUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmbyUsers and only return the `id`
     * const embyUserWithIdOnly = await prisma.embyUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmbyUserUpdateManyAndReturnArgs>(args: SelectSubset<T, EmbyUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmbyUser.
     * @param {EmbyUserUpsertArgs} args - Arguments to update or create a EmbyUser.
     * @example
     * // Update or create a EmbyUser
     * const embyUser = await prisma.embyUser.upsert({
     *   create: {
     *     // ... data to create a EmbyUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmbyUser we want to update
     *   }
     * })
     */
    upsert<T extends EmbyUserUpsertArgs>(args: SelectSubset<T, EmbyUserUpsertArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmbyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyUserCountArgs} args - Arguments to filter EmbyUsers to count.
     * @example
     * // Count the number of EmbyUsers
     * const count = await prisma.embyUser.count({
     *   where: {
     *     // ... the filter for the EmbyUsers we want to count
     *   }
     * })
    **/
    count<T extends EmbyUserCountArgs>(
      args?: Subset<T, EmbyUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbyUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmbyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmbyUserAggregateArgs>(args: Subset<T, EmbyUserAggregateArgs>): Prisma.PrismaPromise<GetEmbyUserAggregateType<T>>

    /**
     * Group by EmbyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmbyUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmbyUserGroupByArgs['orderBy'] }
        : { orderBy?: EmbyUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmbyUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbyUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmbyUser model
   */
  readonly fields: EmbyUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmbyUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmbyUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userServerLinks<T extends EmbyUser$userServerLinksArgs<ExtArgs> = {}>(args?: Subset<T, EmbyUser$userServerLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    embyAccounts<T extends EmbyUser$embyAccountsArgs<ExtArgs> = {}>(args?: Subset<T, EmbyUser$embyAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmbyUser model
   */
  interface EmbyUserFieldRefs {
    readonly id: FieldRef<"EmbyUser", 'String'>
    readonly email: FieldRef<"EmbyUser", 'String'>
    readonly name: FieldRef<"EmbyUser", 'String'>
    readonly hashedPassword: FieldRef<"EmbyUser", 'String'>
    readonly createdAt: FieldRef<"EmbyUser", 'DateTime'>
    readonly updatedAt: FieldRef<"EmbyUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmbyUser findUnique
   */
  export type EmbyUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * Filter, which EmbyUser to fetch.
     */
    where: EmbyUserWhereUniqueInput
  }

  /**
   * EmbyUser findUniqueOrThrow
   */
  export type EmbyUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * Filter, which EmbyUser to fetch.
     */
    where: EmbyUserWhereUniqueInput
  }

  /**
   * EmbyUser findFirst
   */
  export type EmbyUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * Filter, which EmbyUser to fetch.
     */
    where?: EmbyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyUsers to fetch.
     */
    orderBy?: EmbyUserOrderByWithRelationInput | EmbyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbyUsers.
     */
    cursor?: EmbyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbyUsers.
     */
    distinct?: EmbyUserScalarFieldEnum | EmbyUserScalarFieldEnum[]
  }

  /**
   * EmbyUser findFirstOrThrow
   */
  export type EmbyUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * Filter, which EmbyUser to fetch.
     */
    where?: EmbyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyUsers to fetch.
     */
    orderBy?: EmbyUserOrderByWithRelationInput | EmbyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbyUsers.
     */
    cursor?: EmbyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbyUsers.
     */
    distinct?: EmbyUserScalarFieldEnum | EmbyUserScalarFieldEnum[]
  }

  /**
   * EmbyUser findMany
   */
  export type EmbyUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * Filter, which EmbyUsers to fetch.
     */
    where?: EmbyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyUsers to fetch.
     */
    orderBy?: EmbyUserOrderByWithRelationInput | EmbyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmbyUsers.
     */
    cursor?: EmbyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyUsers.
     */
    skip?: number
    distinct?: EmbyUserScalarFieldEnum | EmbyUserScalarFieldEnum[]
  }

  /**
   * EmbyUser create
   */
  export type EmbyUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * The data needed to create a EmbyUser.
     */
    data: XOR<EmbyUserCreateInput, EmbyUserUncheckedCreateInput>
  }

  /**
   * EmbyUser createMany
   */
  export type EmbyUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmbyUsers.
     */
    data: EmbyUserCreateManyInput | EmbyUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmbyUser createManyAndReturn
   */
  export type EmbyUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * The data used to create many EmbyUsers.
     */
    data: EmbyUserCreateManyInput | EmbyUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmbyUser update
   */
  export type EmbyUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * The data needed to update a EmbyUser.
     */
    data: XOR<EmbyUserUpdateInput, EmbyUserUncheckedUpdateInput>
    /**
     * Choose, which EmbyUser to update.
     */
    where: EmbyUserWhereUniqueInput
  }

  /**
   * EmbyUser updateMany
   */
  export type EmbyUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmbyUsers.
     */
    data: XOR<EmbyUserUpdateManyMutationInput, EmbyUserUncheckedUpdateManyInput>
    /**
     * Filter which EmbyUsers to update
     */
    where?: EmbyUserWhereInput
    /**
     * Limit how many EmbyUsers to update.
     */
    limit?: number
  }

  /**
   * EmbyUser updateManyAndReturn
   */
  export type EmbyUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * The data used to update EmbyUsers.
     */
    data: XOR<EmbyUserUpdateManyMutationInput, EmbyUserUncheckedUpdateManyInput>
    /**
     * Filter which EmbyUsers to update
     */
    where?: EmbyUserWhereInput
    /**
     * Limit how many EmbyUsers to update.
     */
    limit?: number
  }

  /**
   * EmbyUser upsert
   */
  export type EmbyUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * The filter to search for the EmbyUser to update in case it exists.
     */
    where: EmbyUserWhereUniqueInput
    /**
     * In case the EmbyUser found by the `where` argument doesn't exist, create a new EmbyUser with this data.
     */
    create: XOR<EmbyUserCreateInput, EmbyUserUncheckedCreateInput>
    /**
     * In case the EmbyUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmbyUserUpdateInput, EmbyUserUncheckedUpdateInput>
  }

  /**
   * EmbyUser delete
   */
  export type EmbyUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
    /**
     * Filter which EmbyUser to delete.
     */
    where: EmbyUserWhereUniqueInput
  }

  /**
   * EmbyUser deleteMany
   */
  export type EmbyUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbyUsers to delete
     */
    where?: EmbyUserWhereInput
    /**
     * Limit how many EmbyUsers to delete.
     */
    limit?: number
  }

  /**
   * EmbyUser.userServerLinks
   */
  export type EmbyUser$userServerLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    where?: UserServerLinkWhereInput
    orderBy?: UserServerLinkOrderByWithRelationInput | UserServerLinkOrderByWithRelationInput[]
    cursor?: UserServerLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserServerLinkScalarFieldEnum | UserServerLinkScalarFieldEnum[]
  }

  /**
   * EmbyUser.embyAccounts
   */
  export type EmbyUser$embyAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    where?: EmbyAccountWhereInput
    orderBy?: EmbyAccountOrderByWithRelationInput | EmbyAccountOrderByWithRelationInput[]
    cursor?: EmbyAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbyAccountScalarFieldEnum | EmbyAccountScalarFieldEnum[]
  }

  /**
   * EmbyUser without action
   */
  export type EmbyUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyUser
     */
    select?: EmbyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyUser
     */
    omit?: EmbyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyUserInclude<ExtArgs> | null
  }


  /**
   * Model ResellerTier
   */

  export type AggregateResellerTier = {
    _count: ResellerTierCountAggregateOutputType | null
    _avg: ResellerTierAvgAggregateOutputType | null
    _sum: ResellerTierSumAggregateOutputType | null
    _min: ResellerTierMinAggregateOutputType | null
    _max: ResellerTierMaxAggregateOutputType | null
  }

  export type ResellerTierAvgAggregateOutputType = {
    creditToDaysRate: number | null
  }

  export type ResellerTierSumAggregateOutputType = {
    creditToDaysRate: number | null
  }

  export type ResellerTierMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    creditToDaysRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResellerTierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    creditToDaysRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResellerTierCountAggregateOutputType = {
    id: number
    name: number
    description: number
    creditToDaysRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResellerTierAvgAggregateInputType = {
    creditToDaysRate?: true
  }

  export type ResellerTierSumAggregateInputType = {
    creditToDaysRate?: true
  }

  export type ResellerTierMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creditToDaysRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResellerTierMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creditToDaysRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResellerTierCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creditToDaysRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResellerTierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResellerTier to aggregate.
     */
    where?: ResellerTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellerTiers to fetch.
     */
    orderBy?: ResellerTierOrderByWithRelationInput | ResellerTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResellerTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellerTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellerTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResellerTiers
    **/
    _count?: true | ResellerTierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResellerTierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResellerTierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResellerTierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResellerTierMaxAggregateInputType
  }

  export type GetResellerTierAggregateType<T extends ResellerTierAggregateArgs> = {
        [P in keyof T & keyof AggregateResellerTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResellerTier[P]>
      : GetScalarType<T[P], AggregateResellerTier[P]>
  }




  export type ResellerTierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellerTierWhereInput
    orderBy?: ResellerTierOrderByWithAggregationInput | ResellerTierOrderByWithAggregationInput[]
    by: ResellerTierScalarFieldEnum[] | ResellerTierScalarFieldEnum
    having?: ResellerTierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResellerTierCountAggregateInputType | true
    _avg?: ResellerTierAvgAggregateInputType
    _sum?: ResellerTierSumAggregateInputType
    _min?: ResellerTierMinAggregateInputType
    _max?: ResellerTierMaxAggregateInputType
  }

  export type ResellerTierGroupByOutputType = {
    id: string
    name: string
    description: string | null
    creditToDaysRate: number
    createdAt: Date
    updatedAt: Date
    _count: ResellerTierCountAggregateOutputType | null
    _avg: ResellerTierAvgAggregateOutputType | null
    _sum: ResellerTierSumAggregateOutputType | null
    _min: ResellerTierMinAggregateOutputType | null
    _max: ResellerTierMaxAggregateOutputType | null
  }

  type GetResellerTierGroupByPayload<T extends ResellerTierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResellerTierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResellerTierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResellerTierGroupByOutputType[P]>
            : GetScalarType<T[P], ResellerTierGroupByOutputType[P]>
        }
      >
    >


  export type ResellerTierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creditToDaysRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | ResellerTier$usersArgs<ExtArgs>
    _count?: boolean | ResellerTierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resellerTier"]>

  export type ResellerTierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creditToDaysRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resellerTier"]>

  export type ResellerTierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creditToDaysRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resellerTier"]>

  export type ResellerTierSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    creditToDaysRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResellerTierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "creditToDaysRate" | "createdAt" | "updatedAt", ExtArgs["result"]["resellerTier"]>
  export type ResellerTierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ResellerTier$usersArgs<ExtArgs>
    _count?: boolean | ResellerTierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResellerTierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResellerTierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResellerTierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResellerTier"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      creditToDaysRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resellerTier"]>
    composites: {}
  }

  type ResellerTierGetPayload<S extends boolean | null | undefined | ResellerTierDefaultArgs> = $Result.GetResult<Prisma.$ResellerTierPayload, S>

  type ResellerTierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResellerTierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResellerTierCountAggregateInputType | true
    }

  export interface ResellerTierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResellerTier'], meta: { name: 'ResellerTier' } }
    /**
     * Find zero or one ResellerTier that matches the filter.
     * @param {ResellerTierFindUniqueArgs} args - Arguments to find a ResellerTier
     * @example
     * // Get one ResellerTier
     * const resellerTier = await prisma.resellerTier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResellerTierFindUniqueArgs>(args: SelectSubset<T, ResellerTierFindUniqueArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResellerTier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResellerTierFindUniqueOrThrowArgs} args - Arguments to find a ResellerTier
     * @example
     * // Get one ResellerTier
     * const resellerTier = await prisma.resellerTier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResellerTierFindUniqueOrThrowArgs>(args: SelectSubset<T, ResellerTierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResellerTier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerTierFindFirstArgs} args - Arguments to find a ResellerTier
     * @example
     * // Get one ResellerTier
     * const resellerTier = await prisma.resellerTier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResellerTierFindFirstArgs>(args?: SelectSubset<T, ResellerTierFindFirstArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResellerTier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerTierFindFirstOrThrowArgs} args - Arguments to find a ResellerTier
     * @example
     * // Get one ResellerTier
     * const resellerTier = await prisma.resellerTier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResellerTierFindFirstOrThrowArgs>(args?: SelectSubset<T, ResellerTierFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResellerTiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerTierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResellerTiers
     * const resellerTiers = await prisma.resellerTier.findMany()
     * 
     * // Get first 10 ResellerTiers
     * const resellerTiers = await prisma.resellerTier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resellerTierWithIdOnly = await prisma.resellerTier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResellerTierFindManyArgs>(args?: SelectSubset<T, ResellerTierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResellerTier.
     * @param {ResellerTierCreateArgs} args - Arguments to create a ResellerTier.
     * @example
     * // Create one ResellerTier
     * const ResellerTier = await prisma.resellerTier.create({
     *   data: {
     *     // ... data to create a ResellerTier
     *   }
     * })
     * 
     */
    create<T extends ResellerTierCreateArgs>(args: SelectSubset<T, ResellerTierCreateArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResellerTiers.
     * @param {ResellerTierCreateManyArgs} args - Arguments to create many ResellerTiers.
     * @example
     * // Create many ResellerTiers
     * const resellerTier = await prisma.resellerTier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResellerTierCreateManyArgs>(args?: SelectSubset<T, ResellerTierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResellerTiers and returns the data saved in the database.
     * @param {ResellerTierCreateManyAndReturnArgs} args - Arguments to create many ResellerTiers.
     * @example
     * // Create many ResellerTiers
     * const resellerTier = await prisma.resellerTier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResellerTiers and only return the `id`
     * const resellerTierWithIdOnly = await prisma.resellerTier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResellerTierCreateManyAndReturnArgs>(args?: SelectSubset<T, ResellerTierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResellerTier.
     * @param {ResellerTierDeleteArgs} args - Arguments to delete one ResellerTier.
     * @example
     * // Delete one ResellerTier
     * const ResellerTier = await prisma.resellerTier.delete({
     *   where: {
     *     // ... filter to delete one ResellerTier
     *   }
     * })
     * 
     */
    delete<T extends ResellerTierDeleteArgs>(args: SelectSubset<T, ResellerTierDeleteArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResellerTier.
     * @param {ResellerTierUpdateArgs} args - Arguments to update one ResellerTier.
     * @example
     * // Update one ResellerTier
     * const resellerTier = await prisma.resellerTier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResellerTierUpdateArgs>(args: SelectSubset<T, ResellerTierUpdateArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResellerTiers.
     * @param {ResellerTierDeleteManyArgs} args - Arguments to filter ResellerTiers to delete.
     * @example
     * // Delete a few ResellerTiers
     * const { count } = await prisma.resellerTier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResellerTierDeleteManyArgs>(args?: SelectSubset<T, ResellerTierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResellerTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerTierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResellerTiers
     * const resellerTier = await prisma.resellerTier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResellerTierUpdateManyArgs>(args: SelectSubset<T, ResellerTierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResellerTiers and returns the data updated in the database.
     * @param {ResellerTierUpdateManyAndReturnArgs} args - Arguments to update many ResellerTiers.
     * @example
     * // Update many ResellerTiers
     * const resellerTier = await prisma.resellerTier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResellerTiers and only return the `id`
     * const resellerTierWithIdOnly = await prisma.resellerTier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResellerTierUpdateManyAndReturnArgs>(args: SelectSubset<T, ResellerTierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResellerTier.
     * @param {ResellerTierUpsertArgs} args - Arguments to update or create a ResellerTier.
     * @example
     * // Update or create a ResellerTier
     * const resellerTier = await prisma.resellerTier.upsert({
     *   create: {
     *     // ... data to create a ResellerTier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResellerTier we want to update
     *   }
     * })
     */
    upsert<T extends ResellerTierUpsertArgs>(args: SelectSubset<T, ResellerTierUpsertArgs<ExtArgs>>): Prisma__ResellerTierClient<$Result.GetResult<Prisma.$ResellerTierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResellerTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerTierCountArgs} args - Arguments to filter ResellerTiers to count.
     * @example
     * // Count the number of ResellerTiers
     * const count = await prisma.resellerTier.count({
     *   where: {
     *     // ... the filter for the ResellerTiers we want to count
     *   }
     * })
    **/
    count<T extends ResellerTierCountArgs>(
      args?: Subset<T, ResellerTierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResellerTierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResellerTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerTierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResellerTierAggregateArgs>(args: Subset<T, ResellerTierAggregateArgs>): Prisma.PrismaPromise<GetResellerTierAggregateType<T>>

    /**
     * Group by ResellerTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerTierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResellerTierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResellerTierGroupByArgs['orderBy'] }
        : { orderBy?: ResellerTierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResellerTierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResellerTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResellerTier model
   */
  readonly fields: ResellerTierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResellerTier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResellerTierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends ResellerTier$usersArgs<ExtArgs> = {}>(args?: Subset<T, ResellerTier$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResellerTier model
   */
  interface ResellerTierFieldRefs {
    readonly id: FieldRef<"ResellerTier", 'String'>
    readonly name: FieldRef<"ResellerTier", 'String'>
    readonly description: FieldRef<"ResellerTier", 'String'>
    readonly creditToDaysRate: FieldRef<"ResellerTier", 'Int'>
    readonly createdAt: FieldRef<"ResellerTier", 'DateTime'>
    readonly updatedAt: FieldRef<"ResellerTier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResellerTier findUnique
   */
  export type ResellerTierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * Filter, which ResellerTier to fetch.
     */
    where: ResellerTierWhereUniqueInput
  }

  /**
   * ResellerTier findUniqueOrThrow
   */
  export type ResellerTierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * Filter, which ResellerTier to fetch.
     */
    where: ResellerTierWhereUniqueInput
  }

  /**
   * ResellerTier findFirst
   */
  export type ResellerTierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * Filter, which ResellerTier to fetch.
     */
    where?: ResellerTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellerTiers to fetch.
     */
    orderBy?: ResellerTierOrderByWithRelationInput | ResellerTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResellerTiers.
     */
    cursor?: ResellerTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellerTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellerTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResellerTiers.
     */
    distinct?: ResellerTierScalarFieldEnum | ResellerTierScalarFieldEnum[]
  }

  /**
   * ResellerTier findFirstOrThrow
   */
  export type ResellerTierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * Filter, which ResellerTier to fetch.
     */
    where?: ResellerTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellerTiers to fetch.
     */
    orderBy?: ResellerTierOrderByWithRelationInput | ResellerTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResellerTiers.
     */
    cursor?: ResellerTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellerTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellerTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResellerTiers.
     */
    distinct?: ResellerTierScalarFieldEnum | ResellerTierScalarFieldEnum[]
  }

  /**
   * ResellerTier findMany
   */
  export type ResellerTierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * Filter, which ResellerTiers to fetch.
     */
    where?: ResellerTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellerTiers to fetch.
     */
    orderBy?: ResellerTierOrderByWithRelationInput | ResellerTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResellerTiers.
     */
    cursor?: ResellerTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellerTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellerTiers.
     */
    skip?: number
    distinct?: ResellerTierScalarFieldEnum | ResellerTierScalarFieldEnum[]
  }

  /**
   * ResellerTier create
   */
  export type ResellerTierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * The data needed to create a ResellerTier.
     */
    data: XOR<ResellerTierCreateInput, ResellerTierUncheckedCreateInput>
  }

  /**
   * ResellerTier createMany
   */
  export type ResellerTierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResellerTiers.
     */
    data: ResellerTierCreateManyInput | ResellerTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResellerTier createManyAndReturn
   */
  export type ResellerTierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * The data used to create many ResellerTiers.
     */
    data: ResellerTierCreateManyInput | ResellerTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResellerTier update
   */
  export type ResellerTierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * The data needed to update a ResellerTier.
     */
    data: XOR<ResellerTierUpdateInput, ResellerTierUncheckedUpdateInput>
    /**
     * Choose, which ResellerTier to update.
     */
    where: ResellerTierWhereUniqueInput
  }

  /**
   * ResellerTier updateMany
   */
  export type ResellerTierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResellerTiers.
     */
    data: XOR<ResellerTierUpdateManyMutationInput, ResellerTierUncheckedUpdateManyInput>
    /**
     * Filter which ResellerTiers to update
     */
    where?: ResellerTierWhereInput
    /**
     * Limit how many ResellerTiers to update.
     */
    limit?: number
  }

  /**
   * ResellerTier updateManyAndReturn
   */
  export type ResellerTierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * The data used to update ResellerTiers.
     */
    data: XOR<ResellerTierUpdateManyMutationInput, ResellerTierUncheckedUpdateManyInput>
    /**
     * Filter which ResellerTiers to update
     */
    where?: ResellerTierWhereInput
    /**
     * Limit how many ResellerTiers to update.
     */
    limit?: number
  }

  /**
   * ResellerTier upsert
   */
  export type ResellerTierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * The filter to search for the ResellerTier to update in case it exists.
     */
    where: ResellerTierWhereUniqueInput
    /**
     * In case the ResellerTier found by the `where` argument doesn't exist, create a new ResellerTier with this data.
     */
    create: XOR<ResellerTierCreateInput, ResellerTierUncheckedCreateInput>
    /**
     * In case the ResellerTier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResellerTierUpdateInput, ResellerTierUncheckedUpdateInput>
  }

  /**
   * ResellerTier delete
   */
  export type ResellerTierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
    /**
     * Filter which ResellerTier to delete.
     */
    where: ResellerTierWhereUniqueInput
  }

  /**
   * ResellerTier deleteMany
   */
  export type ResellerTierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResellerTiers to delete
     */
    where?: ResellerTierWhereInput
    /**
     * Limit how many ResellerTiers to delete.
     */
    limit?: number
  }

  /**
   * ResellerTier.users
   */
  export type ResellerTier$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * ResellerTier without action
   */
  export type ResellerTierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerTier
     */
    select?: ResellerTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellerTier
     */
    omit?: ResellerTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerTierInclude<ExtArgs> | null
  }


  /**
   * Model CreditBalance
   */

  export type AggregateCreditBalance = {
    _count: CreditBalanceCountAggregateOutputType | null
    _avg: CreditBalanceAvgAggregateOutputType | null
    _sum: CreditBalanceSumAggregateOutputType | null
    _min: CreditBalanceMinAggregateOutputType | null
    _max: CreditBalanceMaxAggregateOutputType | null
  }

  export type CreditBalanceAvgAggregateOutputType = {
    balance: number | null
  }

  export type CreditBalanceSumAggregateOutputType = {
    balance: number | null
  }

  export type CreditBalanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
    updatedAt: Date | null
  }

  export type CreditBalanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
    updatedAt: Date | null
  }

  export type CreditBalanceCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    updatedAt: number
    _all: number
  }


  export type CreditBalanceAvgAggregateInputType = {
    balance?: true
  }

  export type CreditBalanceSumAggregateInputType = {
    balance?: true
  }

  export type CreditBalanceMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    updatedAt?: true
  }

  export type CreditBalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    updatedAt?: true
  }

  export type CreditBalanceCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditBalance to aggregate.
     */
    where?: CreditBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditBalances to fetch.
     */
    orderBy?: CreditBalanceOrderByWithRelationInput | CreditBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditBalances
    **/
    _count?: true | CreditBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditBalanceMaxAggregateInputType
  }

  export type GetCreditBalanceAggregateType<T extends CreditBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditBalance[P]>
      : GetScalarType<T[P], AggregateCreditBalance[P]>
  }




  export type CreditBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditBalanceWhereInput
    orderBy?: CreditBalanceOrderByWithAggregationInput | CreditBalanceOrderByWithAggregationInput[]
    by: CreditBalanceScalarFieldEnum[] | CreditBalanceScalarFieldEnum
    having?: CreditBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditBalanceCountAggregateInputType | true
    _avg?: CreditBalanceAvgAggregateInputType
    _sum?: CreditBalanceSumAggregateInputType
    _min?: CreditBalanceMinAggregateInputType
    _max?: CreditBalanceMaxAggregateInputType
  }

  export type CreditBalanceGroupByOutputType = {
    id: string
    userId: string
    balance: number
    updatedAt: Date
    _count: CreditBalanceCountAggregateOutputType | null
    _avg: CreditBalanceAvgAggregateOutputType | null
    _sum: CreditBalanceSumAggregateOutputType | null
    _min: CreditBalanceMinAggregateOutputType | null
    _max: CreditBalanceMaxAggregateOutputType | null
  }

  type GetCreditBalanceGroupByPayload<T extends CreditBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], CreditBalanceGroupByOutputType[P]>
        }
      >
    >


  export type CreditBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditBalance"]>

  export type CreditBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditBalance"]>

  export type CreditBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditBalance"]>

  export type CreditBalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    updatedAt?: boolean
  }

  export type CreditBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balance" | "updatedAt", ExtArgs["result"]["creditBalance"]>
  export type CreditBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditBalance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      balance: number
      updatedAt: Date
    }, ExtArgs["result"]["creditBalance"]>
    composites: {}
  }

  type CreditBalanceGetPayload<S extends boolean | null | undefined | CreditBalanceDefaultArgs> = $Result.GetResult<Prisma.$CreditBalancePayload, S>

  type CreditBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditBalanceCountAggregateInputType | true
    }

  export interface CreditBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditBalance'], meta: { name: 'CreditBalance' } }
    /**
     * Find zero or one CreditBalance that matches the filter.
     * @param {CreditBalanceFindUniqueArgs} args - Arguments to find a CreditBalance
     * @example
     * // Get one CreditBalance
     * const creditBalance = await prisma.creditBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditBalanceFindUniqueArgs>(args: SelectSubset<T, CreditBalanceFindUniqueArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditBalanceFindUniqueOrThrowArgs} args - Arguments to find a CreditBalance
     * @example
     * // Get one CreditBalance
     * const creditBalance = await prisma.creditBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditBalanceFindFirstArgs} args - Arguments to find a CreditBalance
     * @example
     * // Get one CreditBalance
     * const creditBalance = await prisma.creditBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditBalanceFindFirstArgs>(args?: SelectSubset<T, CreditBalanceFindFirstArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditBalanceFindFirstOrThrowArgs} args - Arguments to find a CreditBalance
     * @example
     * // Get one CreditBalance
     * const creditBalance = await prisma.creditBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditBalances
     * const creditBalances = await prisma.creditBalance.findMany()
     * 
     * // Get first 10 CreditBalances
     * const creditBalances = await prisma.creditBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditBalanceWithIdOnly = await prisma.creditBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditBalanceFindManyArgs>(args?: SelectSubset<T, CreditBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditBalance.
     * @param {CreditBalanceCreateArgs} args - Arguments to create a CreditBalance.
     * @example
     * // Create one CreditBalance
     * const CreditBalance = await prisma.creditBalance.create({
     *   data: {
     *     // ... data to create a CreditBalance
     *   }
     * })
     * 
     */
    create<T extends CreditBalanceCreateArgs>(args: SelectSubset<T, CreditBalanceCreateArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditBalances.
     * @param {CreditBalanceCreateManyArgs} args - Arguments to create many CreditBalances.
     * @example
     * // Create many CreditBalances
     * const creditBalance = await prisma.creditBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditBalanceCreateManyArgs>(args?: SelectSubset<T, CreditBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditBalances and returns the data saved in the database.
     * @param {CreditBalanceCreateManyAndReturnArgs} args - Arguments to create many CreditBalances.
     * @example
     * // Create many CreditBalances
     * const creditBalance = await prisma.creditBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditBalances and only return the `id`
     * const creditBalanceWithIdOnly = await prisma.creditBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditBalance.
     * @param {CreditBalanceDeleteArgs} args - Arguments to delete one CreditBalance.
     * @example
     * // Delete one CreditBalance
     * const CreditBalance = await prisma.creditBalance.delete({
     *   where: {
     *     // ... filter to delete one CreditBalance
     *   }
     * })
     * 
     */
    delete<T extends CreditBalanceDeleteArgs>(args: SelectSubset<T, CreditBalanceDeleteArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditBalance.
     * @param {CreditBalanceUpdateArgs} args - Arguments to update one CreditBalance.
     * @example
     * // Update one CreditBalance
     * const creditBalance = await prisma.creditBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditBalanceUpdateArgs>(args: SelectSubset<T, CreditBalanceUpdateArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditBalances.
     * @param {CreditBalanceDeleteManyArgs} args - Arguments to filter CreditBalances to delete.
     * @example
     * // Delete a few CreditBalances
     * const { count } = await prisma.creditBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditBalanceDeleteManyArgs>(args?: SelectSubset<T, CreditBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditBalances
     * const creditBalance = await prisma.creditBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditBalanceUpdateManyArgs>(args: SelectSubset<T, CreditBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditBalances and returns the data updated in the database.
     * @param {CreditBalanceUpdateManyAndReturnArgs} args - Arguments to update many CreditBalances.
     * @example
     * // Update many CreditBalances
     * const creditBalance = await prisma.creditBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditBalances and only return the `id`
     * const creditBalanceWithIdOnly = await prisma.creditBalance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditBalance.
     * @param {CreditBalanceUpsertArgs} args - Arguments to update or create a CreditBalance.
     * @example
     * // Update or create a CreditBalance
     * const creditBalance = await prisma.creditBalance.upsert({
     *   create: {
     *     // ... data to create a CreditBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditBalance we want to update
     *   }
     * })
     */
    upsert<T extends CreditBalanceUpsertArgs>(args: SelectSubset<T, CreditBalanceUpsertArgs<ExtArgs>>): Prisma__CreditBalanceClient<$Result.GetResult<Prisma.$CreditBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditBalanceCountArgs} args - Arguments to filter CreditBalances to count.
     * @example
     * // Count the number of CreditBalances
     * const count = await prisma.creditBalance.count({
     *   where: {
     *     // ... the filter for the CreditBalances we want to count
     *   }
     * })
    **/
    count<T extends CreditBalanceCountArgs>(
      args?: Subset<T, CreditBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditBalanceAggregateArgs>(args: Subset<T, CreditBalanceAggregateArgs>): Prisma.PrismaPromise<GetCreditBalanceAggregateType<T>>

    /**
     * Group by CreditBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditBalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditBalanceGroupByArgs['orderBy'] }
        : { orderBy?: CreditBalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditBalance model
   */
  readonly fields: CreditBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditBalance model
   */
  interface CreditBalanceFieldRefs {
    readonly id: FieldRef<"CreditBalance", 'String'>
    readonly userId: FieldRef<"CreditBalance", 'String'>
    readonly balance: FieldRef<"CreditBalance", 'Int'>
    readonly updatedAt: FieldRef<"CreditBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditBalance findUnique
   */
  export type CreditBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * Filter, which CreditBalance to fetch.
     */
    where: CreditBalanceWhereUniqueInput
  }

  /**
   * CreditBalance findUniqueOrThrow
   */
  export type CreditBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * Filter, which CreditBalance to fetch.
     */
    where: CreditBalanceWhereUniqueInput
  }

  /**
   * CreditBalance findFirst
   */
  export type CreditBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * Filter, which CreditBalance to fetch.
     */
    where?: CreditBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditBalances to fetch.
     */
    orderBy?: CreditBalanceOrderByWithRelationInput | CreditBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditBalances.
     */
    cursor?: CreditBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditBalances.
     */
    distinct?: CreditBalanceScalarFieldEnum | CreditBalanceScalarFieldEnum[]
  }

  /**
   * CreditBalance findFirstOrThrow
   */
  export type CreditBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * Filter, which CreditBalance to fetch.
     */
    where?: CreditBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditBalances to fetch.
     */
    orderBy?: CreditBalanceOrderByWithRelationInput | CreditBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditBalances.
     */
    cursor?: CreditBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditBalances.
     */
    distinct?: CreditBalanceScalarFieldEnum | CreditBalanceScalarFieldEnum[]
  }

  /**
   * CreditBalance findMany
   */
  export type CreditBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * Filter, which CreditBalances to fetch.
     */
    where?: CreditBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditBalances to fetch.
     */
    orderBy?: CreditBalanceOrderByWithRelationInput | CreditBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditBalances.
     */
    cursor?: CreditBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditBalances.
     */
    skip?: number
    distinct?: CreditBalanceScalarFieldEnum | CreditBalanceScalarFieldEnum[]
  }

  /**
   * CreditBalance create
   */
  export type CreditBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditBalance.
     */
    data: XOR<CreditBalanceCreateInput, CreditBalanceUncheckedCreateInput>
  }

  /**
   * CreditBalance createMany
   */
  export type CreditBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditBalances.
     */
    data: CreditBalanceCreateManyInput | CreditBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditBalance createManyAndReturn
   */
  export type CreditBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many CreditBalances.
     */
    data: CreditBalanceCreateManyInput | CreditBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditBalance update
   */
  export type CreditBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditBalance.
     */
    data: XOR<CreditBalanceUpdateInput, CreditBalanceUncheckedUpdateInput>
    /**
     * Choose, which CreditBalance to update.
     */
    where: CreditBalanceWhereUniqueInput
  }

  /**
   * CreditBalance updateMany
   */
  export type CreditBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditBalances.
     */
    data: XOR<CreditBalanceUpdateManyMutationInput, CreditBalanceUncheckedUpdateManyInput>
    /**
     * Filter which CreditBalances to update
     */
    where?: CreditBalanceWhereInput
    /**
     * Limit how many CreditBalances to update.
     */
    limit?: number
  }

  /**
   * CreditBalance updateManyAndReturn
   */
  export type CreditBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * The data used to update CreditBalances.
     */
    data: XOR<CreditBalanceUpdateManyMutationInput, CreditBalanceUncheckedUpdateManyInput>
    /**
     * Filter which CreditBalances to update
     */
    where?: CreditBalanceWhereInput
    /**
     * Limit how many CreditBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditBalance upsert
   */
  export type CreditBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditBalance to update in case it exists.
     */
    where: CreditBalanceWhereUniqueInput
    /**
     * In case the CreditBalance found by the `where` argument doesn't exist, create a new CreditBalance with this data.
     */
    create: XOR<CreditBalanceCreateInput, CreditBalanceUncheckedCreateInput>
    /**
     * In case the CreditBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditBalanceUpdateInput, CreditBalanceUncheckedUpdateInput>
  }

  /**
   * CreditBalance delete
   */
  export type CreditBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
    /**
     * Filter which CreditBalance to delete.
     */
    where: CreditBalanceWhereUniqueInput
  }

  /**
   * CreditBalance deleteMany
   */
  export type CreditBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditBalances to delete
     */
    where?: CreditBalanceWhereInput
    /**
     * Limit how many CreditBalances to delete.
     */
    limit?: number
  }

  /**
   * CreditBalance without action
   */
  export type CreditBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditBalance
     */
    select?: CreditBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditBalance
     */
    omit?: CreditBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditBalanceInclude<ExtArgs> | null
  }


  /**
   * Model CreditLog
   */

  export type AggregateCreditLog = {
    _count: CreditLogCountAggregateOutputType | null
    _avg: CreditLogAvgAggregateOutputType | null
    _sum: CreditLogSumAggregateOutputType | null
    _min: CreditLogMinAggregateOutputType | null
    _max: CreditLogMaxAggregateOutputType | null
  }

  export type CreditLogAvgAggregateOutputType = {
    delta: number | null
  }

  export type CreditLogSumAggregateOutputType = {
    delta: number | null
  }

  export type CreditLogMinAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    delta: number | null
    reason: string | null
    targetUserId: string | null
    createdAt: Date | null
  }

  export type CreditLogMaxAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    delta: number | null
    reason: string | null
    targetUserId: string | null
    createdAt: Date | null
  }

  export type CreditLogCountAggregateOutputType = {
    id: number
    actorUserId: number
    delta: number
    reason: number
    targetUserId: number
    createdAt: number
    _all: number
  }


  export type CreditLogAvgAggregateInputType = {
    delta?: true
  }

  export type CreditLogSumAggregateInputType = {
    delta?: true
  }

  export type CreditLogMinAggregateInputType = {
    id?: true
    actorUserId?: true
    delta?: true
    reason?: true
    targetUserId?: true
    createdAt?: true
  }

  export type CreditLogMaxAggregateInputType = {
    id?: true
    actorUserId?: true
    delta?: true
    reason?: true
    targetUserId?: true
    createdAt?: true
  }

  export type CreditLogCountAggregateInputType = {
    id?: true
    actorUserId?: true
    delta?: true
    reason?: true
    targetUserId?: true
    createdAt?: true
    _all?: true
  }

  export type CreditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditLog to aggregate.
     */
    where?: CreditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditLogs to fetch.
     */
    orderBy?: CreditLogOrderByWithRelationInput | CreditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditLogs
    **/
    _count?: true | CreditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditLogMaxAggregateInputType
  }

  export type GetCreditLogAggregateType<T extends CreditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditLog[P]>
      : GetScalarType<T[P], AggregateCreditLog[P]>
  }




  export type CreditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditLogWhereInput
    orderBy?: CreditLogOrderByWithAggregationInput | CreditLogOrderByWithAggregationInput[]
    by: CreditLogScalarFieldEnum[] | CreditLogScalarFieldEnum
    having?: CreditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditLogCountAggregateInputType | true
    _avg?: CreditLogAvgAggregateInputType
    _sum?: CreditLogSumAggregateInputType
    _min?: CreditLogMinAggregateInputType
    _max?: CreditLogMaxAggregateInputType
  }

  export type CreditLogGroupByOutputType = {
    id: string
    actorUserId: string
    delta: number
    reason: string | null
    targetUserId: string | null
    createdAt: Date
    _count: CreditLogCountAggregateOutputType | null
    _avg: CreditLogAvgAggregateOutputType | null
    _sum: CreditLogSumAggregateOutputType | null
    _min: CreditLogMinAggregateOutputType | null
    _max: CreditLogMaxAggregateOutputType | null
  }

  type GetCreditLogGroupByPayload<T extends CreditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditLogGroupByOutputType[P]>
            : GetScalarType<T[P], CreditLogGroupByOutputType[P]>
        }
      >
    >


  export type CreditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    delta?: boolean
    reason?: boolean
    targetUserId?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | CreditLog$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["creditLog"]>

  export type CreditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    delta?: boolean
    reason?: boolean
    targetUserId?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | CreditLog$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["creditLog"]>

  export type CreditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    delta?: boolean
    reason?: boolean
    targetUserId?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | CreditLog$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["creditLog"]>

  export type CreditLogSelectScalar = {
    id?: boolean
    actorUserId?: boolean
    delta?: boolean
    reason?: boolean
    targetUserId?: boolean
    createdAt?: boolean
  }

  export type CreditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorUserId" | "delta" | "reason" | "targetUserId" | "createdAt", ExtArgs["result"]["creditLog"]>
  export type CreditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | CreditLog$targetUserArgs<ExtArgs>
  }
  export type CreditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | CreditLog$targetUserArgs<ExtArgs>
  }
  export type CreditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | CreditLog$targetUserArgs<ExtArgs>
  }

  export type $CreditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorUserId: string
      delta: number
      reason: string | null
      targetUserId: string | null
      createdAt: Date
    }, ExtArgs["result"]["creditLog"]>
    composites: {}
  }

  type CreditLogGetPayload<S extends boolean | null | undefined | CreditLogDefaultArgs> = $Result.GetResult<Prisma.$CreditLogPayload, S>

  type CreditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditLogCountAggregateInputType | true
    }

  export interface CreditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditLog'], meta: { name: 'CreditLog' } }
    /**
     * Find zero or one CreditLog that matches the filter.
     * @param {CreditLogFindUniqueArgs} args - Arguments to find a CreditLog
     * @example
     * // Get one CreditLog
     * const creditLog = await prisma.creditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditLogFindUniqueArgs>(args: SelectSubset<T, CreditLogFindUniqueArgs<ExtArgs>>): Prisma__CreditLogClient<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditLogFindUniqueOrThrowArgs} args - Arguments to find a CreditLog
     * @example
     * // Get one CreditLog
     * const creditLog = await prisma.creditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditLogClient<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLogFindFirstArgs} args - Arguments to find a CreditLog
     * @example
     * // Get one CreditLog
     * const creditLog = await prisma.creditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditLogFindFirstArgs>(args?: SelectSubset<T, CreditLogFindFirstArgs<ExtArgs>>): Prisma__CreditLogClient<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLogFindFirstOrThrowArgs} args - Arguments to find a CreditLog
     * @example
     * // Get one CreditLog
     * const creditLog = await prisma.creditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditLogClient<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditLogs
     * const creditLogs = await prisma.creditLog.findMany()
     * 
     * // Get first 10 CreditLogs
     * const creditLogs = await prisma.creditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditLogWithIdOnly = await prisma.creditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditLogFindManyArgs>(args?: SelectSubset<T, CreditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditLog.
     * @param {CreditLogCreateArgs} args - Arguments to create a CreditLog.
     * @example
     * // Create one CreditLog
     * const CreditLog = await prisma.creditLog.create({
     *   data: {
     *     // ... data to create a CreditLog
     *   }
     * })
     * 
     */
    create<T extends CreditLogCreateArgs>(args: SelectSubset<T, CreditLogCreateArgs<ExtArgs>>): Prisma__CreditLogClient<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditLogs.
     * @param {CreditLogCreateManyArgs} args - Arguments to create many CreditLogs.
     * @example
     * // Create many CreditLogs
     * const creditLog = await prisma.creditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditLogCreateManyArgs>(args?: SelectSubset<T, CreditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditLogs and returns the data saved in the database.
     * @param {CreditLogCreateManyAndReturnArgs} args - Arguments to create many CreditLogs.
     * @example
     * // Create many CreditLogs
     * const creditLog = await prisma.creditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditLogs and only return the `id`
     * const creditLogWithIdOnly = await prisma.creditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditLog.
     * @param {CreditLogDeleteArgs} args - Arguments to delete one CreditLog.
     * @example
     * // Delete one CreditLog
     * const CreditLog = await prisma.creditLog.delete({
     *   where: {
     *     // ... filter to delete one CreditLog
     *   }
     * })
     * 
     */
    delete<T extends CreditLogDeleteArgs>(args: SelectSubset<T, CreditLogDeleteArgs<ExtArgs>>): Prisma__CreditLogClient<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditLog.
     * @param {CreditLogUpdateArgs} args - Arguments to update one CreditLog.
     * @example
     * // Update one CreditLog
     * const creditLog = await prisma.creditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditLogUpdateArgs>(args: SelectSubset<T, CreditLogUpdateArgs<ExtArgs>>): Prisma__CreditLogClient<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditLogs.
     * @param {CreditLogDeleteManyArgs} args - Arguments to filter CreditLogs to delete.
     * @example
     * // Delete a few CreditLogs
     * const { count } = await prisma.creditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditLogDeleteManyArgs>(args?: SelectSubset<T, CreditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditLogs
     * const creditLog = await prisma.creditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditLogUpdateManyArgs>(args: SelectSubset<T, CreditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditLogs and returns the data updated in the database.
     * @param {CreditLogUpdateManyAndReturnArgs} args - Arguments to update many CreditLogs.
     * @example
     * // Update many CreditLogs
     * const creditLog = await prisma.creditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditLogs and only return the `id`
     * const creditLogWithIdOnly = await prisma.creditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditLog.
     * @param {CreditLogUpsertArgs} args - Arguments to update or create a CreditLog.
     * @example
     * // Update or create a CreditLog
     * const creditLog = await prisma.creditLog.upsert({
     *   create: {
     *     // ... data to create a CreditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditLog we want to update
     *   }
     * })
     */
    upsert<T extends CreditLogUpsertArgs>(args: SelectSubset<T, CreditLogUpsertArgs<ExtArgs>>): Prisma__CreditLogClient<$Result.GetResult<Prisma.$CreditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLogCountArgs} args - Arguments to filter CreditLogs to count.
     * @example
     * // Count the number of CreditLogs
     * const count = await prisma.creditLog.count({
     *   where: {
     *     // ... the filter for the CreditLogs we want to count
     *   }
     * })
    **/
    count<T extends CreditLogCountArgs>(
      args?: Subset<T, CreditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditLogAggregateArgs>(args: Subset<T, CreditLogAggregateArgs>): Prisma.PrismaPromise<GetCreditLogAggregateType<T>>

    /**
     * Group by CreditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditLogGroupByArgs['orderBy'] }
        : { orderBy?: CreditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditLog model
   */
  readonly fields: CreditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends CreditLog$targetUserArgs<ExtArgs> = {}>(args?: Subset<T, CreditLog$targetUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditLog model
   */
  interface CreditLogFieldRefs {
    readonly id: FieldRef<"CreditLog", 'String'>
    readonly actorUserId: FieldRef<"CreditLog", 'String'>
    readonly delta: FieldRef<"CreditLog", 'Int'>
    readonly reason: FieldRef<"CreditLog", 'String'>
    readonly targetUserId: FieldRef<"CreditLog", 'String'>
    readonly createdAt: FieldRef<"CreditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditLog findUnique
   */
  export type CreditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * Filter, which CreditLog to fetch.
     */
    where: CreditLogWhereUniqueInput
  }

  /**
   * CreditLog findUniqueOrThrow
   */
  export type CreditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * Filter, which CreditLog to fetch.
     */
    where: CreditLogWhereUniqueInput
  }

  /**
   * CreditLog findFirst
   */
  export type CreditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * Filter, which CreditLog to fetch.
     */
    where?: CreditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditLogs to fetch.
     */
    orderBy?: CreditLogOrderByWithRelationInput | CreditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditLogs.
     */
    cursor?: CreditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditLogs.
     */
    distinct?: CreditLogScalarFieldEnum | CreditLogScalarFieldEnum[]
  }

  /**
   * CreditLog findFirstOrThrow
   */
  export type CreditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * Filter, which CreditLog to fetch.
     */
    where?: CreditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditLogs to fetch.
     */
    orderBy?: CreditLogOrderByWithRelationInput | CreditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditLogs.
     */
    cursor?: CreditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditLogs.
     */
    distinct?: CreditLogScalarFieldEnum | CreditLogScalarFieldEnum[]
  }

  /**
   * CreditLog findMany
   */
  export type CreditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * Filter, which CreditLogs to fetch.
     */
    where?: CreditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditLogs to fetch.
     */
    orderBy?: CreditLogOrderByWithRelationInput | CreditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditLogs.
     */
    cursor?: CreditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditLogs.
     */
    skip?: number
    distinct?: CreditLogScalarFieldEnum | CreditLogScalarFieldEnum[]
  }

  /**
   * CreditLog create
   */
  export type CreditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditLog.
     */
    data: XOR<CreditLogCreateInput, CreditLogUncheckedCreateInput>
  }

  /**
   * CreditLog createMany
   */
  export type CreditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditLogs.
     */
    data: CreditLogCreateManyInput | CreditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditLog createManyAndReturn
   */
  export type CreditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * The data used to create many CreditLogs.
     */
    data: CreditLogCreateManyInput | CreditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditLog update
   */
  export type CreditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditLog.
     */
    data: XOR<CreditLogUpdateInput, CreditLogUncheckedUpdateInput>
    /**
     * Choose, which CreditLog to update.
     */
    where: CreditLogWhereUniqueInput
  }

  /**
   * CreditLog updateMany
   */
  export type CreditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditLogs.
     */
    data: XOR<CreditLogUpdateManyMutationInput, CreditLogUncheckedUpdateManyInput>
    /**
     * Filter which CreditLogs to update
     */
    where?: CreditLogWhereInput
    /**
     * Limit how many CreditLogs to update.
     */
    limit?: number
  }

  /**
   * CreditLog updateManyAndReturn
   */
  export type CreditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * The data used to update CreditLogs.
     */
    data: XOR<CreditLogUpdateManyMutationInput, CreditLogUncheckedUpdateManyInput>
    /**
     * Filter which CreditLogs to update
     */
    where?: CreditLogWhereInput
    /**
     * Limit how many CreditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditLog upsert
   */
  export type CreditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditLog to update in case it exists.
     */
    where: CreditLogWhereUniqueInput
    /**
     * In case the CreditLog found by the `where` argument doesn't exist, create a new CreditLog with this data.
     */
    create: XOR<CreditLogCreateInput, CreditLogUncheckedCreateInput>
    /**
     * In case the CreditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditLogUpdateInput, CreditLogUncheckedUpdateInput>
  }

  /**
   * CreditLog delete
   */
  export type CreditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
    /**
     * Filter which CreditLog to delete.
     */
    where: CreditLogWhereUniqueInput
  }

  /**
   * CreditLog deleteMany
   */
  export type CreditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditLogs to delete
     */
    where?: CreditLogWhereInput
    /**
     * Limit how many CreditLogs to delete.
     */
    limit?: number
  }

  /**
   * CreditLog.targetUser
   */
  export type CreditLog$targetUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * CreditLog without action
   */
  export type CreditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLog
     */
    select?: CreditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLog
     */
    omit?: CreditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLogInclude<ExtArgs> | null
  }


  /**
   * Model EmbyServer
   */

  export type AggregateEmbyServer = {
    _count: EmbyServerCountAggregateOutputType | null
    _avg: EmbyServerAvgAggregateOutputType | null
    _sum: EmbyServerSumAggregateOutputType | null
    _min: EmbyServerMinAggregateOutputType | null
    _max: EmbyServerMaxAggregateOutputType | null
  }

  export type EmbyServerAvgAggregateOutputType = {
    maxUsers: number | null
  }

  export type EmbyServerSumAggregateOutputType = {
    maxUsers: number | null
  }

  export type EmbyServerMinAggregateOutputType = {
    id: string | null
    name: string | null
    baseUrl: string | null
    apiKey: string | null
    ownerUserId: string | null
    maxUsers: number | null
    referenceUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmbyServerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    baseUrl: string | null
    apiKey: string | null
    ownerUserId: string | null
    maxUsers: number | null
    referenceUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmbyServerCountAggregateOutputType = {
    id: number
    name: number
    baseUrl: number
    apiKey: number
    ownerUserId: number
    maxUsers: number
    referenceUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmbyServerAvgAggregateInputType = {
    maxUsers?: true
  }

  export type EmbyServerSumAggregateInputType = {
    maxUsers?: true
  }

  export type EmbyServerMinAggregateInputType = {
    id?: true
    name?: true
    baseUrl?: true
    apiKey?: true
    ownerUserId?: true
    maxUsers?: true
    referenceUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmbyServerMaxAggregateInputType = {
    id?: true
    name?: true
    baseUrl?: true
    apiKey?: true
    ownerUserId?: true
    maxUsers?: true
    referenceUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmbyServerCountAggregateInputType = {
    id?: true
    name?: true
    baseUrl?: true
    apiKey?: true
    ownerUserId?: true
    maxUsers?: true
    referenceUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmbyServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbyServer to aggregate.
     */
    where?: EmbyServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyServers to fetch.
     */
    orderBy?: EmbyServerOrderByWithRelationInput | EmbyServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmbyServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmbyServers
    **/
    _count?: true | EmbyServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmbyServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmbyServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbyServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbyServerMaxAggregateInputType
  }

  export type GetEmbyServerAggregateType<T extends EmbyServerAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbyServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbyServer[P]>
      : GetScalarType<T[P], AggregateEmbyServer[P]>
  }




  export type EmbyServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbyServerWhereInput
    orderBy?: EmbyServerOrderByWithAggregationInput | EmbyServerOrderByWithAggregationInput[]
    by: EmbyServerScalarFieldEnum[] | EmbyServerScalarFieldEnum
    having?: EmbyServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbyServerCountAggregateInputType | true
    _avg?: EmbyServerAvgAggregateInputType
    _sum?: EmbyServerSumAggregateInputType
    _min?: EmbyServerMinAggregateInputType
    _max?: EmbyServerMaxAggregateInputType
  }

  export type EmbyServerGroupByOutputType = {
    id: string
    name: string
    baseUrl: string
    apiKey: string
    ownerUserId: string | null
    maxUsers: number
    referenceUserId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmbyServerCountAggregateOutputType | null
    _avg: EmbyServerAvgAggregateOutputType | null
    _sum: EmbyServerSumAggregateOutputType | null
    _min: EmbyServerMinAggregateOutputType | null
    _max: EmbyServerMaxAggregateOutputType | null
  }

  type GetEmbyServerGroupByPayload<T extends EmbyServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbyServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbyServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbyServerGroupByOutputType[P]>
            : GetScalarType<T[P], EmbyServerGroupByOutputType[P]>
        }
      >
    >


  export type EmbyServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    ownerUserId?: boolean
    maxUsers?: boolean
    referenceUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | EmbyServer$ownerArgs<ExtArgs>
    packages?: boolean | EmbyServer$packagesArgs<ExtArgs>
    userLinks?: boolean | EmbyServer$userLinksArgs<ExtArgs>
    embyAccounts?: boolean | EmbyServer$embyAccountsArgs<ExtArgs>
    userPolicies?: boolean | EmbyServer$userPoliciesArgs<ExtArgs>
    _count?: boolean | EmbyServerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embyServer"]>

  export type EmbyServerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    ownerUserId?: boolean
    maxUsers?: boolean
    referenceUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | EmbyServer$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["embyServer"]>

  export type EmbyServerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    ownerUserId?: boolean
    maxUsers?: boolean
    referenceUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | EmbyServer$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["embyServer"]>

  export type EmbyServerSelectScalar = {
    id?: boolean
    name?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    ownerUserId?: boolean
    maxUsers?: boolean
    referenceUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmbyServerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "baseUrl" | "apiKey" | "ownerUserId" | "maxUsers" | "referenceUserId" | "createdAt" | "updatedAt", ExtArgs["result"]["embyServer"]>
  export type EmbyServerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | EmbyServer$ownerArgs<ExtArgs>
    packages?: boolean | EmbyServer$packagesArgs<ExtArgs>
    userLinks?: boolean | EmbyServer$userLinksArgs<ExtArgs>
    embyAccounts?: boolean | EmbyServer$embyAccountsArgs<ExtArgs>
    userPolicies?: boolean | EmbyServer$userPoliciesArgs<ExtArgs>
    _count?: boolean | EmbyServerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmbyServerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | EmbyServer$ownerArgs<ExtArgs>
  }
  export type EmbyServerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | EmbyServer$ownerArgs<ExtArgs>
  }

  export type $EmbyServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmbyServer"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      packages: Prisma.$PackagePayload<ExtArgs>[]
      userLinks: Prisma.$UserServerLinkPayload<ExtArgs>[]
      embyAccounts: Prisma.$EmbyAccountPayload<ExtArgs>[]
      userPolicies: Prisma.$UserPolicyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      baseUrl: string
      apiKey: string
      ownerUserId: string | null
      maxUsers: number
      referenceUserId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["embyServer"]>
    composites: {}
  }

  type EmbyServerGetPayload<S extends boolean | null | undefined | EmbyServerDefaultArgs> = $Result.GetResult<Prisma.$EmbyServerPayload, S>

  type EmbyServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmbyServerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmbyServerCountAggregateInputType | true
    }

  export interface EmbyServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmbyServer'], meta: { name: 'EmbyServer' } }
    /**
     * Find zero or one EmbyServer that matches the filter.
     * @param {EmbyServerFindUniqueArgs} args - Arguments to find a EmbyServer
     * @example
     * // Get one EmbyServer
     * const embyServer = await prisma.embyServer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmbyServerFindUniqueArgs>(args: SelectSubset<T, EmbyServerFindUniqueArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmbyServer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmbyServerFindUniqueOrThrowArgs} args - Arguments to find a EmbyServer
     * @example
     * // Get one EmbyServer
     * const embyServer = await prisma.embyServer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmbyServerFindUniqueOrThrowArgs>(args: SelectSubset<T, EmbyServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmbyServer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyServerFindFirstArgs} args - Arguments to find a EmbyServer
     * @example
     * // Get one EmbyServer
     * const embyServer = await prisma.embyServer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmbyServerFindFirstArgs>(args?: SelectSubset<T, EmbyServerFindFirstArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmbyServer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyServerFindFirstOrThrowArgs} args - Arguments to find a EmbyServer
     * @example
     * // Get one EmbyServer
     * const embyServer = await prisma.embyServer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmbyServerFindFirstOrThrowArgs>(args?: SelectSubset<T, EmbyServerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmbyServers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyServerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmbyServers
     * const embyServers = await prisma.embyServer.findMany()
     * 
     * // Get first 10 EmbyServers
     * const embyServers = await prisma.embyServer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embyServerWithIdOnly = await prisma.embyServer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmbyServerFindManyArgs>(args?: SelectSubset<T, EmbyServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmbyServer.
     * @param {EmbyServerCreateArgs} args - Arguments to create a EmbyServer.
     * @example
     * // Create one EmbyServer
     * const EmbyServer = await prisma.embyServer.create({
     *   data: {
     *     // ... data to create a EmbyServer
     *   }
     * })
     * 
     */
    create<T extends EmbyServerCreateArgs>(args: SelectSubset<T, EmbyServerCreateArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmbyServers.
     * @param {EmbyServerCreateManyArgs} args - Arguments to create many EmbyServers.
     * @example
     * // Create many EmbyServers
     * const embyServer = await prisma.embyServer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmbyServerCreateManyArgs>(args?: SelectSubset<T, EmbyServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmbyServers and returns the data saved in the database.
     * @param {EmbyServerCreateManyAndReturnArgs} args - Arguments to create many EmbyServers.
     * @example
     * // Create many EmbyServers
     * const embyServer = await prisma.embyServer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmbyServers and only return the `id`
     * const embyServerWithIdOnly = await prisma.embyServer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmbyServerCreateManyAndReturnArgs>(args?: SelectSubset<T, EmbyServerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmbyServer.
     * @param {EmbyServerDeleteArgs} args - Arguments to delete one EmbyServer.
     * @example
     * // Delete one EmbyServer
     * const EmbyServer = await prisma.embyServer.delete({
     *   where: {
     *     // ... filter to delete one EmbyServer
     *   }
     * })
     * 
     */
    delete<T extends EmbyServerDeleteArgs>(args: SelectSubset<T, EmbyServerDeleteArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmbyServer.
     * @param {EmbyServerUpdateArgs} args - Arguments to update one EmbyServer.
     * @example
     * // Update one EmbyServer
     * const embyServer = await prisma.embyServer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmbyServerUpdateArgs>(args: SelectSubset<T, EmbyServerUpdateArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmbyServers.
     * @param {EmbyServerDeleteManyArgs} args - Arguments to filter EmbyServers to delete.
     * @example
     * // Delete a few EmbyServers
     * const { count } = await prisma.embyServer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmbyServerDeleteManyArgs>(args?: SelectSubset<T, EmbyServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbyServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmbyServers
     * const embyServer = await prisma.embyServer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmbyServerUpdateManyArgs>(args: SelectSubset<T, EmbyServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbyServers and returns the data updated in the database.
     * @param {EmbyServerUpdateManyAndReturnArgs} args - Arguments to update many EmbyServers.
     * @example
     * // Update many EmbyServers
     * const embyServer = await prisma.embyServer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmbyServers and only return the `id`
     * const embyServerWithIdOnly = await prisma.embyServer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmbyServerUpdateManyAndReturnArgs>(args: SelectSubset<T, EmbyServerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmbyServer.
     * @param {EmbyServerUpsertArgs} args - Arguments to update or create a EmbyServer.
     * @example
     * // Update or create a EmbyServer
     * const embyServer = await prisma.embyServer.upsert({
     *   create: {
     *     // ... data to create a EmbyServer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmbyServer we want to update
     *   }
     * })
     */
    upsert<T extends EmbyServerUpsertArgs>(args: SelectSubset<T, EmbyServerUpsertArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmbyServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyServerCountArgs} args - Arguments to filter EmbyServers to count.
     * @example
     * // Count the number of EmbyServers
     * const count = await prisma.embyServer.count({
     *   where: {
     *     // ... the filter for the EmbyServers we want to count
     *   }
     * })
    **/
    count<T extends EmbyServerCountArgs>(
      args?: Subset<T, EmbyServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbyServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmbyServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmbyServerAggregateArgs>(args: Subset<T, EmbyServerAggregateArgs>): Prisma.PrismaPromise<GetEmbyServerAggregateType<T>>

    /**
     * Group by EmbyServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmbyServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmbyServerGroupByArgs['orderBy'] }
        : { orderBy?: EmbyServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmbyServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbyServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmbyServer model
   */
  readonly fields: EmbyServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmbyServer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmbyServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends EmbyServer$ownerArgs<ExtArgs> = {}>(args?: Subset<T, EmbyServer$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    packages<T extends EmbyServer$packagesArgs<ExtArgs> = {}>(args?: Subset<T, EmbyServer$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLinks<T extends EmbyServer$userLinksArgs<ExtArgs> = {}>(args?: Subset<T, EmbyServer$userLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    embyAccounts<T extends EmbyServer$embyAccountsArgs<ExtArgs> = {}>(args?: Subset<T, EmbyServer$embyAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPolicies<T extends EmbyServer$userPoliciesArgs<ExtArgs> = {}>(args?: Subset<T, EmbyServer$userPoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmbyServer model
   */
  interface EmbyServerFieldRefs {
    readonly id: FieldRef<"EmbyServer", 'String'>
    readonly name: FieldRef<"EmbyServer", 'String'>
    readonly baseUrl: FieldRef<"EmbyServer", 'String'>
    readonly apiKey: FieldRef<"EmbyServer", 'String'>
    readonly ownerUserId: FieldRef<"EmbyServer", 'String'>
    readonly maxUsers: FieldRef<"EmbyServer", 'Int'>
    readonly referenceUserId: FieldRef<"EmbyServer", 'String'>
    readonly createdAt: FieldRef<"EmbyServer", 'DateTime'>
    readonly updatedAt: FieldRef<"EmbyServer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmbyServer findUnique
   */
  export type EmbyServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * Filter, which EmbyServer to fetch.
     */
    where: EmbyServerWhereUniqueInput
  }

  /**
   * EmbyServer findUniqueOrThrow
   */
  export type EmbyServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * Filter, which EmbyServer to fetch.
     */
    where: EmbyServerWhereUniqueInput
  }

  /**
   * EmbyServer findFirst
   */
  export type EmbyServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * Filter, which EmbyServer to fetch.
     */
    where?: EmbyServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyServers to fetch.
     */
    orderBy?: EmbyServerOrderByWithRelationInput | EmbyServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbyServers.
     */
    cursor?: EmbyServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbyServers.
     */
    distinct?: EmbyServerScalarFieldEnum | EmbyServerScalarFieldEnum[]
  }

  /**
   * EmbyServer findFirstOrThrow
   */
  export type EmbyServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * Filter, which EmbyServer to fetch.
     */
    where?: EmbyServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyServers to fetch.
     */
    orderBy?: EmbyServerOrderByWithRelationInput | EmbyServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbyServers.
     */
    cursor?: EmbyServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbyServers.
     */
    distinct?: EmbyServerScalarFieldEnum | EmbyServerScalarFieldEnum[]
  }

  /**
   * EmbyServer findMany
   */
  export type EmbyServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * Filter, which EmbyServers to fetch.
     */
    where?: EmbyServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyServers to fetch.
     */
    orderBy?: EmbyServerOrderByWithRelationInput | EmbyServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmbyServers.
     */
    cursor?: EmbyServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyServers.
     */
    skip?: number
    distinct?: EmbyServerScalarFieldEnum | EmbyServerScalarFieldEnum[]
  }

  /**
   * EmbyServer create
   */
  export type EmbyServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * The data needed to create a EmbyServer.
     */
    data: XOR<EmbyServerCreateInput, EmbyServerUncheckedCreateInput>
  }

  /**
   * EmbyServer createMany
   */
  export type EmbyServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmbyServers.
     */
    data: EmbyServerCreateManyInput | EmbyServerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmbyServer createManyAndReturn
   */
  export type EmbyServerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * The data used to create many EmbyServers.
     */
    data: EmbyServerCreateManyInput | EmbyServerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmbyServer update
   */
  export type EmbyServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * The data needed to update a EmbyServer.
     */
    data: XOR<EmbyServerUpdateInput, EmbyServerUncheckedUpdateInput>
    /**
     * Choose, which EmbyServer to update.
     */
    where: EmbyServerWhereUniqueInput
  }

  /**
   * EmbyServer updateMany
   */
  export type EmbyServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmbyServers.
     */
    data: XOR<EmbyServerUpdateManyMutationInput, EmbyServerUncheckedUpdateManyInput>
    /**
     * Filter which EmbyServers to update
     */
    where?: EmbyServerWhereInput
    /**
     * Limit how many EmbyServers to update.
     */
    limit?: number
  }

  /**
   * EmbyServer updateManyAndReturn
   */
  export type EmbyServerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * The data used to update EmbyServers.
     */
    data: XOR<EmbyServerUpdateManyMutationInput, EmbyServerUncheckedUpdateManyInput>
    /**
     * Filter which EmbyServers to update
     */
    where?: EmbyServerWhereInput
    /**
     * Limit how many EmbyServers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmbyServer upsert
   */
  export type EmbyServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * The filter to search for the EmbyServer to update in case it exists.
     */
    where: EmbyServerWhereUniqueInput
    /**
     * In case the EmbyServer found by the `where` argument doesn't exist, create a new EmbyServer with this data.
     */
    create: XOR<EmbyServerCreateInput, EmbyServerUncheckedCreateInput>
    /**
     * In case the EmbyServer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmbyServerUpdateInput, EmbyServerUncheckedUpdateInput>
  }

  /**
   * EmbyServer delete
   */
  export type EmbyServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    /**
     * Filter which EmbyServer to delete.
     */
    where: EmbyServerWhereUniqueInput
  }

  /**
   * EmbyServer deleteMany
   */
  export type EmbyServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbyServers to delete
     */
    where?: EmbyServerWhereInput
    /**
     * Limit how many EmbyServers to delete.
     */
    limit?: number
  }

  /**
   * EmbyServer.owner
   */
  export type EmbyServer$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * EmbyServer.packages
   */
  export type EmbyServer$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * EmbyServer.userLinks
   */
  export type EmbyServer$userLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    where?: UserServerLinkWhereInput
    orderBy?: UserServerLinkOrderByWithRelationInput | UserServerLinkOrderByWithRelationInput[]
    cursor?: UserServerLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserServerLinkScalarFieldEnum | UserServerLinkScalarFieldEnum[]
  }

  /**
   * EmbyServer.embyAccounts
   */
  export type EmbyServer$embyAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    where?: EmbyAccountWhereInput
    orderBy?: EmbyAccountOrderByWithRelationInput | EmbyAccountOrderByWithRelationInput[]
    cursor?: EmbyAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbyAccountScalarFieldEnum | EmbyAccountScalarFieldEnum[]
  }

  /**
   * EmbyServer.userPolicies
   */
  export type EmbyServer$userPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    where?: UserPolicyWhereInput
    orderBy?: UserPolicyOrderByWithRelationInput | UserPolicyOrderByWithRelationInput[]
    cursor?: UserPolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPolicyScalarFieldEnum | UserPolicyScalarFieldEnum[]
  }

  /**
   * EmbyServer without action
   */
  export type EmbyServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    serverId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    serverId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    serverId: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackageMinAggregateInputType = {
    id?: true
    serverId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    serverId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    serverId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    serverId: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PackageCountAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    libraries?: boolean | Package$librariesArgs<ExtArgs>
    userLinks?: boolean | Package$userLinksArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    serverId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serverId" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    libraries?: boolean | Package$librariesArgs<ExtArgs>
    userLinks?: boolean | Package$userLinksArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
  }
  export type PackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
  }

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      server: Prisma.$EmbyServerPayload<ExtArgs>
      libraries: Prisma.$PackageLibraryPayload<ExtArgs>[]
      userLinks: Prisma.$UserServerLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serverId: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends EmbyServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmbyServerDefaultArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    libraries<T extends Package$librariesArgs<ExtArgs> = {}>(args?: Subset<T, Package$librariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLinks<T extends Package$userLinksArgs<ExtArgs> = {}>(args?: Subset<T, Package$userLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly serverId: FieldRef<"Package", 'String'>
    readonly name: FieldRef<"Package", 'String'>
    readonly description: FieldRef<"Package", 'String'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
    readonly updatedAt: FieldRef<"Package", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.libraries
   */
  export type Package$librariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    where?: PackageLibraryWhereInput
    orderBy?: PackageLibraryOrderByWithRelationInput | PackageLibraryOrderByWithRelationInput[]
    cursor?: PackageLibraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageLibraryScalarFieldEnum | PackageLibraryScalarFieldEnum[]
  }

  /**
   * Package.userLinks
   */
  export type Package$userLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    where?: UserServerLinkWhereInput
    orderBy?: UserServerLinkOrderByWithRelationInput | UserServerLinkOrderByWithRelationInput[]
    cursor?: UserServerLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserServerLinkScalarFieldEnum | UserServerLinkScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model PackageLibrary
   */

  export type AggregatePackageLibrary = {
    _count: PackageLibraryCountAggregateOutputType | null
    _min: PackageLibraryMinAggregateOutputType | null
    _max: PackageLibraryMaxAggregateOutputType | null
  }

  export type PackageLibraryMinAggregateOutputType = {
    id: string | null
    packageId: string | null
    libraryId: string | null
    libraryName: string | null
  }

  export type PackageLibraryMaxAggregateOutputType = {
    id: string | null
    packageId: string | null
    libraryId: string | null
    libraryName: string | null
  }

  export type PackageLibraryCountAggregateOutputType = {
    id: number
    packageId: number
    libraryId: number
    libraryName: number
    _all: number
  }


  export type PackageLibraryMinAggregateInputType = {
    id?: true
    packageId?: true
    libraryId?: true
    libraryName?: true
  }

  export type PackageLibraryMaxAggregateInputType = {
    id?: true
    packageId?: true
    libraryId?: true
    libraryName?: true
  }

  export type PackageLibraryCountAggregateInputType = {
    id?: true
    packageId?: true
    libraryId?: true
    libraryName?: true
    _all?: true
  }

  export type PackageLibraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageLibrary to aggregate.
     */
    where?: PackageLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageLibraries to fetch.
     */
    orderBy?: PackageLibraryOrderByWithRelationInput | PackageLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageLibraries
    **/
    _count?: true | PackageLibraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageLibraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageLibraryMaxAggregateInputType
  }

  export type GetPackageLibraryAggregateType<T extends PackageLibraryAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageLibrary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageLibrary[P]>
      : GetScalarType<T[P], AggregatePackageLibrary[P]>
  }




  export type PackageLibraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageLibraryWhereInput
    orderBy?: PackageLibraryOrderByWithAggregationInput | PackageLibraryOrderByWithAggregationInput[]
    by: PackageLibraryScalarFieldEnum[] | PackageLibraryScalarFieldEnum
    having?: PackageLibraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageLibraryCountAggregateInputType | true
    _min?: PackageLibraryMinAggregateInputType
    _max?: PackageLibraryMaxAggregateInputType
  }

  export type PackageLibraryGroupByOutputType = {
    id: string
    packageId: string
    libraryId: string | null
    libraryName: string | null
    _count: PackageLibraryCountAggregateOutputType | null
    _min: PackageLibraryMinAggregateOutputType | null
    _max: PackageLibraryMaxAggregateOutputType | null
  }

  type GetPackageLibraryGroupByPayload<T extends PackageLibraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageLibraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageLibraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageLibraryGroupByOutputType[P]>
            : GetScalarType<T[P], PackageLibraryGroupByOutputType[P]>
        }
      >
    >


  export type PackageLibrarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageId?: boolean
    libraryId?: boolean
    libraryName?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageLibrary"]>

  export type PackageLibrarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageId?: boolean
    libraryId?: boolean
    libraryName?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageLibrary"]>

  export type PackageLibrarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageId?: boolean
    libraryId?: boolean
    libraryName?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageLibrary"]>

  export type PackageLibrarySelectScalar = {
    id?: boolean
    packageId?: boolean
    libraryId?: boolean
    libraryName?: boolean
  }

  export type PackageLibraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "packageId" | "libraryId" | "libraryName", ExtArgs["result"]["packageLibrary"]>
  export type PackageLibraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type PackageLibraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type PackageLibraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $PackageLibraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageLibrary"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      packageId: string
      libraryId: string | null
      libraryName: string | null
    }, ExtArgs["result"]["packageLibrary"]>
    composites: {}
  }

  type PackageLibraryGetPayload<S extends boolean | null | undefined | PackageLibraryDefaultArgs> = $Result.GetResult<Prisma.$PackageLibraryPayload, S>

  type PackageLibraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageLibraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageLibraryCountAggregateInputType | true
    }

  export interface PackageLibraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageLibrary'], meta: { name: 'PackageLibrary' } }
    /**
     * Find zero or one PackageLibrary that matches the filter.
     * @param {PackageLibraryFindUniqueArgs} args - Arguments to find a PackageLibrary
     * @example
     * // Get one PackageLibrary
     * const packageLibrary = await prisma.packageLibrary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageLibraryFindUniqueArgs>(args: SelectSubset<T, PackageLibraryFindUniqueArgs<ExtArgs>>): Prisma__PackageLibraryClient<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackageLibrary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageLibraryFindUniqueOrThrowArgs} args - Arguments to find a PackageLibrary
     * @example
     * // Get one PackageLibrary
     * const packageLibrary = await prisma.packageLibrary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageLibraryFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageLibraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageLibraryClient<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageLibrary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageLibraryFindFirstArgs} args - Arguments to find a PackageLibrary
     * @example
     * // Get one PackageLibrary
     * const packageLibrary = await prisma.packageLibrary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageLibraryFindFirstArgs>(args?: SelectSubset<T, PackageLibraryFindFirstArgs<ExtArgs>>): Prisma__PackageLibraryClient<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageLibrary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageLibraryFindFirstOrThrowArgs} args - Arguments to find a PackageLibrary
     * @example
     * // Get one PackageLibrary
     * const packageLibrary = await prisma.packageLibrary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageLibraryFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageLibraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageLibraryClient<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageLibraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageLibraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageLibraries
     * const packageLibraries = await prisma.packageLibrary.findMany()
     * 
     * // Get first 10 PackageLibraries
     * const packageLibraries = await prisma.packageLibrary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageLibraryWithIdOnly = await prisma.packageLibrary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageLibraryFindManyArgs>(args?: SelectSubset<T, PackageLibraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackageLibrary.
     * @param {PackageLibraryCreateArgs} args - Arguments to create a PackageLibrary.
     * @example
     * // Create one PackageLibrary
     * const PackageLibrary = await prisma.packageLibrary.create({
     *   data: {
     *     // ... data to create a PackageLibrary
     *   }
     * })
     * 
     */
    create<T extends PackageLibraryCreateArgs>(args: SelectSubset<T, PackageLibraryCreateArgs<ExtArgs>>): Prisma__PackageLibraryClient<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackageLibraries.
     * @param {PackageLibraryCreateManyArgs} args - Arguments to create many PackageLibraries.
     * @example
     * // Create many PackageLibraries
     * const packageLibrary = await prisma.packageLibrary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageLibraryCreateManyArgs>(args?: SelectSubset<T, PackageLibraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PackageLibraries and returns the data saved in the database.
     * @param {PackageLibraryCreateManyAndReturnArgs} args - Arguments to create many PackageLibraries.
     * @example
     * // Create many PackageLibraries
     * const packageLibrary = await prisma.packageLibrary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PackageLibraries and only return the `id`
     * const packageLibraryWithIdOnly = await prisma.packageLibrary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageLibraryCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageLibraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PackageLibrary.
     * @param {PackageLibraryDeleteArgs} args - Arguments to delete one PackageLibrary.
     * @example
     * // Delete one PackageLibrary
     * const PackageLibrary = await prisma.packageLibrary.delete({
     *   where: {
     *     // ... filter to delete one PackageLibrary
     *   }
     * })
     * 
     */
    delete<T extends PackageLibraryDeleteArgs>(args: SelectSubset<T, PackageLibraryDeleteArgs<ExtArgs>>): Prisma__PackageLibraryClient<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackageLibrary.
     * @param {PackageLibraryUpdateArgs} args - Arguments to update one PackageLibrary.
     * @example
     * // Update one PackageLibrary
     * const packageLibrary = await prisma.packageLibrary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageLibraryUpdateArgs>(args: SelectSubset<T, PackageLibraryUpdateArgs<ExtArgs>>): Prisma__PackageLibraryClient<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackageLibraries.
     * @param {PackageLibraryDeleteManyArgs} args - Arguments to filter PackageLibraries to delete.
     * @example
     * // Delete a few PackageLibraries
     * const { count } = await prisma.packageLibrary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageLibraryDeleteManyArgs>(args?: SelectSubset<T, PackageLibraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageLibraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageLibraries
     * const packageLibrary = await prisma.packageLibrary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageLibraryUpdateManyArgs>(args: SelectSubset<T, PackageLibraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageLibraries and returns the data updated in the database.
     * @param {PackageLibraryUpdateManyAndReturnArgs} args - Arguments to update many PackageLibraries.
     * @example
     * // Update many PackageLibraries
     * const packageLibrary = await prisma.packageLibrary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PackageLibraries and only return the `id`
     * const packageLibraryWithIdOnly = await prisma.packageLibrary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackageLibraryUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageLibraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PackageLibrary.
     * @param {PackageLibraryUpsertArgs} args - Arguments to update or create a PackageLibrary.
     * @example
     * // Update or create a PackageLibrary
     * const packageLibrary = await prisma.packageLibrary.upsert({
     *   create: {
     *     // ... data to create a PackageLibrary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageLibrary we want to update
     *   }
     * })
     */
    upsert<T extends PackageLibraryUpsertArgs>(args: SelectSubset<T, PackageLibraryUpsertArgs<ExtArgs>>): Prisma__PackageLibraryClient<$Result.GetResult<Prisma.$PackageLibraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackageLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageLibraryCountArgs} args - Arguments to filter PackageLibraries to count.
     * @example
     * // Count the number of PackageLibraries
     * const count = await prisma.packageLibrary.count({
     *   where: {
     *     // ... the filter for the PackageLibraries we want to count
     *   }
     * })
    **/
    count<T extends PackageLibraryCountArgs>(
      args?: Subset<T, PackageLibraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageLibraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageLibrary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageLibraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageLibraryAggregateArgs>(args: Subset<T, PackageLibraryAggregateArgs>): Prisma.PrismaPromise<GetPackageLibraryAggregateType<T>>

    /**
     * Group by PackageLibrary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageLibraryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageLibraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageLibraryGroupByArgs['orderBy'] }
        : { orderBy?: PackageLibraryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageLibraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageLibraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageLibrary model
   */
  readonly fields: PackageLibraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageLibrary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageLibraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PackageLibrary model
   */
  interface PackageLibraryFieldRefs {
    readonly id: FieldRef<"PackageLibrary", 'String'>
    readonly packageId: FieldRef<"PackageLibrary", 'String'>
    readonly libraryId: FieldRef<"PackageLibrary", 'String'>
    readonly libraryName: FieldRef<"PackageLibrary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PackageLibrary findUnique
   */
  export type PackageLibraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * Filter, which PackageLibrary to fetch.
     */
    where: PackageLibraryWhereUniqueInput
  }

  /**
   * PackageLibrary findUniqueOrThrow
   */
  export type PackageLibraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * Filter, which PackageLibrary to fetch.
     */
    where: PackageLibraryWhereUniqueInput
  }

  /**
   * PackageLibrary findFirst
   */
  export type PackageLibraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * Filter, which PackageLibrary to fetch.
     */
    where?: PackageLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageLibraries to fetch.
     */
    orderBy?: PackageLibraryOrderByWithRelationInput | PackageLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageLibraries.
     */
    cursor?: PackageLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageLibraries.
     */
    distinct?: PackageLibraryScalarFieldEnum | PackageLibraryScalarFieldEnum[]
  }

  /**
   * PackageLibrary findFirstOrThrow
   */
  export type PackageLibraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * Filter, which PackageLibrary to fetch.
     */
    where?: PackageLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageLibraries to fetch.
     */
    orderBy?: PackageLibraryOrderByWithRelationInput | PackageLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageLibraries.
     */
    cursor?: PackageLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageLibraries.
     */
    distinct?: PackageLibraryScalarFieldEnum | PackageLibraryScalarFieldEnum[]
  }

  /**
   * PackageLibrary findMany
   */
  export type PackageLibraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * Filter, which PackageLibraries to fetch.
     */
    where?: PackageLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageLibraries to fetch.
     */
    orderBy?: PackageLibraryOrderByWithRelationInput | PackageLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageLibraries.
     */
    cursor?: PackageLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageLibraries.
     */
    skip?: number
    distinct?: PackageLibraryScalarFieldEnum | PackageLibraryScalarFieldEnum[]
  }

  /**
   * PackageLibrary create
   */
  export type PackageLibraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageLibrary.
     */
    data: XOR<PackageLibraryCreateInput, PackageLibraryUncheckedCreateInput>
  }

  /**
   * PackageLibrary createMany
   */
  export type PackageLibraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageLibraries.
     */
    data: PackageLibraryCreateManyInput | PackageLibraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackageLibrary createManyAndReturn
   */
  export type PackageLibraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * The data used to create many PackageLibraries.
     */
    data: PackageLibraryCreateManyInput | PackageLibraryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackageLibrary update
   */
  export type PackageLibraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageLibrary.
     */
    data: XOR<PackageLibraryUpdateInput, PackageLibraryUncheckedUpdateInput>
    /**
     * Choose, which PackageLibrary to update.
     */
    where: PackageLibraryWhereUniqueInput
  }

  /**
   * PackageLibrary updateMany
   */
  export type PackageLibraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageLibraries.
     */
    data: XOR<PackageLibraryUpdateManyMutationInput, PackageLibraryUncheckedUpdateManyInput>
    /**
     * Filter which PackageLibraries to update
     */
    where?: PackageLibraryWhereInput
    /**
     * Limit how many PackageLibraries to update.
     */
    limit?: number
  }

  /**
   * PackageLibrary updateManyAndReturn
   */
  export type PackageLibraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * The data used to update PackageLibraries.
     */
    data: XOR<PackageLibraryUpdateManyMutationInput, PackageLibraryUncheckedUpdateManyInput>
    /**
     * Filter which PackageLibraries to update
     */
    where?: PackageLibraryWhereInput
    /**
     * Limit how many PackageLibraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackageLibrary upsert
   */
  export type PackageLibraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageLibrary to update in case it exists.
     */
    where: PackageLibraryWhereUniqueInput
    /**
     * In case the PackageLibrary found by the `where` argument doesn't exist, create a new PackageLibrary with this data.
     */
    create: XOR<PackageLibraryCreateInput, PackageLibraryUncheckedCreateInput>
    /**
     * In case the PackageLibrary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageLibraryUpdateInput, PackageLibraryUncheckedUpdateInput>
  }

  /**
   * PackageLibrary delete
   */
  export type PackageLibraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
    /**
     * Filter which PackageLibrary to delete.
     */
    where: PackageLibraryWhereUniqueInput
  }

  /**
   * PackageLibrary deleteMany
   */
  export type PackageLibraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageLibraries to delete
     */
    where?: PackageLibraryWhereInput
    /**
     * Limit how many PackageLibraries to delete.
     */
    limit?: number
  }

  /**
   * PackageLibrary without action
   */
  export type PackageLibraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageLibrary
     */
    select?: PackageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageLibrary
     */
    omit?: PackageLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageLibraryInclude<ExtArgs> | null
  }


  /**
   * Model UserServerLink
   */

  export type AggregateUserServerLink = {
    _count: UserServerLinkCountAggregateOutputType | null
    _avg: UserServerLinkAvgAggregateOutputType | null
    _sum: UserServerLinkSumAggregateOutputType | null
    _min: UserServerLinkMinAggregateOutputType | null
    _max: UserServerLinkMaxAggregateOutputType | null
  }

  export type UserServerLinkAvgAggregateOutputType = {
    creditsAllocated: number | null
    creditsUsed: number | null
    creditsRemaining: number | null
    demoHours: number | null
  }

  export type UserServerLinkSumAggregateOutputType = {
    creditsAllocated: number | null
    creditsUsed: number | null
    creditsRemaining: number | null
    demoHours: number | null
  }

  export type UserServerLinkMinAggregateOutputType = {
    id: string | null
    embyUserId: string | null
    serverId: string | null
    packageId: string | null
    status: $Enums.AccountStatus | null
    startAt: Date | null
    expireAt: Date | null
    suspendedAt: Date | null
    suspendedById: string | null
    creditsAllocated: number | null
    creditsUsed: number | null
    creditsRemaining: number | null
    creditType: string | null
    demoHours: number | null
    isDemo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserServerLinkMaxAggregateOutputType = {
    id: string | null
    embyUserId: string | null
    serverId: string | null
    packageId: string | null
    status: $Enums.AccountStatus | null
    startAt: Date | null
    expireAt: Date | null
    suspendedAt: Date | null
    suspendedById: string | null
    creditsAllocated: number | null
    creditsUsed: number | null
    creditsRemaining: number | null
    creditType: string | null
    demoHours: number | null
    isDemo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserServerLinkCountAggregateOutputType = {
    id: number
    embyUserId: number
    serverId: number
    packageId: number
    status: number
    startAt: number
    expireAt: number
    suspendedAt: number
    suspendedById: number
    creditsAllocated: number
    creditsUsed: number
    creditsRemaining: number
    creditType: number
    demoHours: number
    isDemo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserServerLinkAvgAggregateInputType = {
    creditsAllocated?: true
    creditsUsed?: true
    creditsRemaining?: true
    demoHours?: true
  }

  export type UserServerLinkSumAggregateInputType = {
    creditsAllocated?: true
    creditsUsed?: true
    creditsRemaining?: true
    demoHours?: true
  }

  export type UserServerLinkMinAggregateInputType = {
    id?: true
    embyUserId?: true
    serverId?: true
    packageId?: true
    status?: true
    startAt?: true
    expireAt?: true
    suspendedAt?: true
    suspendedById?: true
    creditsAllocated?: true
    creditsUsed?: true
    creditsRemaining?: true
    creditType?: true
    demoHours?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserServerLinkMaxAggregateInputType = {
    id?: true
    embyUserId?: true
    serverId?: true
    packageId?: true
    status?: true
    startAt?: true
    expireAt?: true
    suspendedAt?: true
    suspendedById?: true
    creditsAllocated?: true
    creditsUsed?: true
    creditsRemaining?: true
    creditType?: true
    demoHours?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserServerLinkCountAggregateInputType = {
    id?: true
    embyUserId?: true
    serverId?: true
    packageId?: true
    status?: true
    startAt?: true
    expireAt?: true
    suspendedAt?: true
    suspendedById?: true
    creditsAllocated?: true
    creditsUsed?: true
    creditsRemaining?: true
    creditType?: true
    demoHours?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserServerLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserServerLink to aggregate.
     */
    where?: UserServerLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserServerLinks to fetch.
     */
    orderBy?: UserServerLinkOrderByWithRelationInput | UserServerLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserServerLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserServerLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserServerLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserServerLinks
    **/
    _count?: true | UserServerLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserServerLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserServerLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserServerLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserServerLinkMaxAggregateInputType
  }

  export type GetUserServerLinkAggregateType<T extends UserServerLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateUserServerLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserServerLink[P]>
      : GetScalarType<T[P], AggregateUserServerLink[P]>
  }




  export type UserServerLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserServerLinkWhereInput
    orderBy?: UserServerLinkOrderByWithAggregationInput | UserServerLinkOrderByWithAggregationInput[]
    by: UserServerLinkScalarFieldEnum[] | UserServerLinkScalarFieldEnum
    having?: UserServerLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserServerLinkCountAggregateInputType | true
    _avg?: UserServerLinkAvgAggregateInputType
    _sum?: UserServerLinkSumAggregateInputType
    _min?: UserServerLinkMinAggregateInputType
    _max?: UserServerLinkMaxAggregateInputType
  }

  export type UserServerLinkGroupByOutputType = {
    id: string
    embyUserId: string
    serverId: string
    packageId: string | null
    status: $Enums.AccountStatus
    startAt: Date
    expireAt: Date | null
    suspendedAt: Date | null
    suspendedById: string | null
    creditsAllocated: number
    creditsUsed: number
    creditsRemaining: number
    creditType: string
    demoHours: number | null
    isDemo: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserServerLinkCountAggregateOutputType | null
    _avg: UserServerLinkAvgAggregateOutputType | null
    _sum: UserServerLinkSumAggregateOutputType | null
    _min: UserServerLinkMinAggregateOutputType | null
    _max: UserServerLinkMaxAggregateOutputType | null
  }

  type GetUserServerLinkGroupByPayload<T extends UserServerLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserServerLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserServerLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserServerLinkGroupByOutputType[P]>
            : GetScalarType<T[P], UserServerLinkGroupByOutputType[P]>
        }
      >
    >


  export type UserServerLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    embyUserId?: boolean
    serverId?: boolean
    packageId?: boolean
    status?: boolean
    startAt?: boolean
    expireAt?: boolean
    suspendedAt?: boolean
    suspendedById?: boolean
    creditsAllocated?: boolean
    creditsUsed?: boolean
    creditsRemaining?: boolean
    creditType?: boolean
    demoHours?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    package?: boolean | UserServerLink$packageArgs<ExtArgs>
    suspendedBy?: boolean | UserServerLink$suspendedByArgs<ExtArgs>
    embyAccount?: boolean | UserServerLink$embyAccountArgs<ExtArgs>
  }, ExtArgs["result"]["userServerLink"]>

  export type UserServerLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    embyUserId?: boolean
    serverId?: boolean
    packageId?: boolean
    status?: boolean
    startAt?: boolean
    expireAt?: boolean
    suspendedAt?: boolean
    suspendedById?: boolean
    creditsAllocated?: boolean
    creditsUsed?: boolean
    creditsRemaining?: boolean
    creditType?: boolean
    demoHours?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    package?: boolean | UserServerLink$packageArgs<ExtArgs>
    suspendedBy?: boolean | UserServerLink$suspendedByArgs<ExtArgs>
  }, ExtArgs["result"]["userServerLink"]>

  export type UserServerLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    embyUserId?: boolean
    serverId?: boolean
    packageId?: boolean
    status?: boolean
    startAt?: boolean
    expireAt?: boolean
    suspendedAt?: boolean
    suspendedById?: boolean
    creditsAllocated?: boolean
    creditsUsed?: boolean
    creditsRemaining?: boolean
    creditType?: boolean
    demoHours?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    package?: boolean | UserServerLink$packageArgs<ExtArgs>
    suspendedBy?: boolean | UserServerLink$suspendedByArgs<ExtArgs>
  }, ExtArgs["result"]["userServerLink"]>

  export type UserServerLinkSelectScalar = {
    id?: boolean
    embyUserId?: boolean
    serverId?: boolean
    packageId?: boolean
    status?: boolean
    startAt?: boolean
    expireAt?: boolean
    suspendedAt?: boolean
    suspendedById?: boolean
    creditsAllocated?: boolean
    creditsUsed?: boolean
    creditsRemaining?: boolean
    creditType?: boolean
    demoHours?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserServerLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "embyUserId" | "serverId" | "packageId" | "status" | "startAt" | "expireAt" | "suspendedAt" | "suspendedById" | "creditsAllocated" | "creditsUsed" | "creditsRemaining" | "creditType" | "demoHours" | "isDemo" | "createdAt" | "updatedAt", ExtArgs["result"]["userServerLink"]>
  export type UserServerLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    package?: boolean | UserServerLink$packageArgs<ExtArgs>
    suspendedBy?: boolean | UserServerLink$suspendedByArgs<ExtArgs>
    embyAccount?: boolean | UserServerLink$embyAccountArgs<ExtArgs>
  }
  export type UserServerLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    package?: boolean | UserServerLink$packageArgs<ExtArgs>
    suspendedBy?: boolean | UserServerLink$suspendedByArgs<ExtArgs>
  }
  export type UserServerLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    package?: boolean | UserServerLink$packageArgs<ExtArgs>
    suspendedBy?: boolean | UserServerLink$suspendedByArgs<ExtArgs>
  }

  export type $UserServerLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserServerLink"
    objects: {
      embyUser: Prisma.$EmbyUserPayload<ExtArgs>
      server: Prisma.$EmbyServerPayload<ExtArgs>
      package: Prisma.$PackagePayload<ExtArgs> | null
      suspendedBy: Prisma.$UserPayload<ExtArgs> | null
      embyAccount: Prisma.$EmbyAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      embyUserId: string
      serverId: string
      packageId: string | null
      status: $Enums.AccountStatus
      startAt: Date
      expireAt: Date | null
      suspendedAt: Date | null
      suspendedById: string | null
      creditsAllocated: number
      creditsUsed: number
      creditsRemaining: number
      creditType: string
      demoHours: number | null
      isDemo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userServerLink"]>
    composites: {}
  }

  type UserServerLinkGetPayload<S extends boolean | null | undefined | UserServerLinkDefaultArgs> = $Result.GetResult<Prisma.$UserServerLinkPayload, S>

  type UserServerLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserServerLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserServerLinkCountAggregateInputType | true
    }

  export interface UserServerLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserServerLink'], meta: { name: 'UserServerLink' } }
    /**
     * Find zero or one UserServerLink that matches the filter.
     * @param {UserServerLinkFindUniqueArgs} args - Arguments to find a UserServerLink
     * @example
     * // Get one UserServerLink
     * const userServerLink = await prisma.userServerLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserServerLinkFindUniqueArgs>(args: SelectSubset<T, UserServerLinkFindUniqueArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserServerLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserServerLinkFindUniqueOrThrowArgs} args - Arguments to find a UserServerLink
     * @example
     * // Get one UserServerLink
     * const userServerLink = await prisma.userServerLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserServerLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, UserServerLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserServerLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserServerLinkFindFirstArgs} args - Arguments to find a UserServerLink
     * @example
     * // Get one UserServerLink
     * const userServerLink = await prisma.userServerLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserServerLinkFindFirstArgs>(args?: SelectSubset<T, UserServerLinkFindFirstArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserServerLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserServerLinkFindFirstOrThrowArgs} args - Arguments to find a UserServerLink
     * @example
     * // Get one UserServerLink
     * const userServerLink = await prisma.userServerLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserServerLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, UserServerLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserServerLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserServerLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserServerLinks
     * const userServerLinks = await prisma.userServerLink.findMany()
     * 
     * // Get first 10 UserServerLinks
     * const userServerLinks = await prisma.userServerLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userServerLinkWithIdOnly = await prisma.userServerLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserServerLinkFindManyArgs>(args?: SelectSubset<T, UserServerLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserServerLink.
     * @param {UserServerLinkCreateArgs} args - Arguments to create a UserServerLink.
     * @example
     * // Create one UserServerLink
     * const UserServerLink = await prisma.userServerLink.create({
     *   data: {
     *     // ... data to create a UserServerLink
     *   }
     * })
     * 
     */
    create<T extends UserServerLinkCreateArgs>(args: SelectSubset<T, UserServerLinkCreateArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserServerLinks.
     * @param {UserServerLinkCreateManyArgs} args - Arguments to create many UserServerLinks.
     * @example
     * // Create many UserServerLinks
     * const userServerLink = await prisma.userServerLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserServerLinkCreateManyArgs>(args?: SelectSubset<T, UserServerLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserServerLinks and returns the data saved in the database.
     * @param {UserServerLinkCreateManyAndReturnArgs} args - Arguments to create many UserServerLinks.
     * @example
     * // Create many UserServerLinks
     * const userServerLink = await prisma.userServerLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserServerLinks and only return the `id`
     * const userServerLinkWithIdOnly = await prisma.userServerLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserServerLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, UserServerLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserServerLink.
     * @param {UserServerLinkDeleteArgs} args - Arguments to delete one UserServerLink.
     * @example
     * // Delete one UserServerLink
     * const UserServerLink = await prisma.userServerLink.delete({
     *   where: {
     *     // ... filter to delete one UserServerLink
     *   }
     * })
     * 
     */
    delete<T extends UserServerLinkDeleteArgs>(args: SelectSubset<T, UserServerLinkDeleteArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserServerLink.
     * @param {UserServerLinkUpdateArgs} args - Arguments to update one UserServerLink.
     * @example
     * // Update one UserServerLink
     * const userServerLink = await prisma.userServerLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserServerLinkUpdateArgs>(args: SelectSubset<T, UserServerLinkUpdateArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserServerLinks.
     * @param {UserServerLinkDeleteManyArgs} args - Arguments to filter UserServerLinks to delete.
     * @example
     * // Delete a few UserServerLinks
     * const { count } = await prisma.userServerLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserServerLinkDeleteManyArgs>(args?: SelectSubset<T, UserServerLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserServerLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserServerLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserServerLinks
     * const userServerLink = await prisma.userServerLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserServerLinkUpdateManyArgs>(args: SelectSubset<T, UserServerLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserServerLinks and returns the data updated in the database.
     * @param {UserServerLinkUpdateManyAndReturnArgs} args - Arguments to update many UserServerLinks.
     * @example
     * // Update many UserServerLinks
     * const userServerLink = await prisma.userServerLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserServerLinks and only return the `id`
     * const userServerLinkWithIdOnly = await prisma.userServerLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserServerLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, UserServerLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserServerLink.
     * @param {UserServerLinkUpsertArgs} args - Arguments to update or create a UserServerLink.
     * @example
     * // Update or create a UserServerLink
     * const userServerLink = await prisma.userServerLink.upsert({
     *   create: {
     *     // ... data to create a UserServerLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserServerLink we want to update
     *   }
     * })
     */
    upsert<T extends UserServerLinkUpsertArgs>(args: SelectSubset<T, UserServerLinkUpsertArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserServerLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserServerLinkCountArgs} args - Arguments to filter UserServerLinks to count.
     * @example
     * // Count the number of UserServerLinks
     * const count = await prisma.userServerLink.count({
     *   where: {
     *     // ... the filter for the UserServerLinks we want to count
     *   }
     * })
    **/
    count<T extends UserServerLinkCountArgs>(
      args?: Subset<T, UserServerLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserServerLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserServerLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserServerLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserServerLinkAggregateArgs>(args: Subset<T, UserServerLinkAggregateArgs>): Prisma.PrismaPromise<GetUserServerLinkAggregateType<T>>

    /**
     * Group by UserServerLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserServerLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserServerLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserServerLinkGroupByArgs['orderBy'] }
        : { orderBy?: UserServerLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserServerLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserServerLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserServerLink model
   */
  readonly fields: UserServerLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserServerLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserServerLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    embyUser<T extends EmbyUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmbyUserDefaultArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    server<T extends EmbyServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmbyServerDefaultArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends UserServerLink$packageArgs<ExtArgs> = {}>(args?: Subset<T, UserServerLink$packageArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    suspendedBy<T extends UserServerLink$suspendedByArgs<ExtArgs> = {}>(args?: Subset<T, UserServerLink$suspendedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    embyAccount<T extends UserServerLink$embyAccountArgs<ExtArgs> = {}>(args?: Subset<T, UserServerLink$embyAccountArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserServerLink model
   */
  interface UserServerLinkFieldRefs {
    readonly id: FieldRef<"UserServerLink", 'String'>
    readonly embyUserId: FieldRef<"UserServerLink", 'String'>
    readonly serverId: FieldRef<"UserServerLink", 'String'>
    readonly packageId: FieldRef<"UserServerLink", 'String'>
    readonly status: FieldRef<"UserServerLink", 'AccountStatus'>
    readonly startAt: FieldRef<"UserServerLink", 'DateTime'>
    readonly expireAt: FieldRef<"UserServerLink", 'DateTime'>
    readonly suspendedAt: FieldRef<"UserServerLink", 'DateTime'>
    readonly suspendedById: FieldRef<"UserServerLink", 'String'>
    readonly creditsAllocated: FieldRef<"UserServerLink", 'Int'>
    readonly creditsUsed: FieldRef<"UserServerLink", 'Int'>
    readonly creditsRemaining: FieldRef<"UserServerLink", 'Int'>
    readonly creditType: FieldRef<"UserServerLink", 'String'>
    readonly demoHours: FieldRef<"UserServerLink", 'Int'>
    readonly isDemo: FieldRef<"UserServerLink", 'Boolean'>
    readonly createdAt: FieldRef<"UserServerLink", 'DateTime'>
    readonly updatedAt: FieldRef<"UserServerLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserServerLink findUnique
   */
  export type UserServerLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserServerLink to fetch.
     */
    where: UserServerLinkWhereUniqueInput
  }

  /**
   * UserServerLink findUniqueOrThrow
   */
  export type UserServerLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserServerLink to fetch.
     */
    where: UserServerLinkWhereUniqueInput
  }

  /**
   * UserServerLink findFirst
   */
  export type UserServerLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserServerLink to fetch.
     */
    where?: UserServerLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserServerLinks to fetch.
     */
    orderBy?: UserServerLinkOrderByWithRelationInput | UserServerLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserServerLinks.
     */
    cursor?: UserServerLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserServerLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserServerLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserServerLinks.
     */
    distinct?: UserServerLinkScalarFieldEnum | UserServerLinkScalarFieldEnum[]
  }

  /**
   * UserServerLink findFirstOrThrow
   */
  export type UserServerLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserServerLink to fetch.
     */
    where?: UserServerLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserServerLinks to fetch.
     */
    orderBy?: UserServerLinkOrderByWithRelationInput | UserServerLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserServerLinks.
     */
    cursor?: UserServerLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserServerLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserServerLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserServerLinks.
     */
    distinct?: UserServerLinkScalarFieldEnum | UserServerLinkScalarFieldEnum[]
  }

  /**
   * UserServerLink findMany
   */
  export type UserServerLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserServerLinks to fetch.
     */
    where?: UserServerLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserServerLinks to fetch.
     */
    orderBy?: UserServerLinkOrderByWithRelationInput | UserServerLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserServerLinks.
     */
    cursor?: UserServerLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserServerLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserServerLinks.
     */
    skip?: number
    distinct?: UserServerLinkScalarFieldEnum | UserServerLinkScalarFieldEnum[]
  }

  /**
   * UserServerLink create
   */
  export type UserServerLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a UserServerLink.
     */
    data: XOR<UserServerLinkCreateInput, UserServerLinkUncheckedCreateInput>
  }

  /**
   * UserServerLink createMany
   */
  export type UserServerLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserServerLinks.
     */
    data: UserServerLinkCreateManyInput | UserServerLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserServerLink createManyAndReturn
   */
  export type UserServerLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * The data used to create many UserServerLinks.
     */
    data: UserServerLinkCreateManyInput | UserServerLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserServerLink update
   */
  export type UserServerLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a UserServerLink.
     */
    data: XOR<UserServerLinkUpdateInput, UserServerLinkUncheckedUpdateInput>
    /**
     * Choose, which UserServerLink to update.
     */
    where: UserServerLinkWhereUniqueInput
  }

  /**
   * UserServerLink updateMany
   */
  export type UserServerLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserServerLinks.
     */
    data: XOR<UserServerLinkUpdateManyMutationInput, UserServerLinkUncheckedUpdateManyInput>
    /**
     * Filter which UserServerLinks to update
     */
    where?: UserServerLinkWhereInput
    /**
     * Limit how many UserServerLinks to update.
     */
    limit?: number
  }

  /**
   * UserServerLink updateManyAndReturn
   */
  export type UserServerLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * The data used to update UserServerLinks.
     */
    data: XOR<UserServerLinkUpdateManyMutationInput, UserServerLinkUncheckedUpdateManyInput>
    /**
     * Filter which UserServerLinks to update
     */
    where?: UserServerLinkWhereInput
    /**
     * Limit how many UserServerLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserServerLink upsert
   */
  export type UserServerLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the UserServerLink to update in case it exists.
     */
    where: UserServerLinkWhereUniqueInput
    /**
     * In case the UserServerLink found by the `where` argument doesn't exist, create a new UserServerLink with this data.
     */
    create: XOR<UserServerLinkCreateInput, UserServerLinkUncheckedCreateInput>
    /**
     * In case the UserServerLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserServerLinkUpdateInput, UserServerLinkUncheckedUpdateInput>
  }

  /**
   * UserServerLink delete
   */
  export type UserServerLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    /**
     * Filter which UserServerLink to delete.
     */
    where: UserServerLinkWhereUniqueInput
  }

  /**
   * UserServerLink deleteMany
   */
  export type UserServerLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserServerLinks to delete
     */
    where?: UserServerLinkWhereInput
    /**
     * Limit how many UserServerLinks to delete.
     */
    limit?: number
  }

  /**
   * UserServerLink.package
   */
  export type UserServerLink$packageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
  }

  /**
   * UserServerLink.suspendedBy
   */
  export type UserServerLink$suspendedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserServerLink.embyAccount
   */
  export type UserServerLink$embyAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    where?: EmbyAccountWhereInput
  }

  /**
   * UserServerLink without action
   */
  export type UserServerLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
  }


  /**
   * Model EmbyAccount
   */

  export type AggregateEmbyAccount = {
    _count: EmbyAccountCountAggregateOutputType | null
    _min: EmbyAccountMinAggregateOutputType | null
    _max: EmbyAccountMaxAggregateOutputType | null
  }

  export type EmbyAccountMinAggregateOutputType = {
    id: string | null
    embyUserId: string | null
    serverId: string | null
    embyUserIdInternal: string | null
    embyUsername: string | null
    userServerLinkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmbyAccountMaxAggregateOutputType = {
    id: string | null
    embyUserId: string | null
    serverId: string | null
    embyUserIdInternal: string | null
    embyUsername: string | null
    userServerLinkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmbyAccountCountAggregateOutputType = {
    id: number
    embyUserId: number
    serverId: number
    embyUserIdInternal: number
    embyUsername: number
    userServerLinkId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmbyAccountMinAggregateInputType = {
    id?: true
    embyUserId?: true
    serverId?: true
    embyUserIdInternal?: true
    embyUsername?: true
    userServerLinkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmbyAccountMaxAggregateInputType = {
    id?: true
    embyUserId?: true
    serverId?: true
    embyUserIdInternal?: true
    embyUsername?: true
    userServerLinkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmbyAccountCountAggregateInputType = {
    id?: true
    embyUserId?: true
    serverId?: true
    embyUserIdInternal?: true
    embyUsername?: true
    userServerLinkId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmbyAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbyAccount to aggregate.
     */
    where?: EmbyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyAccounts to fetch.
     */
    orderBy?: EmbyAccountOrderByWithRelationInput | EmbyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmbyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmbyAccounts
    **/
    _count?: true | EmbyAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbyAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbyAccountMaxAggregateInputType
  }

  export type GetEmbyAccountAggregateType<T extends EmbyAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbyAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbyAccount[P]>
      : GetScalarType<T[P], AggregateEmbyAccount[P]>
  }




  export type EmbyAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbyAccountWhereInput
    orderBy?: EmbyAccountOrderByWithAggregationInput | EmbyAccountOrderByWithAggregationInput[]
    by: EmbyAccountScalarFieldEnum[] | EmbyAccountScalarFieldEnum
    having?: EmbyAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbyAccountCountAggregateInputType | true
    _min?: EmbyAccountMinAggregateInputType
    _max?: EmbyAccountMaxAggregateInputType
  }

  export type EmbyAccountGroupByOutputType = {
    id: string
    embyUserId: string
    serverId: string
    embyUserIdInternal: string
    embyUsername: string
    userServerLinkId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmbyAccountCountAggregateOutputType | null
    _min: EmbyAccountMinAggregateOutputType | null
    _max: EmbyAccountMaxAggregateOutputType | null
  }

  type GetEmbyAccountGroupByPayload<T extends EmbyAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbyAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbyAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbyAccountGroupByOutputType[P]>
            : GetScalarType<T[P], EmbyAccountGroupByOutputType[P]>
        }
      >
    >


  export type EmbyAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    embyUserId?: boolean
    serverId?: boolean
    embyUserIdInternal?: boolean
    embyUsername?: boolean
    userServerLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    userServerLink?: boolean | EmbyAccount$userServerLinkArgs<ExtArgs>
  }, ExtArgs["result"]["embyAccount"]>

  export type EmbyAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    embyUserId?: boolean
    serverId?: boolean
    embyUserIdInternal?: boolean
    embyUsername?: boolean
    userServerLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    userServerLink?: boolean | EmbyAccount$userServerLinkArgs<ExtArgs>
  }, ExtArgs["result"]["embyAccount"]>

  export type EmbyAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    embyUserId?: boolean
    serverId?: boolean
    embyUserIdInternal?: boolean
    embyUsername?: boolean
    userServerLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    userServerLink?: boolean | EmbyAccount$userServerLinkArgs<ExtArgs>
  }, ExtArgs["result"]["embyAccount"]>

  export type EmbyAccountSelectScalar = {
    id?: boolean
    embyUserId?: boolean
    serverId?: boolean
    embyUserIdInternal?: boolean
    embyUsername?: boolean
    userServerLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmbyAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "embyUserId" | "serverId" | "embyUserIdInternal" | "embyUsername" | "userServerLinkId" | "createdAt" | "updatedAt", ExtArgs["result"]["embyAccount"]>
  export type EmbyAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    userServerLink?: boolean | EmbyAccount$userServerLinkArgs<ExtArgs>
  }
  export type EmbyAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    userServerLink?: boolean | EmbyAccount$userServerLinkArgs<ExtArgs>
  }
  export type EmbyAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embyUser?: boolean | EmbyUserDefaultArgs<ExtArgs>
    server?: boolean | EmbyServerDefaultArgs<ExtArgs>
    userServerLink?: boolean | EmbyAccount$userServerLinkArgs<ExtArgs>
  }

  export type $EmbyAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmbyAccount"
    objects: {
      embyUser: Prisma.$EmbyUserPayload<ExtArgs>
      server: Prisma.$EmbyServerPayload<ExtArgs>
      userServerLink: Prisma.$UserServerLinkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      embyUserId: string
      serverId: string
      embyUserIdInternal: string
      embyUsername: string
      userServerLinkId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["embyAccount"]>
    composites: {}
  }

  type EmbyAccountGetPayload<S extends boolean | null | undefined | EmbyAccountDefaultArgs> = $Result.GetResult<Prisma.$EmbyAccountPayload, S>

  type EmbyAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmbyAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmbyAccountCountAggregateInputType | true
    }

  export interface EmbyAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmbyAccount'], meta: { name: 'EmbyAccount' } }
    /**
     * Find zero or one EmbyAccount that matches the filter.
     * @param {EmbyAccountFindUniqueArgs} args - Arguments to find a EmbyAccount
     * @example
     * // Get one EmbyAccount
     * const embyAccount = await prisma.embyAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmbyAccountFindUniqueArgs>(args: SelectSubset<T, EmbyAccountFindUniqueArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmbyAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmbyAccountFindUniqueOrThrowArgs} args - Arguments to find a EmbyAccount
     * @example
     * // Get one EmbyAccount
     * const embyAccount = await prisma.embyAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmbyAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, EmbyAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmbyAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyAccountFindFirstArgs} args - Arguments to find a EmbyAccount
     * @example
     * // Get one EmbyAccount
     * const embyAccount = await prisma.embyAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmbyAccountFindFirstArgs>(args?: SelectSubset<T, EmbyAccountFindFirstArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmbyAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyAccountFindFirstOrThrowArgs} args - Arguments to find a EmbyAccount
     * @example
     * // Get one EmbyAccount
     * const embyAccount = await prisma.embyAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmbyAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, EmbyAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmbyAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmbyAccounts
     * const embyAccounts = await prisma.embyAccount.findMany()
     * 
     * // Get first 10 EmbyAccounts
     * const embyAccounts = await prisma.embyAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embyAccountWithIdOnly = await prisma.embyAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmbyAccountFindManyArgs>(args?: SelectSubset<T, EmbyAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmbyAccount.
     * @param {EmbyAccountCreateArgs} args - Arguments to create a EmbyAccount.
     * @example
     * // Create one EmbyAccount
     * const EmbyAccount = await prisma.embyAccount.create({
     *   data: {
     *     // ... data to create a EmbyAccount
     *   }
     * })
     * 
     */
    create<T extends EmbyAccountCreateArgs>(args: SelectSubset<T, EmbyAccountCreateArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmbyAccounts.
     * @param {EmbyAccountCreateManyArgs} args - Arguments to create many EmbyAccounts.
     * @example
     * // Create many EmbyAccounts
     * const embyAccount = await prisma.embyAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmbyAccountCreateManyArgs>(args?: SelectSubset<T, EmbyAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmbyAccounts and returns the data saved in the database.
     * @param {EmbyAccountCreateManyAndReturnArgs} args - Arguments to create many EmbyAccounts.
     * @example
     * // Create many EmbyAccounts
     * const embyAccount = await prisma.embyAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmbyAccounts and only return the `id`
     * const embyAccountWithIdOnly = await prisma.embyAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmbyAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, EmbyAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmbyAccount.
     * @param {EmbyAccountDeleteArgs} args - Arguments to delete one EmbyAccount.
     * @example
     * // Delete one EmbyAccount
     * const EmbyAccount = await prisma.embyAccount.delete({
     *   where: {
     *     // ... filter to delete one EmbyAccount
     *   }
     * })
     * 
     */
    delete<T extends EmbyAccountDeleteArgs>(args: SelectSubset<T, EmbyAccountDeleteArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmbyAccount.
     * @param {EmbyAccountUpdateArgs} args - Arguments to update one EmbyAccount.
     * @example
     * // Update one EmbyAccount
     * const embyAccount = await prisma.embyAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmbyAccountUpdateArgs>(args: SelectSubset<T, EmbyAccountUpdateArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmbyAccounts.
     * @param {EmbyAccountDeleteManyArgs} args - Arguments to filter EmbyAccounts to delete.
     * @example
     * // Delete a few EmbyAccounts
     * const { count } = await prisma.embyAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmbyAccountDeleteManyArgs>(args?: SelectSubset<T, EmbyAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbyAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmbyAccounts
     * const embyAccount = await prisma.embyAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmbyAccountUpdateManyArgs>(args: SelectSubset<T, EmbyAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbyAccounts and returns the data updated in the database.
     * @param {EmbyAccountUpdateManyAndReturnArgs} args - Arguments to update many EmbyAccounts.
     * @example
     * // Update many EmbyAccounts
     * const embyAccount = await prisma.embyAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmbyAccounts and only return the `id`
     * const embyAccountWithIdOnly = await prisma.embyAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmbyAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, EmbyAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmbyAccount.
     * @param {EmbyAccountUpsertArgs} args - Arguments to update or create a EmbyAccount.
     * @example
     * // Update or create a EmbyAccount
     * const embyAccount = await prisma.embyAccount.upsert({
     *   create: {
     *     // ... data to create a EmbyAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmbyAccount we want to update
     *   }
     * })
     */
    upsert<T extends EmbyAccountUpsertArgs>(args: SelectSubset<T, EmbyAccountUpsertArgs<ExtArgs>>): Prisma__EmbyAccountClient<$Result.GetResult<Prisma.$EmbyAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmbyAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyAccountCountArgs} args - Arguments to filter EmbyAccounts to count.
     * @example
     * // Count the number of EmbyAccounts
     * const count = await prisma.embyAccount.count({
     *   where: {
     *     // ... the filter for the EmbyAccounts we want to count
     *   }
     * })
    **/
    count<T extends EmbyAccountCountArgs>(
      args?: Subset<T, EmbyAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbyAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmbyAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmbyAccountAggregateArgs>(args: Subset<T, EmbyAccountAggregateArgs>): Prisma.PrismaPromise<GetEmbyAccountAggregateType<T>>

    /**
     * Group by EmbyAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbyAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmbyAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmbyAccountGroupByArgs['orderBy'] }
        : { orderBy?: EmbyAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmbyAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbyAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmbyAccount model
   */
  readonly fields: EmbyAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmbyAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmbyAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    embyUser<T extends EmbyUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmbyUserDefaultArgs<ExtArgs>>): Prisma__EmbyUserClient<$Result.GetResult<Prisma.$EmbyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    server<T extends EmbyServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmbyServerDefaultArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userServerLink<T extends EmbyAccount$userServerLinkArgs<ExtArgs> = {}>(args?: Subset<T, EmbyAccount$userServerLinkArgs<ExtArgs>>): Prisma__UserServerLinkClient<$Result.GetResult<Prisma.$UserServerLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmbyAccount model
   */
  interface EmbyAccountFieldRefs {
    readonly id: FieldRef<"EmbyAccount", 'String'>
    readonly embyUserId: FieldRef<"EmbyAccount", 'String'>
    readonly serverId: FieldRef<"EmbyAccount", 'String'>
    readonly embyUserIdInternal: FieldRef<"EmbyAccount", 'String'>
    readonly embyUsername: FieldRef<"EmbyAccount", 'String'>
    readonly userServerLinkId: FieldRef<"EmbyAccount", 'String'>
    readonly createdAt: FieldRef<"EmbyAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"EmbyAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmbyAccount findUnique
   */
  export type EmbyAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmbyAccount to fetch.
     */
    where: EmbyAccountWhereUniqueInput
  }

  /**
   * EmbyAccount findUniqueOrThrow
   */
  export type EmbyAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmbyAccount to fetch.
     */
    where: EmbyAccountWhereUniqueInput
  }

  /**
   * EmbyAccount findFirst
   */
  export type EmbyAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmbyAccount to fetch.
     */
    where?: EmbyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyAccounts to fetch.
     */
    orderBy?: EmbyAccountOrderByWithRelationInput | EmbyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbyAccounts.
     */
    cursor?: EmbyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbyAccounts.
     */
    distinct?: EmbyAccountScalarFieldEnum | EmbyAccountScalarFieldEnum[]
  }

  /**
   * EmbyAccount findFirstOrThrow
   */
  export type EmbyAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmbyAccount to fetch.
     */
    where?: EmbyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyAccounts to fetch.
     */
    orderBy?: EmbyAccountOrderByWithRelationInput | EmbyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbyAccounts.
     */
    cursor?: EmbyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbyAccounts.
     */
    distinct?: EmbyAccountScalarFieldEnum | EmbyAccountScalarFieldEnum[]
  }

  /**
   * EmbyAccount findMany
   */
  export type EmbyAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmbyAccounts to fetch.
     */
    where?: EmbyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbyAccounts to fetch.
     */
    orderBy?: EmbyAccountOrderByWithRelationInput | EmbyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmbyAccounts.
     */
    cursor?: EmbyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbyAccounts.
     */
    skip?: number
    distinct?: EmbyAccountScalarFieldEnum | EmbyAccountScalarFieldEnum[]
  }

  /**
   * EmbyAccount create
   */
  export type EmbyAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a EmbyAccount.
     */
    data: XOR<EmbyAccountCreateInput, EmbyAccountUncheckedCreateInput>
  }

  /**
   * EmbyAccount createMany
   */
  export type EmbyAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmbyAccounts.
     */
    data: EmbyAccountCreateManyInput | EmbyAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmbyAccount createManyAndReturn
   */
  export type EmbyAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * The data used to create many EmbyAccounts.
     */
    data: EmbyAccountCreateManyInput | EmbyAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmbyAccount update
   */
  export type EmbyAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a EmbyAccount.
     */
    data: XOR<EmbyAccountUpdateInput, EmbyAccountUncheckedUpdateInput>
    /**
     * Choose, which EmbyAccount to update.
     */
    where: EmbyAccountWhereUniqueInput
  }

  /**
   * EmbyAccount updateMany
   */
  export type EmbyAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmbyAccounts.
     */
    data: XOR<EmbyAccountUpdateManyMutationInput, EmbyAccountUncheckedUpdateManyInput>
    /**
     * Filter which EmbyAccounts to update
     */
    where?: EmbyAccountWhereInput
    /**
     * Limit how many EmbyAccounts to update.
     */
    limit?: number
  }

  /**
   * EmbyAccount updateManyAndReturn
   */
  export type EmbyAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * The data used to update EmbyAccounts.
     */
    data: XOR<EmbyAccountUpdateManyMutationInput, EmbyAccountUncheckedUpdateManyInput>
    /**
     * Filter which EmbyAccounts to update
     */
    where?: EmbyAccountWhereInput
    /**
     * Limit how many EmbyAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmbyAccount upsert
   */
  export type EmbyAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the EmbyAccount to update in case it exists.
     */
    where: EmbyAccountWhereUniqueInput
    /**
     * In case the EmbyAccount found by the `where` argument doesn't exist, create a new EmbyAccount with this data.
     */
    create: XOR<EmbyAccountCreateInput, EmbyAccountUncheckedCreateInput>
    /**
     * In case the EmbyAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmbyAccountUpdateInput, EmbyAccountUncheckedUpdateInput>
  }

  /**
   * EmbyAccount delete
   */
  export type EmbyAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
    /**
     * Filter which EmbyAccount to delete.
     */
    where: EmbyAccountWhereUniqueInput
  }

  /**
   * EmbyAccount deleteMany
   */
  export type EmbyAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbyAccounts to delete
     */
    where?: EmbyAccountWhereInput
    /**
     * Limit how many EmbyAccounts to delete.
     */
    limit?: number
  }

  /**
   * EmbyAccount.userServerLink
   */
  export type EmbyAccount$userServerLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserServerLink
     */
    select?: UserServerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserServerLink
     */
    omit?: UserServerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserServerLinkInclude<ExtArgs> | null
    where?: UserServerLinkWhereInput
  }

  /**
   * EmbyAccount without action
   */
  export type EmbyAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyAccount
     */
    select?: EmbyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyAccount
     */
    omit?: EmbyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyAccountInclude<ExtArgs> | null
  }


  /**
   * Model UserPolicy
   */

  export type AggregateUserPolicy = {
    _count: UserPolicyCountAggregateOutputType | null
    _avg: UserPolicyAvgAggregateOutputType | null
    _sum: UserPolicySumAggregateOutputType | null
    _min: UserPolicyMinAggregateOutputType | null
    _max: UserPolicyMaxAggregateOutputType | null
  }

  export type UserPolicyAvgAggregateOutputType = {
    maxParentalRating: number | null
    remoteClientBitrateLimit: number | null
    maxActiveSessions: number | null
    loginAttemptsBeforeLockout: number | null
  }

  export type UserPolicySumAggregateOutputType = {
    maxParentalRating: number | null
    remoteClientBitrateLimit: number | null
    maxActiveSessions: number | null
    loginAttemptsBeforeLockout: number | null
  }

  export type UserPolicyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isTemplate: boolean | null
    isAdministrator: boolean | null
    isHidden: boolean | null
    isDisabled: boolean | null
    maxParentalRating: number | null
    enableUserPreferenceAccess: boolean | null
    enableAudioPlaybackTranscoding: boolean | null
    enableVideoPlaybackTranscoding: boolean | null
    enablePlaybackRemuxing: boolean | null
    forceRemoteSourceTranscoding: boolean | null
    enableSyncTranscoding: boolean | null
    enableMediaConversion: boolean | null
    enableContentDownloading: boolean | null
    enableContentDeletion: boolean | null
    enableCameraUpload: boolean | null
    enableRemoteAccess: boolean | null
    enableMediaPlayback: boolean | null
    remoteClientBitrateLimit: number | null
    maxActiveSessions: number | null
    enableAllDevices: boolean | null
    enableLiveTvManagement: boolean | null
    enableLiveTvAccess: boolean | null
    enableAllChannels: boolean | null
    enableRemoteControlOfOtherUsers: boolean | null
    enableSharedDeviceControl: boolean | null
    enablePublicSharing: boolean | null
    enableAllFolders: boolean | null
    loginAttemptsBeforeLockout: number | null
    syncPlayAccess: string | null
    enableSchedule: boolean | null
    scheduleStart: string | null
    scheduleEnd: string | null
    blockedTags: string | null
    blockedMediaFolders: string | null
    blockedChannels: string | null
    accessSchedules: string | null
    blockUnratedItems: string | null
    serverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPolicyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isTemplate: boolean | null
    isAdministrator: boolean | null
    isHidden: boolean | null
    isDisabled: boolean | null
    maxParentalRating: number | null
    enableUserPreferenceAccess: boolean | null
    enableAudioPlaybackTranscoding: boolean | null
    enableVideoPlaybackTranscoding: boolean | null
    enablePlaybackRemuxing: boolean | null
    forceRemoteSourceTranscoding: boolean | null
    enableSyncTranscoding: boolean | null
    enableMediaConversion: boolean | null
    enableContentDownloading: boolean | null
    enableContentDeletion: boolean | null
    enableCameraUpload: boolean | null
    enableRemoteAccess: boolean | null
    enableMediaPlayback: boolean | null
    remoteClientBitrateLimit: number | null
    maxActiveSessions: number | null
    enableAllDevices: boolean | null
    enableLiveTvManagement: boolean | null
    enableLiveTvAccess: boolean | null
    enableAllChannels: boolean | null
    enableRemoteControlOfOtherUsers: boolean | null
    enableSharedDeviceControl: boolean | null
    enablePublicSharing: boolean | null
    enableAllFolders: boolean | null
    loginAttemptsBeforeLockout: number | null
    syncPlayAccess: string | null
    enableSchedule: boolean | null
    scheduleStart: string | null
    scheduleEnd: string | null
    blockedTags: string | null
    blockedMediaFolders: string | null
    blockedChannels: string | null
    accessSchedules: string | null
    blockUnratedItems: string | null
    serverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPolicyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isTemplate: number
    isAdministrator: number
    isHidden: number
    isDisabled: number
    maxParentalRating: number
    enableUserPreferenceAccess: number
    enableAudioPlaybackTranscoding: number
    enableVideoPlaybackTranscoding: number
    enablePlaybackRemuxing: number
    forceRemoteSourceTranscoding: number
    enableSyncTranscoding: number
    enableMediaConversion: number
    enableContentDownloading: number
    enableContentDeletion: number
    enableCameraUpload: number
    enableRemoteAccess: number
    enableMediaPlayback: number
    remoteClientBitrateLimit: number
    maxActiveSessions: number
    enableAllDevices: number
    enableLiveTvManagement: number
    enableLiveTvAccess: number
    enableAllChannels: number
    enableRemoteControlOfOtherUsers: number
    enableSharedDeviceControl: number
    enablePublicSharing: number
    enableAllFolders: number
    loginAttemptsBeforeLockout: number
    syncPlayAccess: number
    enableSchedule: number
    scheduleStart: number
    scheduleEnd: number
    blockedTags: number
    blockedMediaFolders: number
    blockedChannels: number
    accessSchedules: number
    blockUnratedItems: number
    serverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPolicyAvgAggregateInputType = {
    maxParentalRating?: true
    remoteClientBitrateLimit?: true
    maxActiveSessions?: true
    loginAttemptsBeforeLockout?: true
  }

  export type UserPolicySumAggregateInputType = {
    maxParentalRating?: true
    remoteClientBitrateLimit?: true
    maxActiveSessions?: true
    loginAttemptsBeforeLockout?: true
  }

  export type UserPolicyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isTemplate?: true
    isAdministrator?: true
    isHidden?: true
    isDisabled?: true
    maxParentalRating?: true
    enableUserPreferenceAccess?: true
    enableAudioPlaybackTranscoding?: true
    enableVideoPlaybackTranscoding?: true
    enablePlaybackRemuxing?: true
    forceRemoteSourceTranscoding?: true
    enableSyncTranscoding?: true
    enableMediaConversion?: true
    enableContentDownloading?: true
    enableContentDeletion?: true
    enableCameraUpload?: true
    enableRemoteAccess?: true
    enableMediaPlayback?: true
    remoteClientBitrateLimit?: true
    maxActiveSessions?: true
    enableAllDevices?: true
    enableLiveTvManagement?: true
    enableLiveTvAccess?: true
    enableAllChannels?: true
    enableRemoteControlOfOtherUsers?: true
    enableSharedDeviceControl?: true
    enablePublicSharing?: true
    enableAllFolders?: true
    loginAttemptsBeforeLockout?: true
    syncPlayAccess?: true
    enableSchedule?: true
    scheduleStart?: true
    scheduleEnd?: true
    blockedTags?: true
    blockedMediaFolders?: true
    blockedChannels?: true
    accessSchedules?: true
    blockUnratedItems?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPolicyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isTemplate?: true
    isAdministrator?: true
    isHidden?: true
    isDisabled?: true
    maxParentalRating?: true
    enableUserPreferenceAccess?: true
    enableAudioPlaybackTranscoding?: true
    enableVideoPlaybackTranscoding?: true
    enablePlaybackRemuxing?: true
    forceRemoteSourceTranscoding?: true
    enableSyncTranscoding?: true
    enableMediaConversion?: true
    enableContentDownloading?: true
    enableContentDeletion?: true
    enableCameraUpload?: true
    enableRemoteAccess?: true
    enableMediaPlayback?: true
    remoteClientBitrateLimit?: true
    maxActiveSessions?: true
    enableAllDevices?: true
    enableLiveTvManagement?: true
    enableLiveTvAccess?: true
    enableAllChannels?: true
    enableRemoteControlOfOtherUsers?: true
    enableSharedDeviceControl?: true
    enablePublicSharing?: true
    enableAllFolders?: true
    loginAttemptsBeforeLockout?: true
    syncPlayAccess?: true
    enableSchedule?: true
    scheduleStart?: true
    scheduleEnd?: true
    blockedTags?: true
    blockedMediaFolders?: true
    blockedChannels?: true
    accessSchedules?: true
    blockUnratedItems?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPolicyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isTemplate?: true
    isAdministrator?: true
    isHidden?: true
    isDisabled?: true
    maxParentalRating?: true
    enableUserPreferenceAccess?: true
    enableAudioPlaybackTranscoding?: true
    enableVideoPlaybackTranscoding?: true
    enablePlaybackRemuxing?: true
    forceRemoteSourceTranscoding?: true
    enableSyncTranscoding?: true
    enableMediaConversion?: true
    enableContentDownloading?: true
    enableContentDeletion?: true
    enableCameraUpload?: true
    enableRemoteAccess?: true
    enableMediaPlayback?: true
    remoteClientBitrateLimit?: true
    maxActiveSessions?: true
    enableAllDevices?: true
    enableLiveTvManagement?: true
    enableLiveTvAccess?: true
    enableAllChannels?: true
    enableRemoteControlOfOtherUsers?: true
    enableSharedDeviceControl?: true
    enablePublicSharing?: true
    enableAllFolders?: true
    loginAttemptsBeforeLockout?: true
    syncPlayAccess?: true
    enableSchedule?: true
    scheduleStart?: true
    scheduleEnd?: true
    blockedTags?: true
    blockedMediaFolders?: true
    blockedChannels?: true
    accessSchedules?: true
    blockUnratedItems?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPolicy to aggregate.
     */
    where?: UserPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPolicies to fetch.
     */
    orderBy?: UserPolicyOrderByWithRelationInput | UserPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPolicies
    **/
    _count?: true | UserPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPolicyMaxAggregateInputType
  }

  export type GetUserPolicyAggregateType<T extends UserPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPolicy[P]>
      : GetScalarType<T[P], AggregateUserPolicy[P]>
  }




  export type UserPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPolicyWhereInput
    orderBy?: UserPolicyOrderByWithAggregationInput | UserPolicyOrderByWithAggregationInput[]
    by: UserPolicyScalarFieldEnum[] | UserPolicyScalarFieldEnum
    having?: UserPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPolicyCountAggregateInputType | true
    _avg?: UserPolicyAvgAggregateInputType
    _sum?: UserPolicySumAggregateInputType
    _min?: UserPolicyMinAggregateInputType
    _max?: UserPolicyMaxAggregateInputType
  }

  export type UserPolicyGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isTemplate: boolean
    isAdministrator: boolean
    isHidden: boolean
    isDisabled: boolean
    maxParentalRating: number
    enableUserPreferenceAccess: boolean
    enableAudioPlaybackTranscoding: boolean
    enableVideoPlaybackTranscoding: boolean
    enablePlaybackRemuxing: boolean
    forceRemoteSourceTranscoding: boolean
    enableSyncTranscoding: boolean
    enableMediaConversion: boolean
    enableContentDownloading: boolean
    enableContentDeletion: boolean
    enableCameraUpload: boolean
    enableRemoteAccess: boolean
    enableMediaPlayback: boolean
    remoteClientBitrateLimit: number
    maxActiveSessions: number
    enableAllDevices: boolean
    enableLiveTvManagement: boolean
    enableLiveTvAccess: boolean
    enableAllChannels: boolean
    enableRemoteControlOfOtherUsers: boolean
    enableSharedDeviceControl: boolean
    enablePublicSharing: boolean
    enableAllFolders: boolean
    loginAttemptsBeforeLockout: number
    syncPlayAccess: string
    enableSchedule: boolean
    scheduleStart: string | null
    scheduleEnd: string | null
    blockedTags: string | null
    blockedMediaFolders: string | null
    blockedChannels: string | null
    accessSchedules: string | null
    blockUnratedItems: string | null
    serverId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserPolicyCountAggregateOutputType | null
    _avg: UserPolicyAvgAggregateOutputType | null
    _sum: UserPolicySumAggregateOutputType | null
    _min: UserPolicyMinAggregateOutputType | null
    _max: UserPolicyMaxAggregateOutputType | null
  }

  type GetUserPolicyGroupByPayload<T extends UserPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], UserPolicyGroupByOutputType[P]>
        }
      >
    >


  export type UserPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: boolean
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: boolean
    maxActiveSessions?: boolean
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: boolean
    syncPlayAccess?: boolean
    enableSchedule?: boolean
    scheduleStart?: boolean
    scheduleEnd?: boolean
    blockedTags?: boolean
    blockedMediaFolders?: boolean
    blockedChannels?: boolean
    accessSchedules?: boolean
    blockUnratedItems?: boolean
    serverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    server?: boolean | UserPolicy$serverArgs<ExtArgs>
  }, ExtArgs["result"]["userPolicy"]>

  export type UserPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: boolean
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: boolean
    maxActiveSessions?: boolean
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: boolean
    syncPlayAccess?: boolean
    enableSchedule?: boolean
    scheduleStart?: boolean
    scheduleEnd?: boolean
    blockedTags?: boolean
    blockedMediaFolders?: boolean
    blockedChannels?: boolean
    accessSchedules?: boolean
    blockUnratedItems?: boolean
    serverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    server?: boolean | UserPolicy$serverArgs<ExtArgs>
  }, ExtArgs["result"]["userPolicy"]>

  export type UserPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: boolean
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: boolean
    maxActiveSessions?: boolean
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: boolean
    syncPlayAccess?: boolean
    enableSchedule?: boolean
    scheduleStart?: boolean
    scheduleEnd?: boolean
    blockedTags?: boolean
    blockedMediaFolders?: boolean
    blockedChannels?: boolean
    accessSchedules?: boolean
    blockUnratedItems?: boolean
    serverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    server?: boolean | UserPolicy$serverArgs<ExtArgs>
  }, ExtArgs["result"]["userPolicy"]>

  export type UserPolicySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: boolean
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: boolean
    maxActiveSessions?: boolean
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: boolean
    syncPlayAccess?: boolean
    enableSchedule?: boolean
    scheduleStart?: boolean
    scheduleEnd?: boolean
    blockedTags?: boolean
    blockedMediaFolders?: boolean
    blockedChannels?: boolean
    accessSchedules?: boolean
    blockUnratedItems?: boolean
    serverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isTemplate" | "isAdministrator" | "isHidden" | "isDisabled" | "maxParentalRating" | "enableUserPreferenceAccess" | "enableAudioPlaybackTranscoding" | "enableVideoPlaybackTranscoding" | "enablePlaybackRemuxing" | "forceRemoteSourceTranscoding" | "enableSyncTranscoding" | "enableMediaConversion" | "enableContentDownloading" | "enableContentDeletion" | "enableCameraUpload" | "enableRemoteAccess" | "enableMediaPlayback" | "remoteClientBitrateLimit" | "maxActiveSessions" | "enableAllDevices" | "enableLiveTvManagement" | "enableLiveTvAccess" | "enableAllChannels" | "enableRemoteControlOfOtherUsers" | "enableSharedDeviceControl" | "enablePublicSharing" | "enableAllFolders" | "loginAttemptsBeforeLockout" | "syncPlayAccess" | "enableSchedule" | "scheduleStart" | "scheduleEnd" | "blockedTags" | "blockedMediaFolders" | "blockedChannels" | "accessSchedules" | "blockUnratedItems" | "serverId" | "createdAt" | "updatedAt", ExtArgs["result"]["userPolicy"]>
  export type UserPolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | UserPolicy$serverArgs<ExtArgs>
  }
  export type UserPolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | UserPolicy$serverArgs<ExtArgs>
  }
  export type UserPolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | UserPolicy$serverArgs<ExtArgs>
  }

  export type $UserPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPolicy"
    objects: {
      server: Prisma.$EmbyServerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isTemplate: boolean
      isAdministrator: boolean
      isHidden: boolean
      isDisabled: boolean
      maxParentalRating: number
      enableUserPreferenceAccess: boolean
      enableAudioPlaybackTranscoding: boolean
      enableVideoPlaybackTranscoding: boolean
      enablePlaybackRemuxing: boolean
      forceRemoteSourceTranscoding: boolean
      enableSyncTranscoding: boolean
      enableMediaConversion: boolean
      enableContentDownloading: boolean
      enableContentDeletion: boolean
      enableCameraUpload: boolean
      enableRemoteAccess: boolean
      enableMediaPlayback: boolean
      remoteClientBitrateLimit: number
      maxActiveSessions: number
      enableAllDevices: boolean
      enableLiveTvManagement: boolean
      enableLiveTvAccess: boolean
      enableAllChannels: boolean
      enableRemoteControlOfOtherUsers: boolean
      enableSharedDeviceControl: boolean
      enablePublicSharing: boolean
      enableAllFolders: boolean
      loginAttemptsBeforeLockout: number
      syncPlayAccess: string
      enableSchedule: boolean
      scheduleStart: string | null
      scheduleEnd: string | null
      blockedTags: string | null
      blockedMediaFolders: string | null
      blockedChannels: string | null
      accessSchedules: string | null
      blockUnratedItems: string | null
      serverId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPolicy"]>
    composites: {}
  }

  type UserPolicyGetPayload<S extends boolean | null | undefined | UserPolicyDefaultArgs> = $Result.GetResult<Prisma.$UserPolicyPayload, S>

  type UserPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPolicyCountAggregateInputType | true
    }

  export interface UserPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPolicy'], meta: { name: 'UserPolicy' } }
    /**
     * Find zero or one UserPolicy that matches the filter.
     * @param {UserPolicyFindUniqueArgs} args - Arguments to find a UserPolicy
     * @example
     * // Get one UserPolicy
     * const userPolicy = await prisma.userPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPolicyFindUniqueArgs>(args: SelectSubset<T, UserPolicyFindUniqueArgs<ExtArgs>>): Prisma__UserPolicyClient<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPolicyFindUniqueOrThrowArgs} args - Arguments to find a UserPolicy
     * @example
     * // Get one UserPolicy
     * const userPolicy = await prisma.userPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPolicyClient<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPolicyFindFirstArgs} args - Arguments to find a UserPolicy
     * @example
     * // Get one UserPolicy
     * const userPolicy = await prisma.userPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPolicyFindFirstArgs>(args?: SelectSubset<T, UserPolicyFindFirstArgs<ExtArgs>>): Prisma__UserPolicyClient<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPolicyFindFirstOrThrowArgs} args - Arguments to find a UserPolicy
     * @example
     * // Get one UserPolicy
     * const userPolicy = await prisma.userPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPolicyClient<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPolicies
     * const userPolicies = await prisma.userPolicy.findMany()
     * 
     * // Get first 10 UserPolicies
     * const userPolicies = await prisma.userPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPolicyWithIdOnly = await prisma.userPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPolicyFindManyArgs>(args?: SelectSubset<T, UserPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPolicy.
     * @param {UserPolicyCreateArgs} args - Arguments to create a UserPolicy.
     * @example
     * // Create one UserPolicy
     * const UserPolicy = await prisma.userPolicy.create({
     *   data: {
     *     // ... data to create a UserPolicy
     *   }
     * })
     * 
     */
    create<T extends UserPolicyCreateArgs>(args: SelectSubset<T, UserPolicyCreateArgs<ExtArgs>>): Prisma__UserPolicyClient<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPolicies.
     * @param {UserPolicyCreateManyArgs} args - Arguments to create many UserPolicies.
     * @example
     * // Create many UserPolicies
     * const userPolicy = await prisma.userPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPolicyCreateManyArgs>(args?: SelectSubset<T, UserPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPolicies and returns the data saved in the database.
     * @param {UserPolicyCreateManyAndReturnArgs} args - Arguments to create many UserPolicies.
     * @example
     * // Create many UserPolicies
     * const userPolicy = await prisma.userPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPolicies and only return the `id`
     * const userPolicyWithIdOnly = await prisma.userPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPolicy.
     * @param {UserPolicyDeleteArgs} args - Arguments to delete one UserPolicy.
     * @example
     * // Delete one UserPolicy
     * const UserPolicy = await prisma.userPolicy.delete({
     *   where: {
     *     // ... filter to delete one UserPolicy
     *   }
     * })
     * 
     */
    delete<T extends UserPolicyDeleteArgs>(args: SelectSubset<T, UserPolicyDeleteArgs<ExtArgs>>): Prisma__UserPolicyClient<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPolicy.
     * @param {UserPolicyUpdateArgs} args - Arguments to update one UserPolicy.
     * @example
     * // Update one UserPolicy
     * const userPolicy = await prisma.userPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPolicyUpdateArgs>(args: SelectSubset<T, UserPolicyUpdateArgs<ExtArgs>>): Prisma__UserPolicyClient<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPolicies.
     * @param {UserPolicyDeleteManyArgs} args - Arguments to filter UserPolicies to delete.
     * @example
     * // Delete a few UserPolicies
     * const { count } = await prisma.userPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPolicyDeleteManyArgs>(args?: SelectSubset<T, UserPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPolicies
     * const userPolicy = await prisma.userPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPolicyUpdateManyArgs>(args: SelectSubset<T, UserPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPolicies and returns the data updated in the database.
     * @param {UserPolicyUpdateManyAndReturnArgs} args - Arguments to update many UserPolicies.
     * @example
     * // Update many UserPolicies
     * const userPolicy = await prisma.userPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPolicies and only return the `id`
     * const userPolicyWithIdOnly = await prisma.userPolicy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPolicy.
     * @param {UserPolicyUpsertArgs} args - Arguments to update or create a UserPolicy.
     * @example
     * // Update or create a UserPolicy
     * const userPolicy = await prisma.userPolicy.upsert({
     *   create: {
     *     // ... data to create a UserPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPolicy we want to update
     *   }
     * })
     */
    upsert<T extends UserPolicyUpsertArgs>(args: SelectSubset<T, UserPolicyUpsertArgs<ExtArgs>>): Prisma__UserPolicyClient<$Result.GetResult<Prisma.$UserPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPolicyCountArgs} args - Arguments to filter UserPolicies to count.
     * @example
     * // Count the number of UserPolicies
     * const count = await prisma.userPolicy.count({
     *   where: {
     *     // ... the filter for the UserPolicies we want to count
     *   }
     * })
    **/
    count<T extends UserPolicyCountArgs>(
      args?: Subset<T, UserPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPolicyAggregateArgs>(args: Subset<T, UserPolicyAggregateArgs>): Prisma.PrismaPromise<GetUserPolicyAggregateType<T>>

    /**
     * Group by UserPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPolicyGroupByArgs['orderBy'] }
        : { orderBy?: UserPolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPolicy model
   */
  readonly fields: UserPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends UserPolicy$serverArgs<ExtArgs> = {}>(args?: Subset<T, UserPolicy$serverArgs<ExtArgs>>): Prisma__EmbyServerClient<$Result.GetResult<Prisma.$EmbyServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPolicy model
   */
  interface UserPolicyFieldRefs {
    readonly id: FieldRef<"UserPolicy", 'String'>
    readonly name: FieldRef<"UserPolicy", 'String'>
    readonly description: FieldRef<"UserPolicy", 'String'>
    readonly isTemplate: FieldRef<"UserPolicy", 'Boolean'>
    readonly isAdministrator: FieldRef<"UserPolicy", 'Boolean'>
    readonly isHidden: FieldRef<"UserPolicy", 'Boolean'>
    readonly isDisabled: FieldRef<"UserPolicy", 'Boolean'>
    readonly maxParentalRating: FieldRef<"UserPolicy", 'Int'>
    readonly enableUserPreferenceAccess: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableAudioPlaybackTranscoding: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableVideoPlaybackTranscoding: FieldRef<"UserPolicy", 'Boolean'>
    readonly enablePlaybackRemuxing: FieldRef<"UserPolicy", 'Boolean'>
    readonly forceRemoteSourceTranscoding: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableSyncTranscoding: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableMediaConversion: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableContentDownloading: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableContentDeletion: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableCameraUpload: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableRemoteAccess: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableMediaPlayback: FieldRef<"UserPolicy", 'Boolean'>
    readonly remoteClientBitrateLimit: FieldRef<"UserPolicy", 'Int'>
    readonly maxActiveSessions: FieldRef<"UserPolicy", 'Int'>
    readonly enableAllDevices: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableLiveTvManagement: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableLiveTvAccess: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableAllChannels: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableRemoteControlOfOtherUsers: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableSharedDeviceControl: FieldRef<"UserPolicy", 'Boolean'>
    readonly enablePublicSharing: FieldRef<"UserPolicy", 'Boolean'>
    readonly enableAllFolders: FieldRef<"UserPolicy", 'Boolean'>
    readonly loginAttemptsBeforeLockout: FieldRef<"UserPolicy", 'Int'>
    readonly syncPlayAccess: FieldRef<"UserPolicy", 'String'>
    readonly enableSchedule: FieldRef<"UserPolicy", 'Boolean'>
    readonly scheduleStart: FieldRef<"UserPolicy", 'String'>
    readonly scheduleEnd: FieldRef<"UserPolicy", 'String'>
    readonly blockedTags: FieldRef<"UserPolicy", 'String'>
    readonly blockedMediaFolders: FieldRef<"UserPolicy", 'String'>
    readonly blockedChannels: FieldRef<"UserPolicy", 'String'>
    readonly accessSchedules: FieldRef<"UserPolicy", 'String'>
    readonly blockUnratedItems: FieldRef<"UserPolicy", 'String'>
    readonly serverId: FieldRef<"UserPolicy", 'String'>
    readonly createdAt: FieldRef<"UserPolicy", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPolicy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPolicy findUnique
   */
  export type UserPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * Filter, which UserPolicy to fetch.
     */
    where: UserPolicyWhereUniqueInput
  }

  /**
   * UserPolicy findUniqueOrThrow
   */
  export type UserPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * Filter, which UserPolicy to fetch.
     */
    where: UserPolicyWhereUniqueInput
  }

  /**
   * UserPolicy findFirst
   */
  export type UserPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * Filter, which UserPolicy to fetch.
     */
    where?: UserPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPolicies to fetch.
     */
    orderBy?: UserPolicyOrderByWithRelationInput | UserPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPolicies.
     */
    cursor?: UserPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPolicies.
     */
    distinct?: UserPolicyScalarFieldEnum | UserPolicyScalarFieldEnum[]
  }

  /**
   * UserPolicy findFirstOrThrow
   */
  export type UserPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * Filter, which UserPolicy to fetch.
     */
    where?: UserPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPolicies to fetch.
     */
    orderBy?: UserPolicyOrderByWithRelationInput | UserPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPolicies.
     */
    cursor?: UserPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPolicies.
     */
    distinct?: UserPolicyScalarFieldEnum | UserPolicyScalarFieldEnum[]
  }

  /**
   * UserPolicy findMany
   */
  export type UserPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * Filter, which UserPolicies to fetch.
     */
    where?: UserPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPolicies to fetch.
     */
    orderBy?: UserPolicyOrderByWithRelationInput | UserPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPolicies.
     */
    cursor?: UserPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPolicies.
     */
    skip?: number
    distinct?: UserPolicyScalarFieldEnum | UserPolicyScalarFieldEnum[]
  }

  /**
   * UserPolicy create
   */
  export type UserPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPolicy.
     */
    data: XOR<UserPolicyCreateInput, UserPolicyUncheckedCreateInput>
  }

  /**
   * UserPolicy createMany
   */
  export type UserPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPolicies.
     */
    data: UserPolicyCreateManyInput | UserPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPolicy createManyAndReturn
   */
  export type UserPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many UserPolicies.
     */
    data: UserPolicyCreateManyInput | UserPolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPolicy update
   */
  export type UserPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPolicy.
     */
    data: XOR<UserPolicyUpdateInput, UserPolicyUncheckedUpdateInput>
    /**
     * Choose, which UserPolicy to update.
     */
    where: UserPolicyWhereUniqueInput
  }

  /**
   * UserPolicy updateMany
   */
  export type UserPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPolicies.
     */
    data: XOR<UserPolicyUpdateManyMutationInput, UserPolicyUncheckedUpdateManyInput>
    /**
     * Filter which UserPolicies to update
     */
    where?: UserPolicyWhereInput
    /**
     * Limit how many UserPolicies to update.
     */
    limit?: number
  }

  /**
   * UserPolicy updateManyAndReturn
   */
  export type UserPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * The data used to update UserPolicies.
     */
    data: XOR<UserPolicyUpdateManyMutationInput, UserPolicyUncheckedUpdateManyInput>
    /**
     * Filter which UserPolicies to update
     */
    where?: UserPolicyWhereInput
    /**
     * Limit how many UserPolicies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPolicy upsert
   */
  export type UserPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPolicy to update in case it exists.
     */
    where: UserPolicyWhereUniqueInput
    /**
     * In case the UserPolicy found by the `where` argument doesn't exist, create a new UserPolicy with this data.
     */
    create: XOR<UserPolicyCreateInput, UserPolicyUncheckedCreateInput>
    /**
     * In case the UserPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPolicyUpdateInput, UserPolicyUncheckedUpdateInput>
  }

  /**
   * UserPolicy delete
   */
  export type UserPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
    /**
     * Filter which UserPolicy to delete.
     */
    where: UserPolicyWhereUniqueInput
  }

  /**
   * UserPolicy deleteMany
   */
  export type UserPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPolicies to delete
     */
    where?: UserPolicyWhereInput
    /**
     * Limit how many UserPolicies to delete.
     */
    limit?: number
  }

  /**
   * UserPolicy.server
   */
  export type UserPolicy$serverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbyServer
     */
    select?: EmbyServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbyServer
     */
    omit?: EmbyServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbyServerInclude<ExtArgs> | null
    where?: EmbyServerWhereInput
  }

  /**
   * UserPolicy without action
   */
  export type UserPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPolicy
     */
    select?: UserPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPolicy
     */
    omit?: UserPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPolicyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    hashedPassword: 'hashedPassword',
    role: 'role',
    defaultDomain: 'defaultDomain',
    resellerTierId: 'resellerTierId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive',
    suspensionUntil: 'suspensionUntil'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmbyUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    hashedPassword: 'hashedPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmbyUserScalarFieldEnum = (typeof EmbyUserScalarFieldEnum)[keyof typeof EmbyUserScalarFieldEnum]


  export const ResellerTierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    creditToDaysRate: 'creditToDaysRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResellerTierScalarFieldEnum = (typeof ResellerTierScalarFieldEnum)[keyof typeof ResellerTierScalarFieldEnum]


  export const CreditBalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance',
    updatedAt: 'updatedAt'
  };

  export type CreditBalanceScalarFieldEnum = (typeof CreditBalanceScalarFieldEnum)[keyof typeof CreditBalanceScalarFieldEnum]


  export const CreditLogScalarFieldEnum: {
    id: 'id',
    actorUserId: 'actorUserId',
    delta: 'delta',
    reason: 'reason',
    targetUserId: 'targetUserId',
    createdAt: 'createdAt'
  };

  export type CreditLogScalarFieldEnum = (typeof CreditLogScalarFieldEnum)[keyof typeof CreditLogScalarFieldEnum]


  export const EmbyServerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    baseUrl: 'baseUrl',
    apiKey: 'apiKey',
    ownerUserId: 'ownerUserId',
    maxUsers: 'maxUsers',
    referenceUserId: 'referenceUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmbyServerScalarFieldEnum = (typeof EmbyServerScalarFieldEnum)[keyof typeof EmbyServerScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    serverId: 'serverId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const PackageLibraryScalarFieldEnum: {
    id: 'id',
    packageId: 'packageId',
    libraryId: 'libraryId',
    libraryName: 'libraryName'
  };

  export type PackageLibraryScalarFieldEnum = (typeof PackageLibraryScalarFieldEnum)[keyof typeof PackageLibraryScalarFieldEnum]


  export const UserServerLinkScalarFieldEnum: {
    id: 'id',
    embyUserId: 'embyUserId',
    serverId: 'serverId',
    packageId: 'packageId',
    status: 'status',
    startAt: 'startAt',
    expireAt: 'expireAt',
    suspendedAt: 'suspendedAt',
    suspendedById: 'suspendedById',
    creditsAllocated: 'creditsAllocated',
    creditsUsed: 'creditsUsed',
    creditsRemaining: 'creditsRemaining',
    creditType: 'creditType',
    demoHours: 'demoHours',
    isDemo: 'isDemo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserServerLinkScalarFieldEnum = (typeof UserServerLinkScalarFieldEnum)[keyof typeof UserServerLinkScalarFieldEnum]


  export const EmbyAccountScalarFieldEnum: {
    id: 'id',
    embyUserId: 'embyUserId',
    serverId: 'serverId',
    embyUserIdInternal: 'embyUserIdInternal',
    embyUsername: 'embyUsername',
    userServerLinkId: 'userServerLinkId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmbyAccountScalarFieldEnum = (typeof EmbyAccountScalarFieldEnum)[keyof typeof EmbyAccountScalarFieldEnum]


  export const UserPolicyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isTemplate: 'isTemplate',
    isAdministrator: 'isAdministrator',
    isHidden: 'isHidden',
    isDisabled: 'isDisabled',
    maxParentalRating: 'maxParentalRating',
    enableUserPreferenceAccess: 'enableUserPreferenceAccess',
    enableAudioPlaybackTranscoding: 'enableAudioPlaybackTranscoding',
    enableVideoPlaybackTranscoding: 'enableVideoPlaybackTranscoding',
    enablePlaybackRemuxing: 'enablePlaybackRemuxing',
    forceRemoteSourceTranscoding: 'forceRemoteSourceTranscoding',
    enableSyncTranscoding: 'enableSyncTranscoding',
    enableMediaConversion: 'enableMediaConversion',
    enableContentDownloading: 'enableContentDownloading',
    enableContentDeletion: 'enableContentDeletion',
    enableCameraUpload: 'enableCameraUpload',
    enableRemoteAccess: 'enableRemoteAccess',
    enableMediaPlayback: 'enableMediaPlayback',
    remoteClientBitrateLimit: 'remoteClientBitrateLimit',
    maxActiveSessions: 'maxActiveSessions',
    enableAllDevices: 'enableAllDevices',
    enableLiveTvManagement: 'enableLiveTvManagement',
    enableLiveTvAccess: 'enableLiveTvAccess',
    enableAllChannels: 'enableAllChannels',
    enableRemoteControlOfOtherUsers: 'enableRemoteControlOfOtherUsers',
    enableSharedDeviceControl: 'enableSharedDeviceControl',
    enablePublicSharing: 'enablePublicSharing',
    enableAllFolders: 'enableAllFolders',
    loginAttemptsBeforeLockout: 'loginAttemptsBeforeLockout',
    syncPlayAccess: 'syncPlayAccess',
    enableSchedule: 'enableSchedule',
    scheduleStart: 'scheduleStart',
    scheduleEnd: 'scheduleEnd',
    blockedTags: 'blockedTags',
    blockedMediaFolders: 'blockedMediaFolders',
    blockedChannels: 'blockedChannels',
    accessSchedules: 'accessSchedules',
    blockUnratedItems: 'blockUnratedItems',
    serverId: 'serverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPolicyScalarFieldEnum = (typeof UserPolicyScalarFieldEnum)[keyof typeof UserPolicyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNameFilter<"User"> | $Enums.RoleName
    defaultDomain?: StringNullableFilter<"User"> | string | null
    resellerTierId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    suspensionUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    resellerTier?: XOR<ResellerTierNullableScalarRelationFilter, ResellerTierWhereInput> | null
    creditBalance?: XOR<CreditBalanceNullableScalarRelationFilter, CreditBalanceWhereInput> | null
    ownedServers?: EmbyServerListRelationFilter
    creditLogsAuthored?: CreditLogListRelationFilter
    creditLogsTargeted?: CreditLogListRelationFilter
    suspendedLinks?: UserServerLinkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    role?: SortOrder
    defaultDomain?: SortOrderInput | SortOrder
    resellerTierId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    suspensionUntil?: SortOrderInput | SortOrder
    resellerTier?: ResellerTierOrderByWithRelationInput
    creditBalance?: CreditBalanceOrderByWithRelationInput
    ownedServers?: EmbyServerOrderByRelationAggregateInput
    creditLogsAuthored?: CreditLogOrderByRelationAggregateInput
    creditLogsTargeted?: CreditLogOrderByRelationAggregateInput
    suspendedLinks?: UserServerLinkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNameFilter<"User"> | $Enums.RoleName
    defaultDomain?: StringNullableFilter<"User"> | string | null
    resellerTierId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    suspensionUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    resellerTier?: XOR<ResellerTierNullableScalarRelationFilter, ResellerTierWhereInput> | null
    creditBalance?: XOR<CreditBalanceNullableScalarRelationFilter, CreditBalanceWhereInput> | null
    ownedServers?: EmbyServerListRelationFilter
    creditLogsAuthored?: CreditLogListRelationFilter
    creditLogsTargeted?: CreditLogListRelationFilter
    suspendedLinks?: UserServerLinkListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    role?: SortOrder
    defaultDomain?: SortOrderInput | SortOrder
    resellerTierId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    suspensionUntil?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleNameWithAggregatesFilter<"User"> | $Enums.RoleName
    defaultDomain?: StringNullableWithAggregatesFilter<"User"> | string | null
    resellerTierId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    suspensionUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type EmbyUserWhereInput = {
    AND?: EmbyUserWhereInput | EmbyUserWhereInput[]
    OR?: EmbyUserWhereInput[]
    NOT?: EmbyUserWhereInput | EmbyUserWhereInput[]
    id?: StringFilter<"EmbyUser"> | string
    email?: StringFilter<"EmbyUser"> | string
    name?: StringNullableFilter<"EmbyUser"> | string | null
    hashedPassword?: StringNullableFilter<"EmbyUser"> | string | null
    createdAt?: DateTimeFilter<"EmbyUser"> | Date | string
    updatedAt?: DateTimeFilter<"EmbyUser"> | Date | string
    userServerLinks?: UserServerLinkListRelationFilter
    embyAccounts?: EmbyAccountListRelationFilter
  }

  export type EmbyUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userServerLinks?: UserServerLinkOrderByRelationAggregateInput
    embyAccounts?: EmbyAccountOrderByRelationAggregateInput
  }

  export type EmbyUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmbyUserWhereInput | EmbyUserWhereInput[]
    OR?: EmbyUserWhereInput[]
    NOT?: EmbyUserWhereInput | EmbyUserWhereInput[]
    name?: StringNullableFilter<"EmbyUser"> | string | null
    hashedPassword?: StringNullableFilter<"EmbyUser"> | string | null
    createdAt?: DateTimeFilter<"EmbyUser"> | Date | string
    updatedAt?: DateTimeFilter<"EmbyUser"> | Date | string
    userServerLinks?: UserServerLinkListRelationFilter
    embyAccounts?: EmbyAccountListRelationFilter
  }, "id" | "email">

  export type EmbyUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmbyUserCountOrderByAggregateInput
    _max?: EmbyUserMaxOrderByAggregateInput
    _min?: EmbyUserMinOrderByAggregateInput
  }

  export type EmbyUserScalarWhereWithAggregatesInput = {
    AND?: EmbyUserScalarWhereWithAggregatesInput | EmbyUserScalarWhereWithAggregatesInput[]
    OR?: EmbyUserScalarWhereWithAggregatesInput[]
    NOT?: EmbyUserScalarWhereWithAggregatesInput | EmbyUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmbyUser"> | string
    email?: StringWithAggregatesFilter<"EmbyUser"> | string
    name?: StringNullableWithAggregatesFilter<"EmbyUser"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"EmbyUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmbyUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmbyUser"> | Date | string
  }

  export type ResellerTierWhereInput = {
    AND?: ResellerTierWhereInput | ResellerTierWhereInput[]
    OR?: ResellerTierWhereInput[]
    NOT?: ResellerTierWhereInput | ResellerTierWhereInput[]
    id?: StringFilter<"ResellerTier"> | string
    name?: StringFilter<"ResellerTier"> | string
    description?: StringNullableFilter<"ResellerTier"> | string | null
    creditToDaysRate?: IntFilter<"ResellerTier"> | number
    createdAt?: DateTimeFilter<"ResellerTier"> | Date | string
    updatedAt?: DateTimeFilter<"ResellerTier"> | Date | string
    users?: UserListRelationFilter
  }

  export type ResellerTierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creditToDaysRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type ResellerTierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ResellerTierWhereInput | ResellerTierWhereInput[]
    OR?: ResellerTierWhereInput[]
    NOT?: ResellerTierWhereInput | ResellerTierWhereInput[]
    description?: StringNullableFilter<"ResellerTier"> | string | null
    creditToDaysRate?: IntFilter<"ResellerTier"> | number
    createdAt?: DateTimeFilter<"ResellerTier"> | Date | string
    updatedAt?: DateTimeFilter<"ResellerTier"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type ResellerTierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creditToDaysRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResellerTierCountOrderByAggregateInput
    _avg?: ResellerTierAvgOrderByAggregateInput
    _max?: ResellerTierMaxOrderByAggregateInput
    _min?: ResellerTierMinOrderByAggregateInput
    _sum?: ResellerTierSumOrderByAggregateInput
  }

  export type ResellerTierScalarWhereWithAggregatesInput = {
    AND?: ResellerTierScalarWhereWithAggregatesInput | ResellerTierScalarWhereWithAggregatesInput[]
    OR?: ResellerTierScalarWhereWithAggregatesInput[]
    NOT?: ResellerTierScalarWhereWithAggregatesInput | ResellerTierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResellerTier"> | string
    name?: StringWithAggregatesFilter<"ResellerTier"> | string
    description?: StringNullableWithAggregatesFilter<"ResellerTier"> | string | null
    creditToDaysRate?: IntWithAggregatesFilter<"ResellerTier"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ResellerTier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResellerTier"> | Date | string
  }

  export type CreditBalanceWhereInput = {
    AND?: CreditBalanceWhereInput | CreditBalanceWhereInput[]
    OR?: CreditBalanceWhereInput[]
    NOT?: CreditBalanceWhereInput | CreditBalanceWhereInput[]
    id?: StringFilter<"CreditBalance"> | string
    userId?: StringFilter<"CreditBalance"> | string
    balance?: IntFilter<"CreditBalance"> | number
    updatedAt?: DateTimeFilter<"CreditBalance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CreditBalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CreditBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CreditBalanceWhereInput | CreditBalanceWhereInput[]
    OR?: CreditBalanceWhereInput[]
    NOT?: CreditBalanceWhereInput | CreditBalanceWhereInput[]
    balance?: IntFilter<"CreditBalance"> | number
    updatedAt?: DateTimeFilter<"CreditBalance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CreditBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditBalanceCountOrderByAggregateInput
    _avg?: CreditBalanceAvgOrderByAggregateInput
    _max?: CreditBalanceMaxOrderByAggregateInput
    _min?: CreditBalanceMinOrderByAggregateInput
    _sum?: CreditBalanceSumOrderByAggregateInput
  }

  export type CreditBalanceScalarWhereWithAggregatesInput = {
    AND?: CreditBalanceScalarWhereWithAggregatesInput | CreditBalanceScalarWhereWithAggregatesInput[]
    OR?: CreditBalanceScalarWhereWithAggregatesInput[]
    NOT?: CreditBalanceScalarWhereWithAggregatesInput | CreditBalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditBalance"> | string
    userId?: StringWithAggregatesFilter<"CreditBalance"> | string
    balance?: IntWithAggregatesFilter<"CreditBalance"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"CreditBalance"> | Date | string
  }

  export type CreditLogWhereInput = {
    AND?: CreditLogWhereInput | CreditLogWhereInput[]
    OR?: CreditLogWhereInput[]
    NOT?: CreditLogWhereInput | CreditLogWhereInput[]
    id?: StringFilter<"CreditLog"> | string
    actorUserId?: StringFilter<"CreditLog"> | string
    delta?: IntFilter<"CreditLog"> | number
    reason?: StringNullableFilter<"CreditLog"> | string | null
    targetUserId?: StringNullableFilter<"CreditLog"> | string | null
    createdAt?: DateTimeFilter<"CreditLog"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CreditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    delta?: SortOrder
    reason?: SortOrderInput | SortOrder
    targetUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
  }

  export type CreditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditLogWhereInput | CreditLogWhereInput[]
    OR?: CreditLogWhereInput[]
    NOT?: CreditLogWhereInput | CreditLogWhereInput[]
    actorUserId?: StringFilter<"CreditLog"> | string
    delta?: IntFilter<"CreditLog"> | number
    reason?: StringNullableFilter<"CreditLog"> | string | null
    targetUserId?: StringNullableFilter<"CreditLog"> | string | null
    createdAt?: DateTimeFilter<"CreditLog"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CreditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    delta?: SortOrder
    reason?: SortOrderInput | SortOrder
    targetUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditLogCountOrderByAggregateInput
    _avg?: CreditLogAvgOrderByAggregateInput
    _max?: CreditLogMaxOrderByAggregateInput
    _min?: CreditLogMinOrderByAggregateInput
    _sum?: CreditLogSumOrderByAggregateInput
  }

  export type CreditLogScalarWhereWithAggregatesInput = {
    AND?: CreditLogScalarWhereWithAggregatesInput | CreditLogScalarWhereWithAggregatesInput[]
    OR?: CreditLogScalarWhereWithAggregatesInput[]
    NOT?: CreditLogScalarWhereWithAggregatesInput | CreditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditLog"> | string
    actorUserId?: StringWithAggregatesFilter<"CreditLog"> | string
    delta?: IntWithAggregatesFilter<"CreditLog"> | number
    reason?: StringNullableWithAggregatesFilter<"CreditLog"> | string | null
    targetUserId?: StringNullableWithAggregatesFilter<"CreditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditLog"> | Date | string
  }

  export type EmbyServerWhereInput = {
    AND?: EmbyServerWhereInput | EmbyServerWhereInput[]
    OR?: EmbyServerWhereInput[]
    NOT?: EmbyServerWhereInput | EmbyServerWhereInput[]
    id?: StringFilter<"EmbyServer"> | string
    name?: StringFilter<"EmbyServer"> | string
    baseUrl?: StringFilter<"EmbyServer"> | string
    apiKey?: StringFilter<"EmbyServer"> | string
    ownerUserId?: StringNullableFilter<"EmbyServer"> | string | null
    maxUsers?: IntFilter<"EmbyServer"> | number
    referenceUserId?: StringNullableFilter<"EmbyServer"> | string | null
    createdAt?: DateTimeFilter<"EmbyServer"> | Date | string
    updatedAt?: DateTimeFilter<"EmbyServer"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    packages?: PackageListRelationFilter
    userLinks?: UserServerLinkListRelationFilter
    embyAccounts?: EmbyAccountListRelationFilter
    userPolicies?: UserPolicyListRelationFilter
  }

  export type EmbyServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    maxUsers?: SortOrder
    referenceUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    packages?: PackageOrderByRelationAggregateInput
    userLinks?: UserServerLinkOrderByRelationAggregateInput
    embyAccounts?: EmbyAccountOrderByRelationAggregateInput
    userPolicies?: UserPolicyOrderByRelationAggregateInput
  }

  export type EmbyServerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmbyServerWhereInput | EmbyServerWhereInput[]
    OR?: EmbyServerWhereInput[]
    NOT?: EmbyServerWhereInput | EmbyServerWhereInput[]
    name?: StringFilter<"EmbyServer"> | string
    baseUrl?: StringFilter<"EmbyServer"> | string
    apiKey?: StringFilter<"EmbyServer"> | string
    ownerUserId?: StringNullableFilter<"EmbyServer"> | string | null
    maxUsers?: IntFilter<"EmbyServer"> | number
    referenceUserId?: StringNullableFilter<"EmbyServer"> | string | null
    createdAt?: DateTimeFilter<"EmbyServer"> | Date | string
    updatedAt?: DateTimeFilter<"EmbyServer"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    packages?: PackageListRelationFilter
    userLinks?: UserServerLinkListRelationFilter
    embyAccounts?: EmbyAccountListRelationFilter
    userPolicies?: UserPolicyListRelationFilter
  }, "id">

  export type EmbyServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    maxUsers?: SortOrder
    referenceUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmbyServerCountOrderByAggregateInput
    _avg?: EmbyServerAvgOrderByAggregateInput
    _max?: EmbyServerMaxOrderByAggregateInput
    _min?: EmbyServerMinOrderByAggregateInput
    _sum?: EmbyServerSumOrderByAggregateInput
  }

  export type EmbyServerScalarWhereWithAggregatesInput = {
    AND?: EmbyServerScalarWhereWithAggregatesInput | EmbyServerScalarWhereWithAggregatesInput[]
    OR?: EmbyServerScalarWhereWithAggregatesInput[]
    NOT?: EmbyServerScalarWhereWithAggregatesInput | EmbyServerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmbyServer"> | string
    name?: StringWithAggregatesFilter<"EmbyServer"> | string
    baseUrl?: StringWithAggregatesFilter<"EmbyServer"> | string
    apiKey?: StringWithAggregatesFilter<"EmbyServer"> | string
    ownerUserId?: StringNullableWithAggregatesFilter<"EmbyServer"> | string | null
    maxUsers?: IntWithAggregatesFilter<"EmbyServer"> | number
    referenceUserId?: StringNullableWithAggregatesFilter<"EmbyServer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmbyServer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmbyServer"> | Date | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    serverId?: StringFilter<"Package"> | string
    name?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    server?: XOR<EmbyServerScalarRelationFilter, EmbyServerWhereInput>
    libraries?: PackageLibraryListRelationFilter
    userLinks?: UserServerLinkListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    serverId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    server?: EmbyServerOrderByWithRelationInput
    libraries?: PackageLibraryOrderByRelationAggregateInput
    userLinks?: UserServerLinkOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    serverId?: StringFilter<"Package"> | string
    name?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    server?: XOR<EmbyServerScalarRelationFilter, EmbyServerWhereInput>
    libraries?: PackageLibraryListRelationFilter
    userLinks?: UserServerLinkListRelationFilter
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    serverId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    serverId?: StringWithAggregatesFilter<"Package"> | string
    name?: StringWithAggregatesFilter<"Package"> | string
    description?: StringNullableWithAggregatesFilter<"Package"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
  }

  export type PackageLibraryWhereInput = {
    AND?: PackageLibraryWhereInput | PackageLibraryWhereInput[]
    OR?: PackageLibraryWhereInput[]
    NOT?: PackageLibraryWhereInput | PackageLibraryWhereInput[]
    id?: StringFilter<"PackageLibrary"> | string
    packageId?: StringFilter<"PackageLibrary"> | string
    libraryId?: StringNullableFilter<"PackageLibrary"> | string | null
    libraryName?: StringNullableFilter<"PackageLibrary"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type PackageLibraryOrderByWithRelationInput = {
    id?: SortOrder
    packageId?: SortOrder
    libraryId?: SortOrderInput | SortOrder
    libraryName?: SortOrderInput | SortOrder
    package?: PackageOrderByWithRelationInput
  }

  export type PackageLibraryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageLibraryWhereInput | PackageLibraryWhereInput[]
    OR?: PackageLibraryWhereInput[]
    NOT?: PackageLibraryWhereInput | PackageLibraryWhereInput[]
    packageId?: StringFilter<"PackageLibrary"> | string
    libraryId?: StringNullableFilter<"PackageLibrary"> | string | null
    libraryName?: StringNullableFilter<"PackageLibrary"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id">

  export type PackageLibraryOrderByWithAggregationInput = {
    id?: SortOrder
    packageId?: SortOrder
    libraryId?: SortOrderInput | SortOrder
    libraryName?: SortOrderInput | SortOrder
    _count?: PackageLibraryCountOrderByAggregateInput
    _max?: PackageLibraryMaxOrderByAggregateInput
    _min?: PackageLibraryMinOrderByAggregateInput
  }

  export type PackageLibraryScalarWhereWithAggregatesInput = {
    AND?: PackageLibraryScalarWhereWithAggregatesInput | PackageLibraryScalarWhereWithAggregatesInput[]
    OR?: PackageLibraryScalarWhereWithAggregatesInput[]
    NOT?: PackageLibraryScalarWhereWithAggregatesInput | PackageLibraryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackageLibrary"> | string
    packageId?: StringWithAggregatesFilter<"PackageLibrary"> | string
    libraryId?: StringNullableWithAggregatesFilter<"PackageLibrary"> | string | null
    libraryName?: StringNullableWithAggregatesFilter<"PackageLibrary"> | string | null
  }

  export type UserServerLinkWhereInput = {
    AND?: UserServerLinkWhereInput | UserServerLinkWhereInput[]
    OR?: UserServerLinkWhereInput[]
    NOT?: UserServerLinkWhereInput | UserServerLinkWhereInput[]
    id?: StringFilter<"UserServerLink"> | string
    embyUserId?: StringFilter<"UserServerLink"> | string
    serverId?: StringFilter<"UserServerLink"> | string
    packageId?: StringNullableFilter<"UserServerLink"> | string | null
    status?: EnumAccountStatusFilter<"UserServerLink"> | $Enums.AccountStatus
    startAt?: DateTimeFilter<"UserServerLink"> | Date | string
    expireAt?: DateTimeNullableFilter<"UserServerLink"> | Date | string | null
    suspendedAt?: DateTimeNullableFilter<"UserServerLink"> | Date | string | null
    suspendedById?: StringNullableFilter<"UserServerLink"> | string | null
    creditsAllocated?: IntFilter<"UserServerLink"> | number
    creditsUsed?: IntFilter<"UserServerLink"> | number
    creditsRemaining?: IntFilter<"UserServerLink"> | number
    creditType?: StringFilter<"UserServerLink"> | string
    demoHours?: IntNullableFilter<"UserServerLink"> | number | null
    isDemo?: BoolFilter<"UserServerLink"> | boolean
    createdAt?: DateTimeFilter<"UserServerLink"> | Date | string
    updatedAt?: DateTimeFilter<"UserServerLink"> | Date | string
    embyUser?: XOR<EmbyUserScalarRelationFilter, EmbyUserWhereInput>
    server?: XOR<EmbyServerScalarRelationFilter, EmbyServerWhereInput>
    package?: XOR<PackageNullableScalarRelationFilter, PackageWhereInput> | null
    suspendedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    embyAccount?: XOR<EmbyAccountNullableScalarRelationFilter, EmbyAccountWhereInput> | null
  }

  export type UserServerLinkOrderByWithRelationInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    packageId?: SortOrderInput | SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expireAt?: SortOrderInput | SortOrder
    suspendedAt?: SortOrderInput | SortOrder
    suspendedById?: SortOrderInput | SortOrder
    creditsAllocated?: SortOrder
    creditsUsed?: SortOrder
    creditsRemaining?: SortOrder
    creditType?: SortOrder
    demoHours?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embyUser?: EmbyUserOrderByWithRelationInput
    server?: EmbyServerOrderByWithRelationInput
    package?: PackageOrderByWithRelationInput
    suspendedBy?: UserOrderByWithRelationInput
    embyAccount?: EmbyAccountOrderByWithRelationInput
  }

  export type UserServerLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    embyUserId_serverId?: UserServerLinkEmbyUserIdServerIdCompoundUniqueInput
    AND?: UserServerLinkWhereInput | UserServerLinkWhereInput[]
    OR?: UserServerLinkWhereInput[]
    NOT?: UserServerLinkWhereInput | UserServerLinkWhereInput[]
    embyUserId?: StringFilter<"UserServerLink"> | string
    serverId?: StringFilter<"UserServerLink"> | string
    packageId?: StringNullableFilter<"UserServerLink"> | string | null
    status?: EnumAccountStatusFilter<"UserServerLink"> | $Enums.AccountStatus
    startAt?: DateTimeFilter<"UserServerLink"> | Date | string
    expireAt?: DateTimeNullableFilter<"UserServerLink"> | Date | string | null
    suspendedAt?: DateTimeNullableFilter<"UserServerLink"> | Date | string | null
    suspendedById?: StringNullableFilter<"UserServerLink"> | string | null
    creditsAllocated?: IntFilter<"UserServerLink"> | number
    creditsUsed?: IntFilter<"UserServerLink"> | number
    creditsRemaining?: IntFilter<"UserServerLink"> | number
    creditType?: StringFilter<"UserServerLink"> | string
    demoHours?: IntNullableFilter<"UserServerLink"> | number | null
    isDemo?: BoolFilter<"UserServerLink"> | boolean
    createdAt?: DateTimeFilter<"UserServerLink"> | Date | string
    updatedAt?: DateTimeFilter<"UserServerLink"> | Date | string
    embyUser?: XOR<EmbyUserScalarRelationFilter, EmbyUserWhereInput>
    server?: XOR<EmbyServerScalarRelationFilter, EmbyServerWhereInput>
    package?: XOR<PackageNullableScalarRelationFilter, PackageWhereInput> | null
    suspendedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    embyAccount?: XOR<EmbyAccountNullableScalarRelationFilter, EmbyAccountWhereInput> | null
  }, "id" | "embyUserId_serverId">

  export type UserServerLinkOrderByWithAggregationInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    packageId?: SortOrderInput | SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expireAt?: SortOrderInput | SortOrder
    suspendedAt?: SortOrderInput | SortOrder
    suspendedById?: SortOrderInput | SortOrder
    creditsAllocated?: SortOrder
    creditsUsed?: SortOrder
    creditsRemaining?: SortOrder
    creditType?: SortOrder
    demoHours?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserServerLinkCountOrderByAggregateInput
    _avg?: UserServerLinkAvgOrderByAggregateInput
    _max?: UserServerLinkMaxOrderByAggregateInput
    _min?: UserServerLinkMinOrderByAggregateInput
    _sum?: UserServerLinkSumOrderByAggregateInput
  }

  export type UserServerLinkScalarWhereWithAggregatesInput = {
    AND?: UserServerLinkScalarWhereWithAggregatesInput | UserServerLinkScalarWhereWithAggregatesInput[]
    OR?: UserServerLinkScalarWhereWithAggregatesInput[]
    NOT?: UserServerLinkScalarWhereWithAggregatesInput | UserServerLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserServerLink"> | string
    embyUserId?: StringWithAggregatesFilter<"UserServerLink"> | string
    serverId?: StringWithAggregatesFilter<"UserServerLink"> | string
    packageId?: StringNullableWithAggregatesFilter<"UserServerLink"> | string | null
    status?: EnumAccountStatusWithAggregatesFilter<"UserServerLink"> | $Enums.AccountStatus
    startAt?: DateTimeWithAggregatesFilter<"UserServerLink"> | Date | string
    expireAt?: DateTimeNullableWithAggregatesFilter<"UserServerLink"> | Date | string | null
    suspendedAt?: DateTimeNullableWithAggregatesFilter<"UserServerLink"> | Date | string | null
    suspendedById?: StringNullableWithAggregatesFilter<"UserServerLink"> | string | null
    creditsAllocated?: IntWithAggregatesFilter<"UserServerLink"> | number
    creditsUsed?: IntWithAggregatesFilter<"UserServerLink"> | number
    creditsRemaining?: IntWithAggregatesFilter<"UserServerLink"> | number
    creditType?: StringWithAggregatesFilter<"UserServerLink"> | string
    demoHours?: IntNullableWithAggregatesFilter<"UserServerLink"> | number | null
    isDemo?: BoolWithAggregatesFilter<"UserServerLink"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserServerLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserServerLink"> | Date | string
  }

  export type EmbyAccountWhereInput = {
    AND?: EmbyAccountWhereInput | EmbyAccountWhereInput[]
    OR?: EmbyAccountWhereInput[]
    NOT?: EmbyAccountWhereInput | EmbyAccountWhereInput[]
    id?: StringFilter<"EmbyAccount"> | string
    embyUserId?: StringFilter<"EmbyAccount"> | string
    serverId?: StringFilter<"EmbyAccount"> | string
    embyUserIdInternal?: StringFilter<"EmbyAccount"> | string
    embyUsername?: StringFilter<"EmbyAccount"> | string
    userServerLinkId?: StringNullableFilter<"EmbyAccount"> | string | null
    createdAt?: DateTimeFilter<"EmbyAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EmbyAccount"> | Date | string
    embyUser?: XOR<EmbyUserScalarRelationFilter, EmbyUserWhereInput>
    server?: XOR<EmbyServerScalarRelationFilter, EmbyServerWhereInput>
    userServerLink?: XOR<UserServerLinkNullableScalarRelationFilter, UserServerLinkWhereInput> | null
  }

  export type EmbyAccountOrderByWithRelationInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    embyUserIdInternal?: SortOrder
    embyUsername?: SortOrder
    userServerLinkId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embyUser?: EmbyUserOrderByWithRelationInput
    server?: EmbyServerOrderByWithRelationInput
    userServerLink?: UserServerLinkOrderByWithRelationInput
  }

  export type EmbyAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userServerLinkId?: string
    embyUserId_serverId?: EmbyAccountEmbyUserIdServerIdCompoundUniqueInput
    AND?: EmbyAccountWhereInput | EmbyAccountWhereInput[]
    OR?: EmbyAccountWhereInput[]
    NOT?: EmbyAccountWhereInput | EmbyAccountWhereInput[]
    embyUserId?: StringFilter<"EmbyAccount"> | string
    serverId?: StringFilter<"EmbyAccount"> | string
    embyUserIdInternal?: StringFilter<"EmbyAccount"> | string
    embyUsername?: StringFilter<"EmbyAccount"> | string
    createdAt?: DateTimeFilter<"EmbyAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EmbyAccount"> | Date | string
    embyUser?: XOR<EmbyUserScalarRelationFilter, EmbyUserWhereInput>
    server?: XOR<EmbyServerScalarRelationFilter, EmbyServerWhereInput>
    userServerLink?: XOR<UserServerLinkNullableScalarRelationFilter, UserServerLinkWhereInput> | null
  }, "id" | "userServerLinkId" | "embyUserId_serverId">

  export type EmbyAccountOrderByWithAggregationInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    embyUserIdInternal?: SortOrder
    embyUsername?: SortOrder
    userServerLinkId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmbyAccountCountOrderByAggregateInput
    _max?: EmbyAccountMaxOrderByAggregateInput
    _min?: EmbyAccountMinOrderByAggregateInput
  }

  export type EmbyAccountScalarWhereWithAggregatesInput = {
    AND?: EmbyAccountScalarWhereWithAggregatesInput | EmbyAccountScalarWhereWithAggregatesInput[]
    OR?: EmbyAccountScalarWhereWithAggregatesInput[]
    NOT?: EmbyAccountScalarWhereWithAggregatesInput | EmbyAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmbyAccount"> | string
    embyUserId?: StringWithAggregatesFilter<"EmbyAccount"> | string
    serverId?: StringWithAggregatesFilter<"EmbyAccount"> | string
    embyUserIdInternal?: StringWithAggregatesFilter<"EmbyAccount"> | string
    embyUsername?: StringWithAggregatesFilter<"EmbyAccount"> | string
    userServerLinkId?: StringNullableWithAggregatesFilter<"EmbyAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmbyAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmbyAccount"> | Date | string
  }

  export type UserPolicyWhereInput = {
    AND?: UserPolicyWhereInput | UserPolicyWhereInput[]
    OR?: UserPolicyWhereInput[]
    NOT?: UserPolicyWhereInput | UserPolicyWhereInput[]
    id?: StringFilter<"UserPolicy"> | string
    name?: StringFilter<"UserPolicy"> | string
    description?: StringNullableFilter<"UserPolicy"> | string | null
    isTemplate?: BoolFilter<"UserPolicy"> | boolean
    isAdministrator?: BoolFilter<"UserPolicy"> | boolean
    isHidden?: BoolFilter<"UserPolicy"> | boolean
    isDisabled?: BoolFilter<"UserPolicy"> | boolean
    maxParentalRating?: IntFilter<"UserPolicy"> | number
    enableUserPreferenceAccess?: BoolFilter<"UserPolicy"> | boolean
    enableAudioPlaybackTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableVideoPlaybackTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enablePlaybackRemuxing?: BoolFilter<"UserPolicy"> | boolean
    forceRemoteSourceTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableSyncTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableMediaConversion?: BoolFilter<"UserPolicy"> | boolean
    enableContentDownloading?: BoolFilter<"UserPolicy"> | boolean
    enableContentDeletion?: BoolFilter<"UserPolicy"> | boolean
    enableCameraUpload?: BoolFilter<"UserPolicy"> | boolean
    enableRemoteAccess?: BoolFilter<"UserPolicy"> | boolean
    enableMediaPlayback?: BoolFilter<"UserPolicy"> | boolean
    remoteClientBitrateLimit?: IntFilter<"UserPolicy"> | number
    maxActiveSessions?: IntFilter<"UserPolicy"> | number
    enableAllDevices?: BoolFilter<"UserPolicy"> | boolean
    enableLiveTvManagement?: BoolFilter<"UserPolicy"> | boolean
    enableLiveTvAccess?: BoolFilter<"UserPolicy"> | boolean
    enableAllChannels?: BoolFilter<"UserPolicy"> | boolean
    enableRemoteControlOfOtherUsers?: BoolFilter<"UserPolicy"> | boolean
    enableSharedDeviceControl?: BoolFilter<"UserPolicy"> | boolean
    enablePublicSharing?: BoolFilter<"UserPolicy"> | boolean
    enableAllFolders?: BoolFilter<"UserPolicy"> | boolean
    loginAttemptsBeforeLockout?: IntFilter<"UserPolicy"> | number
    syncPlayAccess?: StringFilter<"UserPolicy"> | string
    enableSchedule?: BoolFilter<"UserPolicy"> | boolean
    scheduleStart?: StringNullableFilter<"UserPolicy"> | string | null
    scheduleEnd?: StringNullableFilter<"UserPolicy"> | string | null
    blockedTags?: StringNullableFilter<"UserPolicy"> | string | null
    blockedMediaFolders?: StringNullableFilter<"UserPolicy"> | string | null
    blockedChannels?: StringNullableFilter<"UserPolicy"> | string | null
    accessSchedules?: StringNullableFilter<"UserPolicy"> | string | null
    blockUnratedItems?: StringNullableFilter<"UserPolicy"> | string | null
    serverId?: StringNullableFilter<"UserPolicy"> | string | null
    createdAt?: DateTimeFilter<"UserPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"UserPolicy"> | Date | string
    server?: XOR<EmbyServerNullableScalarRelationFilter, EmbyServerWhereInput> | null
  }

  export type UserPolicyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isTemplate?: SortOrder
    isAdministrator?: SortOrder
    isHidden?: SortOrder
    isDisabled?: SortOrder
    maxParentalRating?: SortOrder
    enableUserPreferenceAccess?: SortOrder
    enableAudioPlaybackTranscoding?: SortOrder
    enableVideoPlaybackTranscoding?: SortOrder
    enablePlaybackRemuxing?: SortOrder
    forceRemoteSourceTranscoding?: SortOrder
    enableSyncTranscoding?: SortOrder
    enableMediaConversion?: SortOrder
    enableContentDownloading?: SortOrder
    enableContentDeletion?: SortOrder
    enableCameraUpload?: SortOrder
    enableRemoteAccess?: SortOrder
    enableMediaPlayback?: SortOrder
    remoteClientBitrateLimit?: SortOrder
    maxActiveSessions?: SortOrder
    enableAllDevices?: SortOrder
    enableLiveTvManagement?: SortOrder
    enableLiveTvAccess?: SortOrder
    enableAllChannels?: SortOrder
    enableRemoteControlOfOtherUsers?: SortOrder
    enableSharedDeviceControl?: SortOrder
    enablePublicSharing?: SortOrder
    enableAllFolders?: SortOrder
    loginAttemptsBeforeLockout?: SortOrder
    syncPlayAccess?: SortOrder
    enableSchedule?: SortOrder
    scheduleStart?: SortOrderInput | SortOrder
    scheduleEnd?: SortOrderInput | SortOrder
    blockedTags?: SortOrderInput | SortOrder
    blockedMediaFolders?: SortOrderInput | SortOrder
    blockedChannels?: SortOrderInput | SortOrder
    accessSchedules?: SortOrderInput | SortOrder
    blockUnratedItems?: SortOrderInput | SortOrder
    serverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    server?: EmbyServerOrderByWithRelationInput
  }

  export type UserPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserPolicyWhereInput | UserPolicyWhereInput[]
    OR?: UserPolicyWhereInput[]
    NOT?: UserPolicyWhereInput | UserPolicyWhereInput[]
    description?: StringNullableFilter<"UserPolicy"> | string | null
    isTemplate?: BoolFilter<"UserPolicy"> | boolean
    isAdministrator?: BoolFilter<"UserPolicy"> | boolean
    isHidden?: BoolFilter<"UserPolicy"> | boolean
    isDisabled?: BoolFilter<"UserPolicy"> | boolean
    maxParentalRating?: IntFilter<"UserPolicy"> | number
    enableUserPreferenceAccess?: BoolFilter<"UserPolicy"> | boolean
    enableAudioPlaybackTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableVideoPlaybackTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enablePlaybackRemuxing?: BoolFilter<"UserPolicy"> | boolean
    forceRemoteSourceTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableSyncTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableMediaConversion?: BoolFilter<"UserPolicy"> | boolean
    enableContentDownloading?: BoolFilter<"UserPolicy"> | boolean
    enableContentDeletion?: BoolFilter<"UserPolicy"> | boolean
    enableCameraUpload?: BoolFilter<"UserPolicy"> | boolean
    enableRemoteAccess?: BoolFilter<"UserPolicy"> | boolean
    enableMediaPlayback?: BoolFilter<"UserPolicy"> | boolean
    remoteClientBitrateLimit?: IntFilter<"UserPolicy"> | number
    maxActiveSessions?: IntFilter<"UserPolicy"> | number
    enableAllDevices?: BoolFilter<"UserPolicy"> | boolean
    enableLiveTvManagement?: BoolFilter<"UserPolicy"> | boolean
    enableLiveTvAccess?: BoolFilter<"UserPolicy"> | boolean
    enableAllChannels?: BoolFilter<"UserPolicy"> | boolean
    enableRemoteControlOfOtherUsers?: BoolFilter<"UserPolicy"> | boolean
    enableSharedDeviceControl?: BoolFilter<"UserPolicy"> | boolean
    enablePublicSharing?: BoolFilter<"UserPolicy"> | boolean
    enableAllFolders?: BoolFilter<"UserPolicy"> | boolean
    loginAttemptsBeforeLockout?: IntFilter<"UserPolicy"> | number
    syncPlayAccess?: StringFilter<"UserPolicy"> | string
    enableSchedule?: BoolFilter<"UserPolicy"> | boolean
    scheduleStart?: StringNullableFilter<"UserPolicy"> | string | null
    scheduleEnd?: StringNullableFilter<"UserPolicy"> | string | null
    blockedTags?: StringNullableFilter<"UserPolicy"> | string | null
    blockedMediaFolders?: StringNullableFilter<"UserPolicy"> | string | null
    blockedChannels?: StringNullableFilter<"UserPolicy"> | string | null
    accessSchedules?: StringNullableFilter<"UserPolicy"> | string | null
    blockUnratedItems?: StringNullableFilter<"UserPolicy"> | string | null
    serverId?: StringNullableFilter<"UserPolicy"> | string | null
    createdAt?: DateTimeFilter<"UserPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"UserPolicy"> | Date | string
    server?: XOR<EmbyServerNullableScalarRelationFilter, EmbyServerWhereInput> | null
  }, "id" | "name">

  export type UserPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isTemplate?: SortOrder
    isAdministrator?: SortOrder
    isHidden?: SortOrder
    isDisabled?: SortOrder
    maxParentalRating?: SortOrder
    enableUserPreferenceAccess?: SortOrder
    enableAudioPlaybackTranscoding?: SortOrder
    enableVideoPlaybackTranscoding?: SortOrder
    enablePlaybackRemuxing?: SortOrder
    forceRemoteSourceTranscoding?: SortOrder
    enableSyncTranscoding?: SortOrder
    enableMediaConversion?: SortOrder
    enableContentDownloading?: SortOrder
    enableContentDeletion?: SortOrder
    enableCameraUpload?: SortOrder
    enableRemoteAccess?: SortOrder
    enableMediaPlayback?: SortOrder
    remoteClientBitrateLimit?: SortOrder
    maxActiveSessions?: SortOrder
    enableAllDevices?: SortOrder
    enableLiveTvManagement?: SortOrder
    enableLiveTvAccess?: SortOrder
    enableAllChannels?: SortOrder
    enableRemoteControlOfOtherUsers?: SortOrder
    enableSharedDeviceControl?: SortOrder
    enablePublicSharing?: SortOrder
    enableAllFolders?: SortOrder
    loginAttemptsBeforeLockout?: SortOrder
    syncPlayAccess?: SortOrder
    enableSchedule?: SortOrder
    scheduleStart?: SortOrderInput | SortOrder
    scheduleEnd?: SortOrderInput | SortOrder
    blockedTags?: SortOrderInput | SortOrder
    blockedMediaFolders?: SortOrderInput | SortOrder
    blockedChannels?: SortOrderInput | SortOrder
    accessSchedules?: SortOrderInput | SortOrder
    blockUnratedItems?: SortOrderInput | SortOrder
    serverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPolicyCountOrderByAggregateInput
    _avg?: UserPolicyAvgOrderByAggregateInput
    _max?: UserPolicyMaxOrderByAggregateInput
    _min?: UserPolicyMinOrderByAggregateInput
    _sum?: UserPolicySumOrderByAggregateInput
  }

  export type UserPolicyScalarWhereWithAggregatesInput = {
    AND?: UserPolicyScalarWhereWithAggregatesInput | UserPolicyScalarWhereWithAggregatesInput[]
    OR?: UserPolicyScalarWhereWithAggregatesInput[]
    NOT?: UserPolicyScalarWhereWithAggregatesInput | UserPolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPolicy"> | string
    name?: StringWithAggregatesFilter<"UserPolicy"> | string
    description?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    isTemplate?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    isAdministrator?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    isHidden?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    isDisabled?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    maxParentalRating?: IntWithAggregatesFilter<"UserPolicy"> | number
    enableUserPreferenceAccess?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableAudioPlaybackTranscoding?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableVideoPlaybackTranscoding?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enablePlaybackRemuxing?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    forceRemoteSourceTranscoding?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableSyncTranscoding?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableMediaConversion?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableContentDownloading?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableContentDeletion?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableCameraUpload?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableRemoteAccess?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableMediaPlayback?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    remoteClientBitrateLimit?: IntWithAggregatesFilter<"UserPolicy"> | number
    maxActiveSessions?: IntWithAggregatesFilter<"UserPolicy"> | number
    enableAllDevices?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableLiveTvManagement?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableLiveTvAccess?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableAllChannels?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableRemoteControlOfOtherUsers?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableSharedDeviceControl?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enablePublicSharing?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    enableAllFolders?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    loginAttemptsBeforeLockout?: IntWithAggregatesFilter<"UserPolicy"> | number
    syncPlayAccess?: StringWithAggregatesFilter<"UserPolicy"> | string
    enableSchedule?: BoolWithAggregatesFilter<"UserPolicy"> | boolean
    scheduleStart?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    scheduleEnd?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    blockedTags?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    blockedMediaFolders?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    blockedChannels?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    accessSchedules?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    blockUnratedItems?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    serverId?: StringNullableWithAggregatesFilter<"UserPolicy"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserPolicy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPolicy"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    resellerTier?: ResellerTierCreateNestedOneWithoutUsersInput
    creditBalance?: CreditBalanceCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkCreateNestedManyWithoutSuspendedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    resellerTierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    creditBalance?: CreditBalanceUncheckedCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerUncheckedCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogUncheckedCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogUncheckedCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkUncheckedCreateNestedManyWithoutSuspendedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resellerTier?: ResellerTierUpdateOneWithoutUsersNestedInput
    creditBalance?: CreditBalanceUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    resellerTierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditBalance?: CreditBalanceUncheckedUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUncheckedUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUncheckedUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUncheckedUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUncheckedUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    resellerTierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    resellerTierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmbyUserCreateInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userServerLinks?: UserServerLinkCreateNestedManyWithoutEmbyUserInput
    embyAccounts?: EmbyAccountCreateNestedManyWithoutEmbyUserInput
  }

  export type EmbyUserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userServerLinks?: UserServerLinkUncheckedCreateNestedManyWithoutEmbyUserInput
    embyAccounts?: EmbyAccountUncheckedCreateNestedManyWithoutEmbyUserInput
  }

  export type EmbyUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userServerLinks?: UserServerLinkUpdateManyWithoutEmbyUserNestedInput
    embyAccounts?: EmbyAccountUpdateManyWithoutEmbyUserNestedInput
  }

  export type EmbyUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userServerLinks?: UserServerLinkUncheckedUpdateManyWithoutEmbyUserNestedInput
    embyAccounts?: EmbyAccountUncheckedUpdateManyWithoutEmbyUserNestedInput
  }

  export type EmbyUserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellerTierCreateInput = {
    id?: string
    name: string
    description?: string | null
    creditToDaysRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutResellerTierInput
  }

  export type ResellerTierUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    creditToDaysRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutResellerTierInput
  }

  export type ResellerTierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditToDaysRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutResellerTierNestedInput
  }

  export type ResellerTierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditToDaysRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutResellerTierNestedInput
  }

  export type ResellerTierCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    creditToDaysRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellerTierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditToDaysRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellerTierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditToDaysRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditBalanceCreateInput = {
    id?: string
    balance?: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditBalanceInput
  }

  export type CreditBalanceUncheckedCreateInput = {
    id?: string
    userId: string
    balance?: number
    updatedAt?: Date | string
  }

  export type CreditBalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditBalanceNestedInput
  }

  export type CreditBalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditBalanceCreateManyInput = {
    id?: string
    userId: string
    balance?: number
    updatedAt?: Date | string
  }

  export type CreditBalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditBalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLogCreateInput = {
    id?: string
    delta: number
    reason?: string | null
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutCreditLogsAuthoredInput
    targetUser?: UserCreateNestedOneWithoutCreditLogsTargetedInput
  }

  export type CreditLogUncheckedCreateInput = {
    id?: string
    actorUserId: string
    delta: number
    reason?: string | null
    targetUserId?: string | null
    createdAt?: Date | string
  }

  export type CreditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutCreditLogsAuthoredNestedInput
    targetUser?: UserUpdateOneWithoutCreditLogsTargetedNestedInput
  }

  export type CreditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLogCreateManyInput = {
    id?: string
    actorUserId: string
    delta: number
    reason?: string | null
    targetUserId?: string | null
    createdAt?: Date | string
  }

  export type CreditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyServerCreateInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedServersInput
    packages?: PackageCreateNestedManyWithoutServerInput
    userLinks?: UserServerLinkCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyCreateNestedManyWithoutServerInput
  }

  export type EmbyServerUncheckedCreateInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    ownerUserId?: string | null
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    packages?: PackageUncheckedCreateNestedManyWithoutServerInput
    userLinks?: UserServerLinkUncheckedCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountUncheckedCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyUncheckedCreateNestedManyWithoutServerInput
  }

  export type EmbyServerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedServersNestedInput
    packages?: PackageUpdateManyWithoutServerNestedInput
    userLinks?: UserServerLinkUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: PackageUncheckedUpdateManyWithoutServerNestedInput
    userLinks?: UserServerLinkUncheckedUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUncheckedUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUncheckedUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerCreateManyInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    ownerUserId?: string | null
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyServerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyServerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    server: EmbyServerCreateNestedOneWithoutPackagesInput
    libraries?: PackageLibraryCreateNestedManyWithoutPackageInput
    userLinks?: UserServerLinkCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    serverId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    libraries?: PackageLibraryUncheckedCreateNestedManyWithoutPackageInput
    userLinks?: UserServerLinkUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: EmbyServerUpdateOneRequiredWithoutPackagesNestedInput
    libraries?: PackageLibraryUpdateManyWithoutPackageNestedInput
    userLinks?: UserServerLinkUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraries?: PackageLibraryUncheckedUpdateManyWithoutPackageNestedInput
    userLinks?: UserServerLinkUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    serverId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageLibraryCreateInput = {
    id?: string
    libraryId?: string | null
    libraryName?: string | null
    package: PackageCreateNestedOneWithoutLibrariesInput
  }

  export type PackageLibraryUncheckedCreateInput = {
    id?: string
    packageId: string
    libraryId?: string | null
    libraryName?: string | null
  }

  export type PackageLibraryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: NullableStringFieldUpdateOperationsInput | string | null
    libraryName?: NullableStringFieldUpdateOperationsInput | string | null
    package?: PackageUpdateOneRequiredWithoutLibrariesNestedInput
  }

  export type PackageLibraryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    libraryId?: NullableStringFieldUpdateOperationsInput | string | null
    libraryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageLibraryCreateManyInput = {
    id?: string
    packageId: string
    libraryId?: string | null
    libraryName?: string | null
  }

  export type PackageLibraryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: NullableStringFieldUpdateOperationsInput | string | null
    libraryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageLibraryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    libraryId?: NullableStringFieldUpdateOperationsInput | string | null
    libraryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserServerLinkCreateInput = {
    id?: string
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyUser: EmbyUserCreateNestedOneWithoutUserServerLinksInput
    server: EmbyServerCreateNestedOneWithoutUserLinksInput
    package?: PackageCreateNestedOneWithoutUserLinksInput
    suspendedBy?: UserCreateNestedOneWithoutSuspendedLinksInput
    embyAccount?: EmbyAccountCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkUncheckedCreateInput = {
    id?: string
    embyUserId: string
    serverId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyAccount?: EmbyAccountUncheckedCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyUser?: EmbyUserUpdateOneRequiredWithoutUserServerLinksNestedInput
    server?: EmbyServerUpdateOneRequiredWithoutUserLinksNestedInput
    package?: PackageUpdateOneWithoutUserLinksNestedInput
    suspendedBy?: UserUpdateOneWithoutSuspendedLinksNestedInput
    embyAccount?: EmbyAccountUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyAccount?: EmbyAccountUncheckedUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkCreateManyInput = {
    id?: string
    embyUserId: string
    serverId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserServerLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserServerLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyAccountCreateInput = {
    id?: string
    embyUserIdInternal: string
    embyUsername: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embyUser: EmbyUserCreateNestedOneWithoutEmbyAccountsInput
    server: EmbyServerCreateNestedOneWithoutEmbyAccountsInput
    userServerLink?: UserServerLinkCreateNestedOneWithoutEmbyAccountInput
  }

  export type EmbyAccountUncheckedCreateInput = {
    id?: string
    embyUserId: string
    serverId: string
    embyUserIdInternal: string
    embyUsername: string
    userServerLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyUser?: EmbyUserUpdateOneRequiredWithoutEmbyAccountsNestedInput
    server?: EmbyServerUpdateOneRequiredWithoutEmbyAccountsNestedInput
    userServerLink?: UserServerLinkUpdateOneWithoutEmbyAccountNestedInput
  }

  export type EmbyAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    userServerLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyAccountCreateManyInput = {
    id?: string
    embyUserId: string
    serverId: string
    embyUserIdInternal: string
    embyUsername: string
    userServerLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    userServerLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPolicyCreateInput = {
    id?: string
    name: string
    description?: string | null
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: number
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: number
    maxActiveSessions?: number
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: number
    syncPlayAccess?: string
    enableSchedule?: boolean
    scheduleStart?: string | null
    scheduleEnd?: string | null
    blockedTags?: string | null
    blockedMediaFolders?: string | null
    blockedChannels?: string | null
    accessSchedules?: string | null
    blockUnratedItems?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    server?: EmbyServerCreateNestedOneWithoutUserPoliciesInput
  }

  export type UserPolicyUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: number
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: number
    maxActiveSessions?: number
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: number
    syncPlayAccess?: string
    enableSchedule?: boolean
    scheduleStart?: string | null
    scheduleEnd?: string | null
    blockedTags?: string | null
    blockedMediaFolders?: string | null
    blockedChannels?: string | null
    accessSchedules?: string | null
    blockUnratedItems?: string | null
    serverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isAdministrator?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    maxParentalRating?: IntFieldUpdateOperationsInput | number
    enableUserPreferenceAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAudioPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableVideoPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enablePlaybackRemuxing?: BoolFieldUpdateOperationsInput | boolean
    forceRemoteSourceTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableSyncTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableMediaConversion?: BoolFieldUpdateOperationsInput | boolean
    enableContentDownloading?: BoolFieldUpdateOperationsInput | boolean
    enableContentDeletion?: BoolFieldUpdateOperationsInput | boolean
    enableCameraUpload?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteAccess?: BoolFieldUpdateOperationsInput | boolean
    enableMediaPlayback?: BoolFieldUpdateOperationsInput | boolean
    remoteClientBitrateLimit?: IntFieldUpdateOperationsInput | number
    maxActiveSessions?: IntFieldUpdateOperationsInput | number
    enableAllDevices?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvManagement?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAllChannels?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteControlOfOtherUsers?: BoolFieldUpdateOperationsInput | boolean
    enableSharedDeviceControl?: BoolFieldUpdateOperationsInput | boolean
    enablePublicSharing?: BoolFieldUpdateOperationsInput | boolean
    enableAllFolders?: BoolFieldUpdateOperationsInput | boolean
    loginAttemptsBeforeLockout?: IntFieldUpdateOperationsInput | number
    syncPlayAccess?: StringFieldUpdateOperationsInput | string
    enableSchedule?: BoolFieldUpdateOperationsInput | boolean
    scheduleStart?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleEnd?: NullableStringFieldUpdateOperationsInput | string | null
    blockedTags?: NullableStringFieldUpdateOperationsInput | string | null
    blockedMediaFolders?: NullableStringFieldUpdateOperationsInput | string | null
    blockedChannels?: NullableStringFieldUpdateOperationsInput | string | null
    accessSchedules?: NullableStringFieldUpdateOperationsInput | string | null
    blockUnratedItems?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: EmbyServerUpdateOneWithoutUserPoliciesNestedInput
  }

  export type UserPolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isAdministrator?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    maxParentalRating?: IntFieldUpdateOperationsInput | number
    enableUserPreferenceAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAudioPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableVideoPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enablePlaybackRemuxing?: BoolFieldUpdateOperationsInput | boolean
    forceRemoteSourceTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableSyncTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableMediaConversion?: BoolFieldUpdateOperationsInput | boolean
    enableContentDownloading?: BoolFieldUpdateOperationsInput | boolean
    enableContentDeletion?: BoolFieldUpdateOperationsInput | boolean
    enableCameraUpload?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteAccess?: BoolFieldUpdateOperationsInput | boolean
    enableMediaPlayback?: BoolFieldUpdateOperationsInput | boolean
    remoteClientBitrateLimit?: IntFieldUpdateOperationsInput | number
    maxActiveSessions?: IntFieldUpdateOperationsInput | number
    enableAllDevices?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvManagement?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAllChannels?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteControlOfOtherUsers?: BoolFieldUpdateOperationsInput | boolean
    enableSharedDeviceControl?: BoolFieldUpdateOperationsInput | boolean
    enablePublicSharing?: BoolFieldUpdateOperationsInput | boolean
    enableAllFolders?: BoolFieldUpdateOperationsInput | boolean
    loginAttemptsBeforeLockout?: IntFieldUpdateOperationsInput | number
    syncPlayAccess?: StringFieldUpdateOperationsInput | string
    enableSchedule?: BoolFieldUpdateOperationsInput | boolean
    scheduleStart?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleEnd?: NullableStringFieldUpdateOperationsInput | string | null
    blockedTags?: NullableStringFieldUpdateOperationsInput | string | null
    blockedMediaFolders?: NullableStringFieldUpdateOperationsInput | string | null
    blockedChannels?: NullableStringFieldUpdateOperationsInput | string | null
    accessSchedules?: NullableStringFieldUpdateOperationsInput | string | null
    blockUnratedItems?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPolicyCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: number
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: number
    maxActiveSessions?: number
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: number
    syncPlayAccess?: string
    enableSchedule?: boolean
    scheduleStart?: string | null
    scheduleEnd?: string | null
    blockedTags?: string | null
    blockedMediaFolders?: string | null
    blockedChannels?: string | null
    accessSchedules?: string | null
    blockUnratedItems?: string | null
    serverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isAdministrator?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    maxParentalRating?: IntFieldUpdateOperationsInput | number
    enableUserPreferenceAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAudioPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableVideoPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enablePlaybackRemuxing?: BoolFieldUpdateOperationsInput | boolean
    forceRemoteSourceTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableSyncTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableMediaConversion?: BoolFieldUpdateOperationsInput | boolean
    enableContentDownloading?: BoolFieldUpdateOperationsInput | boolean
    enableContentDeletion?: BoolFieldUpdateOperationsInput | boolean
    enableCameraUpload?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteAccess?: BoolFieldUpdateOperationsInput | boolean
    enableMediaPlayback?: BoolFieldUpdateOperationsInput | boolean
    remoteClientBitrateLimit?: IntFieldUpdateOperationsInput | number
    maxActiveSessions?: IntFieldUpdateOperationsInput | number
    enableAllDevices?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvManagement?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAllChannels?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteControlOfOtherUsers?: BoolFieldUpdateOperationsInput | boolean
    enableSharedDeviceControl?: BoolFieldUpdateOperationsInput | boolean
    enablePublicSharing?: BoolFieldUpdateOperationsInput | boolean
    enableAllFolders?: BoolFieldUpdateOperationsInput | boolean
    loginAttemptsBeforeLockout?: IntFieldUpdateOperationsInput | number
    syncPlayAccess?: StringFieldUpdateOperationsInput | string
    enableSchedule?: BoolFieldUpdateOperationsInput | boolean
    scheduleStart?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleEnd?: NullableStringFieldUpdateOperationsInput | string | null
    blockedTags?: NullableStringFieldUpdateOperationsInput | string | null
    blockedMediaFolders?: NullableStringFieldUpdateOperationsInput | string | null
    blockedChannels?: NullableStringFieldUpdateOperationsInput | string | null
    accessSchedules?: NullableStringFieldUpdateOperationsInput | string | null
    blockUnratedItems?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isAdministrator?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    maxParentalRating?: IntFieldUpdateOperationsInput | number
    enableUserPreferenceAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAudioPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableVideoPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enablePlaybackRemuxing?: BoolFieldUpdateOperationsInput | boolean
    forceRemoteSourceTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableSyncTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableMediaConversion?: BoolFieldUpdateOperationsInput | boolean
    enableContentDownloading?: BoolFieldUpdateOperationsInput | boolean
    enableContentDeletion?: BoolFieldUpdateOperationsInput | boolean
    enableCameraUpload?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteAccess?: BoolFieldUpdateOperationsInput | boolean
    enableMediaPlayback?: BoolFieldUpdateOperationsInput | boolean
    remoteClientBitrateLimit?: IntFieldUpdateOperationsInput | number
    maxActiveSessions?: IntFieldUpdateOperationsInput | number
    enableAllDevices?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvManagement?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAllChannels?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteControlOfOtherUsers?: BoolFieldUpdateOperationsInput | boolean
    enableSharedDeviceControl?: BoolFieldUpdateOperationsInput | boolean
    enablePublicSharing?: BoolFieldUpdateOperationsInput | boolean
    enableAllFolders?: BoolFieldUpdateOperationsInput | boolean
    loginAttemptsBeforeLockout?: IntFieldUpdateOperationsInput | number
    syncPlayAccess?: StringFieldUpdateOperationsInput | string
    enableSchedule?: BoolFieldUpdateOperationsInput | boolean
    scheduleStart?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleEnd?: NullableStringFieldUpdateOperationsInput | string | null
    blockedTags?: NullableStringFieldUpdateOperationsInput | string | null
    blockedMediaFolders?: NullableStringFieldUpdateOperationsInput | string | null
    blockedChannels?: NullableStringFieldUpdateOperationsInput | string | null
    accessSchedules?: NullableStringFieldUpdateOperationsInput | string | null
    blockUnratedItems?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ResellerTierNullableScalarRelationFilter = {
    is?: ResellerTierWhereInput | null
    isNot?: ResellerTierWhereInput | null
  }

  export type CreditBalanceNullableScalarRelationFilter = {
    is?: CreditBalanceWhereInput | null
    isNot?: CreditBalanceWhereInput | null
  }

  export type EmbyServerListRelationFilter = {
    every?: EmbyServerWhereInput
    some?: EmbyServerWhereInput
    none?: EmbyServerWhereInput
  }

  export type CreditLogListRelationFilter = {
    every?: CreditLogWhereInput
    some?: CreditLogWhereInput
    none?: CreditLogWhereInput
  }

  export type UserServerLinkListRelationFilter = {
    every?: UserServerLinkWhereInput
    some?: UserServerLinkWhereInput
    none?: UserServerLinkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmbyServerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserServerLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    defaultDomain?: SortOrder
    resellerTierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    suspensionUntil?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    defaultDomain?: SortOrder
    resellerTierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    suspensionUntil?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    defaultDomain?: SortOrder
    resellerTierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    suspensionUntil?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmbyAccountListRelationFilter = {
    every?: EmbyAccountWhereInput
    some?: EmbyAccountWhereInput
    none?: EmbyAccountWhereInput
  }

  export type EmbyAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmbyUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmbyUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmbyUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResellerTierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creditToDaysRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellerTierAvgOrderByAggregateInput = {
    creditToDaysRate?: SortOrder
  }

  export type ResellerTierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creditToDaysRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellerTierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creditToDaysRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellerTierSumOrderByAggregateInput = {
    creditToDaysRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CreditBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditBalanceAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CreditBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditBalanceSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CreditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    targetUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditLogAvgOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type CreditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    targetUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    targetUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditLogSumOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type PackageListRelationFilter = {
    every?: PackageWhereInput
    some?: PackageWhereInput
    none?: PackageWhereInput
  }

  export type UserPolicyListRelationFilter = {
    every?: UserPolicyWhereInput
    some?: UserPolicyWhereInput
    none?: UserPolicyWhereInput
  }

  export type PackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmbyServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    ownerUserId?: SortOrder
    maxUsers?: SortOrder
    referenceUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmbyServerAvgOrderByAggregateInput = {
    maxUsers?: SortOrder
  }

  export type EmbyServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    ownerUserId?: SortOrder
    maxUsers?: SortOrder
    referenceUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmbyServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    ownerUserId?: SortOrder
    maxUsers?: SortOrder
    referenceUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmbyServerSumOrderByAggregateInput = {
    maxUsers?: SortOrder
  }

  export type EmbyServerScalarRelationFilter = {
    is?: EmbyServerWhereInput
    isNot?: EmbyServerWhereInput
  }

  export type PackageLibraryListRelationFilter = {
    every?: PackageLibraryWhereInput
    some?: PackageLibraryWhereInput
    none?: PackageLibraryWhereInput
  }

  export type PackageLibraryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type PackageLibraryCountOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    libraryId?: SortOrder
    libraryName?: SortOrder
  }

  export type PackageLibraryMaxOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    libraryId?: SortOrder
    libraryName?: SortOrder
  }

  export type PackageLibraryMinOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    libraryId?: SortOrder
    libraryName?: SortOrder
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmbyUserScalarRelationFilter = {
    is?: EmbyUserWhereInput
    isNot?: EmbyUserWhereInput
  }

  export type PackageNullableScalarRelationFilter = {
    is?: PackageWhereInput | null
    isNot?: PackageWhereInput | null
  }

  export type EmbyAccountNullableScalarRelationFilter = {
    is?: EmbyAccountWhereInput | null
    isNot?: EmbyAccountWhereInput | null
  }

  export type UserServerLinkEmbyUserIdServerIdCompoundUniqueInput = {
    embyUserId: string
    serverId: string
  }

  export type UserServerLinkCountOrderByAggregateInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    packageId?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expireAt?: SortOrder
    suspendedAt?: SortOrder
    suspendedById?: SortOrder
    creditsAllocated?: SortOrder
    creditsUsed?: SortOrder
    creditsRemaining?: SortOrder
    creditType?: SortOrder
    demoHours?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserServerLinkAvgOrderByAggregateInput = {
    creditsAllocated?: SortOrder
    creditsUsed?: SortOrder
    creditsRemaining?: SortOrder
    demoHours?: SortOrder
  }

  export type UserServerLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    packageId?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expireAt?: SortOrder
    suspendedAt?: SortOrder
    suspendedById?: SortOrder
    creditsAllocated?: SortOrder
    creditsUsed?: SortOrder
    creditsRemaining?: SortOrder
    creditType?: SortOrder
    demoHours?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserServerLinkMinOrderByAggregateInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    packageId?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expireAt?: SortOrder
    suspendedAt?: SortOrder
    suspendedById?: SortOrder
    creditsAllocated?: SortOrder
    creditsUsed?: SortOrder
    creditsRemaining?: SortOrder
    creditType?: SortOrder
    demoHours?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserServerLinkSumOrderByAggregateInput = {
    creditsAllocated?: SortOrder
    creditsUsed?: SortOrder
    creditsRemaining?: SortOrder
    demoHours?: SortOrder
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserServerLinkNullableScalarRelationFilter = {
    is?: UserServerLinkWhereInput | null
    isNot?: UserServerLinkWhereInput | null
  }

  export type EmbyAccountEmbyUserIdServerIdCompoundUniqueInput = {
    embyUserId: string
    serverId: string
  }

  export type EmbyAccountCountOrderByAggregateInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    embyUserIdInternal?: SortOrder
    embyUsername?: SortOrder
    userServerLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmbyAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    embyUserIdInternal?: SortOrder
    embyUsername?: SortOrder
    userServerLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmbyAccountMinOrderByAggregateInput = {
    id?: SortOrder
    embyUserId?: SortOrder
    serverId?: SortOrder
    embyUserIdInternal?: SortOrder
    embyUsername?: SortOrder
    userServerLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmbyServerNullableScalarRelationFilter = {
    is?: EmbyServerWhereInput | null
    isNot?: EmbyServerWhereInput | null
  }

  export type UserPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isTemplate?: SortOrder
    isAdministrator?: SortOrder
    isHidden?: SortOrder
    isDisabled?: SortOrder
    maxParentalRating?: SortOrder
    enableUserPreferenceAccess?: SortOrder
    enableAudioPlaybackTranscoding?: SortOrder
    enableVideoPlaybackTranscoding?: SortOrder
    enablePlaybackRemuxing?: SortOrder
    forceRemoteSourceTranscoding?: SortOrder
    enableSyncTranscoding?: SortOrder
    enableMediaConversion?: SortOrder
    enableContentDownloading?: SortOrder
    enableContentDeletion?: SortOrder
    enableCameraUpload?: SortOrder
    enableRemoteAccess?: SortOrder
    enableMediaPlayback?: SortOrder
    remoteClientBitrateLimit?: SortOrder
    maxActiveSessions?: SortOrder
    enableAllDevices?: SortOrder
    enableLiveTvManagement?: SortOrder
    enableLiveTvAccess?: SortOrder
    enableAllChannels?: SortOrder
    enableRemoteControlOfOtherUsers?: SortOrder
    enableSharedDeviceControl?: SortOrder
    enablePublicSharing?: SortOrder
    enableAllFolders?: SortOrder
    loginAttemptsBeforeLockout?: SortOrder
    syncPlayAccess?: SortOrder
    enableSchedule?: SortOrder
    scheduleStart?: SortOrder
    scheduleEnd?: SortOrder
    blockedTags?: SortOrder
    blockedMediaFolders?: SortOrder
    blockedChannels?: SortOrder
    accessSchedules?: SortOrder
    blockUnratedItems?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPolicyAvgOrderByAggregateInput = {
    maxParentalRating?: SortOrder
    remoteClientBitrateLimit?: SortOrder
    maxActiveSessions?: SortOrder
    loginAttemptsBeforeLockout?: SortOrder
  }

  export type UserPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isTemplate?: SortOrder
    isAdministrator?: SortOrder
    isHidden?: SortOrder
    isDisabled?: SortOrder
    maxParentalRating?: SortOrder
    enableUserPreferenceAccess?: SortOrder
    enableAudioPlaybackTranscoding?: SortOrder
    enableVideoPlaybackTranscoding?: SortOrder
    enablePlaybackRemuxing?: SortOrder
    forceRemoteSourceTranscoding?: SortOrder
    enableSyncTranscoding?: SortOrder
    enableMediaConversion?: SortOrder
    enableContentDownloading?: SortOrder
    enableContentDeletion?: SortOrder
    enableCameraUpload?: SortOrder
    enableRemoteAccess?: SortOrder
    enableMediaPlayback?: SortOrder
    remoteClientBitrateLimit?: SortOrder
    maxActiveSessions?: SortOrder
    enableAllDevices?: SortOrder
    enableLiveTvManagement?: SortOrder
    enableLiveTvAccess?: SortOrder
    enableAllChannels?: SortOrder
    enableRemoteControlOfOtherUsers?: SortOrder
    enableSharedDeviceControl?: SortOrder
    enablePublicSharing?: SortOrder
    enableAllFolders?: SortOrder
    loginAttemptsBeforeLockout?: SortOrder
    syncPlayAccess?: SortOrder
    enableSchedule?: SortOrder
    scheduleStart?: SortOrder
    scheduleEnd?: SortOrder
    blockedTags?: SortOrder
    blockedMediaFolders?: SortOrder
    blockedChannels?: SortOrder
    accessSchedules?: SortOrder
    blockUnratedItems?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isTemplate?: SortOrder
    isAdministrator?: SortOrder
    isHidden?: SortOrder
    isDisabled?: SortOrder
    maxParentalRating?: SortOrder
    enableUserPreferenceAccess?: SortOrder
    enableAudioPlaybackTranscoding?: SortOrder
    enableVideoPlaybackTranscoding?: SortOrder
    enablePlaybackRemuxing?: SortOrder
    forceRemoteSourceTranscoding?: SortOrder
    enableSyncTranscoding?: SortOrder
    enableMediaConversion?: SortOrder
    enableContentDownloading?: SortOrder
    enableContentDeletion?: SortOrder
    enableCameraUpload?: SortOrder
    enableRemoteAccess?: SortOrder
    enableMediaPlayback?: SortOrder
    remoteClientBitrateLimit?: SortOrder
    maxActiveSessions?: SortOrder
    enableAllDevices?: SortOrder
    enableLiveTvManagement?: SortOrder
    enableLiveTvAccess?: SortOrder
    enableAllChannels?: SortOrder
    enableRemoteControlOfOtherUsers?: SortOrder
    enableSharedDeviceControl?: SortOrder
    enablePublicSharing?: SortOrder
    enableAllFolders?: SortOrder
    loginAttemptsBeforeLockout?: SortOrder
    syncPlayAccess?: SortOrder
    enableSchedule?: SortOrder
    scheduleStart?: SortOrder
    scheduleEnd?: SortOrder
    blockedTags?: SortOrder
    blockedMediaFolders?: SortOrder
    blockedChannels?: SortOrder
    accessSchedules?: SortOrder
    blockUnratedItems?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPolicySumOrderByAggregateInput = {
    maxParentalRating?: SortOrder
    remoteClientBitrateLimit?: SortOrder
    maxActiveSessions?: SortOrder
    loginAttemptsBeforeLockout?: SortOrder
  }

  export type ResellerTierCreateNestedOneWithoutUsersInput = {
    create?: XOR<ResellerTierCreateWithoutUsersInput, ResellerTierUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ResellerTierCreateOrConnectWithoutUsersInput
    connect?: ResellerTierWhereUniqueInput
  }

  export type CreditBalanceCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditBalanceCreateWithoutUserInput, CreditBalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditBalanceCreateOrConnectWithoutUserInput
    connect?: CreditBalanceWhereUniqueInput
  }

  export type EmbyServerCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EmbyServerCreateWithoutOwnerInput, EmbyServerUncheckedCreateWithoutOwnerInput> | EmbyServerCreateWithoutOwnerInput[] | EmbyServerUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EmbyServerCreateOrConnectWithoutOwnerInput | EmbyServerCreateOrConnectWithoutOwnerInput[]
    createMany?: EmbyServerCreateManyOwnerInputEnvelope
    connect?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
  }

  export type CreditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<CreditLogCreateWithoutActorInput, CreditLogUncheckedCreateWithoutActorInput> | CreditLogCreateWithoutActorInput[] | CreditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: CreditLogCreateOrConnectWithoutActorInput | CreditLogCreateOrConnectWithoutActorInput[]
    createMany?: CreditLogCreateManyActorInputEnvelope
    connect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
  }

  export type CreditLogCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<CreditLogCreateWithoutTargetUserInput, CreditLogUncheckedCreateWithoutTargetUserInput> | CreditLogCreateWithoutTargetUserInput[] | CreditLogUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: CreditLogCreateOrConnectWithoutTargetUserInput | CreditLogCreateOrConnectWithoutTargetUserInput[]
    createMany?: CreditLogCreateManyTargetUserInputEnvelope
    connect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
  }

  export type UserServerLinkCreateNestedManyWithoutSuspendedByInput = {
    create?: XOR<UserServerLinkCreateWithoutSuspendedByInput, UserServerLinkUncheckedCreateWithoutSuspendedByInput> | UserServerLinkCreateWithoutSuspendedByInput[] | UserServerLinkUncheckedCreateWithoutSuspendedByInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutSuspendedByInput | UserServerLinkCreateOrConnectWithoutSuspendedByInput[]
    createMany?: UserServerLinkCreateManySuspendedByInputEnvelope
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
  }

  export type CreditBalanceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditBalanceCreateWithoutUserInput, CreditBalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditBalanceCreateOrConnectWithoutUserInput
    connect?: CreditBalanceWhereUniqueInput
  }

  export type EmbyServerUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EmbyServerCreateWithoutOwnerInput, EmbyServerUncheckedCreateWithoutOwnerInput> | EmbyServerCreateWithoutOwnerInput[] | EmbyServerUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EmbyServerCreateOrConnectWithoutOwnerInput | EmbyServerCreateOrConnectWithoutOwnerInput[]
    createMany?: EmbyServerCreateManyOwnerInputEnvelope
    connect?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
  }

  export type CreditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<CreditLogCreateWithoutActorInput, CreditLogUncheckedCreateWithoutActorInput> | CreditLogCreateWithoutActorInput[] | CreditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: CreditLogCreateOrConnectWithoutActorInput | CreditLogCreateOrConnectWithoutActorInput[]
    createMany?: CreditLogCreateManyActorInputEnvelope
    connect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
  }

  export type CreditLogUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<CreditLogCreateWithoutTargetUserInput, CreditLogUncheckedCreateWithoutTargetUserInput> | CreditLogCreateWithoutTargetUserInput[] | CreditLogUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: CreditLogCreateOrConnectWithoutTargetUserInput | CreditLogCreateOrConnectWithoutTargetUserInput[]
    createMany?: CreditLogCreateManyTargetUserInputEnvelope
    connect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
  }

  export type UserServerLinkUncheckedCreateNestedManyWithoutSuspendedByInput = {
    create?: XOR<UserServerLinkCreateWithoutSuspendedByInput, UserServerLinkUncheckedCreateWithoutSuspendedByInput> | UserServerLinkCreateWithoutSuspendedByInput[] | UserServerLinkUncheckedCreateWithoutSuspendedByInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutSuspendedByInput | UserServerLinkCreateOrConnectWithoutSuspendedByInput[]
    createMany?: UserServerLinkCreateManySuspendedByInputEnvelope
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ResellerTierUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ResellerTierCreateWithoutUsersInput, ResellerTierUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ResellerTierCreateOrConnectWithoutUsersInput
    upsert?: ResellerTierUpsertWithoutUsersInput
    disconnect?: ResellerTierWhereInput | boolean
    delete?: ResellerTierWhereInput | boolean
    connect?: ResellerTierWhereUniqueInput
    update?: XOR<XOR<ResellerTierUpdateToOneWithWhereWithoutUsersInput, ResellerTierUpdateWithoutUsersInput>, ResellerTierUncheckedUpdateWithoutUsersInput>
  }

  export type CreditBalanceUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditBalanceCreateWithoutUserInput, CreditBalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditBalanceCreateOrConnectWithoutUserInput
    upsert?: CreditBalanceUpsertWithoutUserInput
    disconnect?: CreditBalanceWhereInput | boolean
    delete?: CreditBalanceWhereInput | boolean
    connect?: CreditBalanceWhereUniqueInput
    update?: XOR<XOR<CreditBalanceUpdateToOneWithWhereWithoutUserInput, CreditBalanceUpdateWithoutUserInput>, CreditBalanceUncheckedUpdateWithoutUserInput>
  }

  export type EmbyServerUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EmbyServerCreateWithoutOwnerInput, EmbyServerUncheckedCreateWithoutOwnerInput> | EmbyServerCreateWithoutOwnerInput[] | EmbyServerUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EmbyServerCreateOrConnectWithoutOwnerInput | EmbyServerCreateOrConnectWithoutOwnerInput[]
    upsert?: EmbyServerUpsertWithWhereUniqueWithoutOwnerInput | EmbyServerUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EmbyServerCreateManyOwnerInputEnvelope
    set?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
    disconnect?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
    delete?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
    connect?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
    update?: EmbyServerUpdateWithWhereUniqueWithoutOwnerInput | EmbyServerUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EmbyServerUpdateManyWithWhereWithoutOwnerInput | EmbyServerUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EmbyServerScalarWhereInput | EmbyServerScalarWhereInput[]
  }

  export type CreditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<CreditLogCreateWithoutActorInput, CreditLogUncheckedCreateWithoutActorInput> | CreditLogCreateWithoutActorInput[] | CreditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: CreditLogCreateOrConnectWithoutActorInput | CreditLogCreateOrConnectWithoutActorInput[]
    upsert?: CreditLogUpsertWithWhereUniqueWithoutActorInput | CreditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: CreditLogCreateManyActorInputEnvelope
    set?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    disconnect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    delete?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    connect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    update?: CreditLogUpdateWithWhereUniqueWithoutActorInput | CreditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: CreditLogUpdateManyWithWhereWithoutActorInput | CreditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: CreditLogScalarWhereInput | CreditLogScalarWhereInput[]
  }

  export type CreditLogUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<CreditLogCreateWithoutTargetUserInput, CreditLogUncheckedCreateWithoutTargetUserInput> | CreditLogCreateWithoutTargetUserInput[] | CreditLogUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: CreditLogCreateOrConnectWithoutTargetUserInput | CreditLogCreateOrConnectWithoutTargetUserInput[]
    upsert?: CreditLogUpsertWithWhereUniqueWithoutTargetUserInput | CreditLogUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: CreditLogCreateManyTargetUserInputEnvelope
    set?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    disconnect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    delete?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    connect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    update?: CreditLogUpdateWithWhereUniqueWithoutTargetUserInput | CreditLogUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: CreditLogUpdateManyWithWhereWithoutTargetUserInput | CreditLogUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: CreditLogScalarWhereInput | CreditLogScalarWhereInput[]
  }

  export type UserServerLinkUpdateManyWithoutSuspendedByNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutSuspendedByInput, UserServerLinkUncheckedCreateWithoutSuspendedByInput> | UserServerLinkCreateWithoutSuspendedByInput[] | UserServerLinkUncheckedCreateWithoutSuspendedByInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutSuspendedByInput | UserServerLinkCreateOrConnectWithoutSuspendedByInput[]
    upsert?: UserServerLinkUpsertWithWhereUniqueWithoutSuspendedByInput | UserServerLinkUpsertWithWhereUniqueWithoutSuspendedByInput[]
    createMany?: UserServerLinkCreateManySuspendedByInputEnvelope
    set?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    disconnect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    delete?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    update?: UserServerLinkUpdateWithWhereUniqueWithoutSuspendedByInput | UserServerLinkUpdateWithWhereUniqueWithoutSuspendedByInput[]
    updateMany?: UserServerLinkUpdateManyWithWhereWithoutSuspendedByInput | UserServerLinkUpdateManyWithWhereWithoutSuspendedByInput[]
    deleteMany?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
  }

  export type CreditBalanceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditBalanceCreateWithoutUserInput, CreditBalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditBalanceCreateOrConnectWithoutUserInput
    upsert?: CreditBalanceUpsertWithoutUserInput
    disconnect?: CreditBalanceWhereInput | boolean
    delete?: CreditBalanceWhereInput | boolean
    connect?: CreditBalanceWhereUniqueInput
    update?: XOR<XOR<CreditBalanceUpdateToOneWithWhereWithoutUserInput, CreditBalanceUpdateWithoutUserInput>, CreditBalanceUncheckedUpdateWithoutUserInput>
  }

  export type EmbyServerUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EmbyServerCreateWithoutOwnerInput, EmbyServerUncheckedCreateWithoutOwnerInput> | EmbyServerCreateWithoutOwnerInput[] | EmbyServerUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EmbyServerCreateOrConnectWithoutOwnerInput | EmbyServerCreateOrConnectWithoutOwnerInput[]
    upsert?: EmbyServerUpsertWithWhereUniqueWithoutOwnerInput | EmbyServerUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EmbyServerCreateManyOwnerInputEnvelope
    set?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
    disconnect?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
    delete?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
    connect?: EmbyServerWhereUniqueInput | EmbyServerWhereUniqueInput[]
    update?: EmbyServerUpdateWithWhereUniqueWithoutOwnerInput | EmbyServerUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EmbyServerUpdateManyWithWhereWithoutOwnerInput | EmbyServerUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EmbyServerScalarWhereInput | EmbyServerScalarWhereInput[]
  }

  export type CreditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<CreditLogCreateWithoutActorInput, CreditLogUncheckedCreateWithoutActorInput> | CreditLogCreateWithoutActorInput[] | CreditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: CreditLogCreateOrConnectWithoutActorInput | CreditLogCreateOrConnectWithoutActorInput[]
    upsert?: CreditLogUpsertWithWhereUniqueWithoutActorInput | CreditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: CreditLogCreateManyActorInputEnvelope
    set?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    disconnect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    delete?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    connect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    update?: CreditLogUpdateWithWhereUniqueWithoutActorInput | CreditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: CreditLogUpdateManyWithWhereWithoutActorInput | CreditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: CreditLogScalarWhereInput | CreditLogScalarWhereInput[]
  }

  export type CreditLogUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<CreditLogCreateWithoutTargetUserInput, CreditLogUncheckedCreateWithoutTargetUserInput> | CreditLogCreateWithoutTargetUserInput[] | CreditLogUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: CreditLogCreateOrConnectWithoutTargetUserInput | CreditLogCreateOrConnectWithoutTargetUserInput[]
    upsert?: CreditLogUpsertWithWhereUniqueWithoutTargetUserInput | CreditLogUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: CreditLogCreateManyTargetUserInputEnvelope
    set?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    disconnect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    delete?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    connect?: CreditLogWhereUniqueInput | CreditLogWhereUniqueInput[]
    update?: CreditLogUpdateWithWhereUniqueWithoutTargetUserInput | CreditLogUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: CreditLogUpdateManyWithWhereWithoutTargetUserInput | CreditLogUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: CreditLogScalarWhereInput | CreditLogScalarWhereInput[]
  }

  export type UserServerLinkUncheckedUpdateManyWithoutSuspendedByNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutSuspendedByInput, UserServerLinkUncheckedCreateWithoutSuspendedByInput> | UserServerLinkCreateWithoutSuspendedByInput[] | UserServerLinkUncheckedCreateWithoutSuspendedByInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutSuspendedByInput | UserServerLinkCreateOrConnectWithoutSuspendedByInput[]
    upsert?: UserServerLinkUpsertWithWhereUniqueWithoutSuspendedByInput | UserServerLinkUpsertWithWhereUniqueWithoutSuspendedByInput[]
    createMany?: UserServerLinkCreateManySuspendedByInputEnvelope
    set?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    disconnect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    delete?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    update?: UserServerLinkUpdateWithWhereUniqueWithoutSuspendedByInput | UserServerLinkUpdateWithWhereUniqueWithoutSuspendedByInput[]
    updateMany?: UserServerLinkUpdateManyWithWhereWithoutSuspendedByInput | UserServerLinkUpdateManyWithWhereWithoutSuspendedByInput[]
    deleteMany?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
  }

  export type UserServerLinkCreateNestedManyWithoutEmbyUserInput = {
    create?: XOR<UserServerLinkCreateWithoutEmbyUserInput, UserServerLinkUncheckedCreateWithoutEmbyUserInput> | UserServerLinkCreateWithoutEmbyUserInput[] | UserServerLinkUncheckedCreateWithoutEmbyUserInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutEmbyUserInput | UserServerLinkCreateOrConnectWithoutEmbyUserInput[]
    createMany?: UserServerLinkCreateManyEmbyUserInputEnvelope
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
  }

  export type EmbyAccountCreateNestedManyWithoutEmbyUserInput = {
    create?: XOR<EmbyAccountCreateWithoutEmbyUserInput, EmbyAccountUncheckedCreateWithoutEmbyUserInput> | EmbyAccountCreateWithoutEmbyUserInput[] | EmbyAccountUncheckedCreateWithoutEmbyUserInput[]
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutEmbyUserInput | EmbyAccountCreateOrConnectWithoutEmbyUserInput[]
    createMany?: EmbyAccountCreateManyEmbyUserInputEnvelope
    connect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
  }

  export type UserServerLinkUncheckedCreateNestedManyWithoutEmbyUserInput = {
    create?: XOR<UserServerLinkCreateWithoutEmbyUserInput, UserServerLinkUncheckedCreateWithoutEmbyUserInput> | UserServerLinkCreateWithoutEmbyUserInput[] | UserServerLinkUncheckedCreateWithoutEmbyUserInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutEmbyUserInput | UserServerLinkCreateOrConnectWithoutEmbyUserInput[]
    createMany?: UserServerLinkCreateManyEmbyUserInputEnvelope
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
  }

  export type EmbyAccountUncheckedCreateNestedManyWithoutEmbyUserInput = {
    create?: XOR<EmbyAccountCreateWithoutEmbyUserInput, EmbyAccountUncheckedCreateWithoutEmbyUserInput> | EmbyAccountCreateWithoutEmbyUserInput[] | EmbyAccountUncheckedCreateWithoutEmbyUserInput[]
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutEmbyUserInput | EmbyAccountCreateOrConnectWithoutEmbyUserInput[]
    createMany?: EmbyAccountCreateManyEmbyUserInputEnvelope
    connect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
  }

  export type UserServerLinkUpdateManyWithoutEmbyUserNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutEmbyUserInput, UserServerLinkUncheckedCreateWithoutEmbyUserInput> | UserServerLinkCreateWithoutEmbyUserInput[] | UserServerLinkUncheckedCreateWithoutEmbyUserInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutEmbyUserInput | UserServerLinkCreateOrConnectWithoutEmbyUserInput[]
    upsert?: UserServerLinkUpsertWithWhereUniqueWithoutEmbyUserInput | UserServerLinkUpsertWithWhereUniqueWithoutEmbyUserInput[]
    createMany?: UserServerLinkCreateManyEmbyUserInputEnvelope
    set?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    disconnect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    delete?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    update?: UserServerLinkUpdateWithWhereUniqueWithoutEmbyUserInput | UserServerLinkUpdateWithWhereUniqueWithoutEmbyUserInput[]
    updateMany?: UserServerLinkUpdateManyWithWhereWithoutEmbyUserInput | UserServerLinkUpdateManyWithWhereWithoutEmbyUserInput[]
    deleteMany?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
  }

  export type EmbyAccountUpdateManyWithoutEmbyUserNestedInput = {
    create?: XOR<EmbyAccountCreateWithoutEmbyUserInput, EmbyAccountUncheckedCreateWithoutEmbyUserInput> | EmbyAccountCreateWithoutEmbyUserInput[] | EmbyAccountUncheckedCreateWithoutEmbyUserInput[]
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutEmbyUserInput | EmbyAccountCreateOrConnectWithoutEmbyUserInput[]
    upsert?: EmbyAccountUpsertWithWhereUniqueWithoutEmbyUserInput | EmbyAccountUpsertWithWhereUniqueWithoutEmbyUserInput[]
    createMany?: EmbyAccountCreateManyEmbyUserInputEnvelope
    set?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    disconnect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    delete?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    connect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    update?: EmbyAccountUpdateWithWhereUniqueWithoutEmbyUserInput | EmbyAccountUpdateWithWhereUniqueWithoutEmbyUserInput[]
    updateMany?: EmbyAccountUpdateManyWithWhereWithoutEmbyUserInput | EmbyAccountUpdateManyWithWhereWithoutEmbyUserInput[]
    deleteMany?: EmbyAccountScalarWhereInput | EmbyAccountScalarWhereInput[]
  }

  export type UserServerLinkUncheckedUpdateManyWithoutEmbyUserNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutEmbyUserInput, UserServerLinkUncheckedCreateWithoutEmbyUserInput> | UserServerLinkCreateWithoutEmbyUserInput[] | UserServerLinkUncheckedCreateWithoutEmbyUserInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutEmbyUserInput | UserServerLinkCreateOrConnectWithoutEmbyUserInput[]
    upsert?: UserServerLinkUpsertWithWhereUniqueWithoutEmbyUserInput | UserServerLinkUpsertWithWhereUniqueWithoutEmbyUserInput[]
    createMany?: UserServerLinkCreateManyEmbyUserInputEnvelope
    set?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    disconnect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    delete?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    update?: UserServerLinkUpdateWithWhereUniqueWithoutEmbyUserInput | UserServerLinkUpdateWithWhereUniqueWithoutEmbyUserInput[]
    updateMany?: UserServerLinkUpdateManyWithWhereWithoutEmbyUserInput | UserServerLinkUpdateManyWithWhereWithoutEmbyUserInput[]
    deleteMany?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
  }

  export type EmbyAccountUncheckedUpdateManyWithoutEmbyUserNestedInput = {
    create?: XOR<EmbyAccountCreateWithoutEmbyUserInput, EmbyAccountUncheckedCreateWithoutEmbyUserInput> | EmbyAccountCreateWithoutEmbyUserInput[] | EmbyAccountUncheckedCreateWithoutEmbyUserInput[]
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutEmbyUserInput | EmbyAccountCreateOrConnectWithoutEmbyUserInput[]
    upsert?: EmbyAccountUpsertWithWhereUniqueWithoutEmbyUserInput | EmbyAccountUpsertWithWhereUniqueWithoutEmbyUserInput[]
    createMany?: EmbyAccountCreateManyEmbyUserInputEnvelope
    set?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    disconnect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    delete?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    connect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    update?: EmbyAccountUpdateWithWhereUniqueWithoutEmbyUserInput | EmbyAccountUpdateWithWhereUniqueWithoutEmbyUserInput[]
    updateMany?: EmbyAccountUpdateManyWithWhereWithoutEmbyUserInput | EmbyAccountUpdateManyWithWhereWithoutEmbyUserInput[]
    deleteMany?: EmbyAccountScalarWhereInput | EmbyAccountScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutResellerTierInput = {
    create?: XOR<UserCreateWithoutResellerTierInput, UserUncheckedCreateWithoutResellerTierInput> | UserCreateWithoutResellerTierInput[] | UserUncheckedCreateWithoutResellerTierInput[]
    connectOrCreate?: UserCreateOrConnectWithoutResellerTierInput | UserCreateOrConnectWithoutResellerTierInput[]
    createMany?: UserCreateManyResellerTierInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutResellerTierInput = {
    create?: XOR<UserCreateWithoutResellerTierInput, UserUncheckedCreateWithoutResellerTierInput> | UserCreateWithoutResellerTierInput[] | UserUncheckedCreateWithoutResellerTierInput[]
    connectOrCreate?: UserCreateOrConnectWithoutResellerTierInput | UserCreateOrConnectWithoutResellerTierInput[]
    createMany?: UserCreateManyResellerTierInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutResellerTierNestedInput = {
    create?: XOR<UserCreateWithoutResellerTierInput, UserUncheckedCreateWithoutResellerTierInput> | UserCreateWithoutResellerTierInput[] | UserUncheckedCreateWithoutResellerTierInput[]
    connectOrCreate?: UserCreateOrConnectWithoutResellerTierInput | UserCreateOrConnectWithoutResellerTierInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutResellerTierInput | UserUpsertWithWhereUniqueWithoutResellerTierInput[]
    createMany?: UserCreateManyResellerTierInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutResellerTierInput | UserUpdateWithWhereUniqueWithoutResellerTierInput[]
    updateMany?: UserUpdateManyWithWhereWithoutResellerTierInput | UserUpdateManyWithWhereWithoutResellerTierInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutResellerTierNestedInput = {
    create?: XOR<UserCreateWithoutResellerTierInput, UserUncheckedCreateWithoutResellerTierInput> | UserCreateWithoutResellerTierInput[] | UserUncheckedCreateWithoutResellerTierInput[]
    connectOrCreate?: UserCreateOrConnectWithoutResellerTierInput | UserCreateOrConnectWithoutResellerTierInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutResellerTierInput | UserUpsertWithWhereUniqueWithoutResellerTierInput[]
    createMany?: UserCreateManyResellerTierInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutResellerTierInput | UserUpdateWithWhereUniqueWithoutResellerTierInput[]
    updateMany?: UserUpdateManyWithWhereWithoutResellerTierInput | UserUpdateManyWithWhereWithoutResellerTierInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreditBalanceInput = {
    create?: XOR<UserCreateWithoutCreditBalanceInput, UserUncheckedCreateWithoutCreditBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreditBalanceNestedInput = {
    create?: XOR<UserCreateWithoutCreditBalanceInput, UserUncheckedCreateWithoutCreditBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditBalanceInput
    upsert?: UserUpsertWithoutCreditBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditBalanceInput, UserUpdateWithoutCreditBalanceInput>, UserUncheckedUpdateWithoutCreditBalanceInput>
  }

  export type UserCreateNestedOneWithoutCreditLogsAuthoredInput = {
    create?: XOR<UserCreateWithoutCreditLogsAuthoredInput, UserUncheckedCreateWithoutCreditLogsAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditLogsAuthoredInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreditLogsTargetedInput = {
    create?: XOR<UserCreateWithoutCreditLogsTargetedInput, UserUncheckedCreateWithoutCreditLogsTargetedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditLogsTargetedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreditLogsAuthoredNestedInput = {
    create?: XOR<UserCreateWithoutCreditLogsAuthoredInput, UserUncheckedCreateWithoutCreditLogsAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditLogsAuthoredInput
    upsert?: UserUpsertWithoutCreditLogsAuthoredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditLogsAuthoredInput, UserUpdateWithoutCreditLogsAuthoredInput>, UserUncheckedUpdateWithoutCreditLogsAuthoredInput>
  }

  export type UserUpdateOneWithoutCreditLogsTargetedNestedInput = {
    create?: XOR<UserCreateWithoutCreditLogsTargetedInput, UserUncheckedCreateWithoutCreditLogsTargetedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditLogsTargetedInput
    upsert?: UserUpsertWithoutCreditLogsTargetedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditLogsTargetedInput, UserUpdateWithoutCreditLogsTargetedInput>, UserUncheckedUpdateWithoutCreditLogsTargetedInput>
  }

  export type UserCreateNestedOneWithoutOwnedServersInput = {
    create?: XOR<UserCreateWithoutOwnedServersInput, UserUncheckedCreateWithoutOwnedServersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedServersInput
    connect?: UserWhereUniqueInput
  }

  export type PackageCreateNestedManyWithoutServerInput = {
    create?: XOR<PackageCreateWithoutServerInput, PackageUncheckedCreateWithoutServerInput> | PackageCreateWithoutServerInput[] | PackageUncheckedCreateWithoutServerInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutServerInput | PackageCreateOrConnectWithoutServerInput[]
    createMany?: PackageCreateManyServerInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type UserServerLinkCreateNestedManyWithoutServerInput = {
    create?: XOR<UserServerLinkCreateWithoutServerInput, UserServerLinkUncheckedCreateWithoutServerInput> | UserServerLinkCreateWithoutServerInput[] | UserServerLinkUncheckedCreateWithoutServerInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutServerInput | UserServerLinkCreateOrConnectWithoutServerInput[]
    createMany?: UserServerLinkCreateManyServerInputEnvelope
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
  }

  export type EmbyAccountCreateNestedManyWithoutServerInput = {
    create?: XOR<EmbyAccountCreateWithoutServerInput, EmbyAccountUncheckedCreateWithoutServerInput> | EmbyAccountCreateWithoutServerInput[] | EmbyAccountUncheckedCreateWithoutServerInput[]
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutServerInput | EmbyAccountCreateOrConnectWithoutServerInput[]
    createMany?: EmbyAccountCreateManyServerInputEnvelope
    connect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
  }

  export type UserPolicyCreateNestedManyWithoutServerInput = {
    create?: XOR<UserPolicyCreateWithoutServerInput, UserPolicyUncheckedCreateWithoutServerInput> | UserPolicyCreateWithoutServerInput[] | UserPolicyUncheckedCreateWithoutServerInput[]
    connectOrCreate?: UserPolicyCreateOrConnectWithoutServerInput | UserPolicyCreateOrConnectWithoutServerInput[]
    createMany?: UserPolicyCreateManyServerInputEnvelope
    connect?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<PackageCreateWithoutServerInput, PackageUncheckedCreateWithoutServerInput> | PackageCreateWithoutServerInput[] | PackageUncheckedCreateWithoutServerInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutServerInput | PackageCreateOrConnectWithoutServerInput[]
    createMany?: PackageCreateManyServerInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type UserServerLinkUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<UserServerLinkCreateWithoutServerInput, UserServerLinkUncheckedCreateWithoutServerInput> | UserServerLinkCreateWithoutServerInput[] | UserServerLinkUncheckedCreateWithoutServerInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutServerInput | UserServerLinkCreateOrConnectWithoutServerInput[]
    createMany?: UserServerLinkCreateManyServerInputEnvelope
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
  }

  export type EmbyAccountUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<EmbyAccountCreateWithoutServerInput, EmbyAccountUncheckedCreateWithoutServerInput> | EmbyAccountCreateWithoutServerInput[] | EmbyAccountUncheckedCreateWithoutServerInput[]
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutServerInput | EmbyAccountCreateOrConnectWithoutServerInput[]
    createMany?: EmbyAccountCreateManyServerInputEnvelope
    connect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
  }

  export type UserPolicyUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<UserPolicyCreateWithoutServerInput, UserPolicyUncheckedCreateWithoutServerInput> | UserPolicyCreateWithoutServerInput[] | UserPolicyUncheckedCreateWithoutServerInput[]
    connectOrCreate?: UserPolicyCreateOrConnectWithoutServerInput | UserPolicyCreateOrConnectWithoutServerInput[]
    createMany?: UserPolicyCreateManyServerInputEnvelope
    connect?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutOwnedServersNestedInput = {
    create?: XOR<UserCreateWithoutOwnedServersInput, UserUncheckedCreateWithoutOwnedServersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedServersInput
    upsert?: UserUpsertWithoutOwnedServersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedServersInput, UserUpdateWithoutOwnedServersInput>, UserUncheckedUpdateWithoutOwnedServersInput>
  }

  export type PackageUpdateManyWithoutServerNestedInput = {
    create?: XOR<PackageCreateWithoutServerInput, PackageUncheckedCreateWithoutServerInput> | PackageCreateWithoutServerInput[] | PackageUncheckedCreateWithoutServerInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutServerInput | PackageCreateOrConnectWithoutServerInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutServerInput | PackageUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: PackageCreateManyServerInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutServerInput | PackageUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutServerInput | PackageUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type UserServerLinkUpdateManyWithoutServerNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutServerInput, UserServerLinkUncheckedCreateWithoutServerInput> | UserServerLinkCreateWithoutServerInput[] | UserServerLinkUncheckedCreateWithoutServerInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutServerInput | UserServerLinkCreateOrConnectWithoutServerInput[]
    upsert?: UserServerLinkUpsertWithWhereUniqueWithoutServerInput | UserServerLinkUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: UserServerLinkCreateManyServerInputEnvelope
    set?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    disconnect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    delete?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    update?: UserServerLinkUpdateWithWhereUniqueWithoutServerInput | UserServerLinkUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: UserServerLinkUpdateManyWithWhereWithoutServerInput | UserServerLinkUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
  }

  export type EmbyAccountUpdateManyWithoutServerNestedInput = {
    create?: XOR<EmbyAccountCreateWithoutServerInput, EmbyAccountUncheckedCreateWithoutServerInput> | EmbyAccountCreateWithoutServerInput[] | EmbyAccountUncheckedCreateWithoutServerInput[]
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutServerInput | EmbyAccountCreateOrConnectWithoutServerInput[]
    upsert?: EmbyAccountUpsertWithWhereUniqueWithoutServerInput | EmbyAccountUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: EmbyAccountCreateManyServerInputEnvelope
    set?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    disconnect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    delete?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    connect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    update?: EmbyAccountUpdateWithWhereUniqueWithoutServerInput | EmbyAccountUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: EmbyAccountUpdateManyWithWhereWithoutServerInput | EmbyAccountUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: EmbyAccountScalarWhereInput | EmbyAccountScalarWhereInput[]
  }

  export type UserPolicyUpdateManyWithoutServerNestedInput = {
    create?: XOR<UserPolicyCreateWithoutServerInput, UserPolicyUncheckedCreateWithoutServerInput> | UserPolicyCreateWithoutServerInput[] | UserPolicyUncheckedCreateWithoutServerInput[]
    connectOrCreate?: UserPolicyCreateOrConnectWithoutServerInput | UserPolicyCreateOrConnectWithoutServerInput[]
    upsert?: UserPolicyUpsertWithWhereUniqueWithoutServerInput | UserPolicyUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: UserPolicyCreateManyServerInputEnvelope
    set?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
    disconnect?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
    delete?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
    connect?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
    update?: UserPolicyUpdateWithWhereUniqueWithoutServerInput | UserPolicyUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: UserPolicyUpdateManyWithWhereWithoutServerInput | UserPolicyUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: UserPolicyScalarWhereInput | UserPolicyScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<PackageCreateWithoutServerInput, PackageUncheckedCreateWithoutServerInput> | PackageCreateWithoutServerInput[] | PackageUncheckedCreateWithoutServerInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutServerInput | PackageCreateOrConnectWithoutServerInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutServerInput | PackageUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: PackageCreateManyServerInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutServerInput | PackageUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutServerInput | PackageUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type UserServerLinkUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutServerInput, UserServerLinkUncheckedCreateWithoutServerInput> | UserServerLinkCreateWithoutServerInput[] | UserServerLinkUncheckedCreateWithoutServerInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutServerInput | UserServerLinkCreateOrConnectWithoutServerInput[]
    upsert?: UserServerLinkUpsertWithWhereUniqueWithoutServerInput | UserServerLinkUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: UserServerLinkCreateManyServerInputEnvelope
    set?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    disconnect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    delete?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    update?: UserServerLinkUpdateWithWhereUniqueWithoutServerInput | UserServerLinkUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: UserServerLinkUpdateManyWithWhereWithoutServerInput | UserServerLinkUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
  }

  export type EmbyAccountUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<EmbyAccountCreateWithoutServerInput, EmbyAccountUncheckedCreateWithoutServerInput> | EmbyAccountCreateWithoutServerInput[] | EmbyAccountUncheckedCreateWithoutServerInput[]
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutServerInput | EmbyAccountCreateOrConnectWithoutServerInput[]
    upsert?: EmbyAccountUpsertWithWhereUniqueWithoutServerInput | EmbyAccountUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: EmbyAccountCreateManyServerInputEnvelope
    set?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    disconnect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    delete?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    connect?: EmbyAccountWhereUniqueInput | EmbyAccountWhereUniqueInput[]
    update?: EmbyAccountUpdateWithWhereUniqueWithoutServerInput | EmbyAccountUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: EmbyAccountUpdateManyWithWhereWithoutServerInput | EmbyAccountUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: EmbyAccountScalarWhereInput | EmbyAccountScalarWhereInput[]
  }

  export type UserPolicyUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<UserPolicyCreateWithoutServerInput, UserPolicyUncheckedCreateWithoutServerInput> | UserPolicyCreateWithoutServerInput[] | UserPolicyUncheckedCreateWithoutServerInput[]
    connectOrCreate?: UserPolicyCreateOrConnectWithoutServerInput | UserPolicyCreateOrConnectWithoutServerInput[]
    upsert?: UserPolicyUpsertWithWhereUniqueWithoutServerInput | UserPolicyUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: UserPolicyCreateManyServerInputEnvelope
    set?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
    disconnect?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
    delete?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
    connect?: UserPolicyWhereUniqueInput | UserPolicyWhereUniqueInput[]
    update?: UserPolicyUpdateWithWhereUniqueWithoutServerInput | UserPolicyUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: UserPolicyUpdateManyWithWhereWithoutServerInput | UserPolicyUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: UserPolicyScalarWhereInput | UserPolicyScalarWhereInput[]
  }

  export type EmbyServerCreateNestedOneWithoutPackagesInput = {
    create?: XOR<EmbyServerCreateWithoutPackagesInput, EmbyServerUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: EmbyServerCreateOrConnectWithoutPackagesInput
    connect?: EmbyServerWhereUniqueInput
  }

  export type PackageLibraryCreateNestedManyWithoutPackageInput = {
    create?: XOR<PackageLibraryCreateWithoutPackageInput, PackageLibraryUncheckedCreateWithoutPackageInput> | PackageLibraryCreateWithoutPackageInput[] | PackageLibraryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageLibraryCreateOrConnectWithoutPackageInput | PackageLibraryCreateOrConnectWithoutPackageInput[]
    createMany?: PackageLibraryCreateManyPackageInputEnvelope
    connect?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
  }

  export type UserServerLinkCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserServerLinkCreateWithoutPackageInput, UserServerLinkUncheckedCreateWithoutPackageInput> | UserServerLinkCreateWithoutPackageInput[] | UserServerLinkUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutPackageInput | UserServerLinkCreateOrConnectWithoutPackageInput[]
    createMany?: UserServerLinkCreateManyPackageInputEnvelope
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
  }

  export type PackageLibraryUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<PackageLibraryCreateWithoutPackageInput, PackageLibraryUncheckedCreateWithoutPackageInput> | PackageLibraryCreateWithoutPackageInput[] | PackageLibraryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageLibraryCreateOrConnectWithoutPackageInput | PackageLibraryCreateOrConnectWithoutPackageInput[]
    createMany?: PackageLibraryCreateManyPackageInputEnvelope
    connect?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
  }

  export type UserServerLinkUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserServerLinkCreateWithoutPackageInput, UserServerLinkUncheckedCreateWithoutPackageInput> | UserServerLinkCreateWithoutPackageInput[] | UserServerLinkUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutPackageInput | UserServerLinkCreateOrConnectWithoutPackageInput[]
    createMany?: UserServerLinkCreateManyPackageInputEnvelope
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
  }

  export type EmbyServerUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<EmbyServerCreateWithoutPackagesInput, EmbyServerUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: EmbyServerCreateOrConnectWithoutPackagesInput
    upsert?: EmbyServerUpsertWithoutPackagesInput
    connect?: EmbyServerWhereUniqueInput
    update?: XOR<XOR<EmbyServerUpdateToOneWithWhereWithoutPackagesInput, EmbyServerUpdateWithoutPackagesInput>, EmbyServerUncheckedUpdateWithoutPackagesInput>
  }

  export type PackageLibraryUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PackageLibraryCreateWithoutPackageInput, PackageLibraryUncheckedCreateWithoutPackageInput> | PackageLibraryCreateWithoutPackageInput[] | PackageLibraryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageLibraryCreateOrConnectWithoutPackageInput | PackageLibraryCreateOrConnectWithoutPackageInput[]
    upsert?: PackageLibraryUpsertWithWhereUniqueWithoutPackageInput | PackageLibraryUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PackageLibraryCreateManyPackageInputEnvelope
    set?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
    disconnect?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
    delete?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
    connect?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
    update?: PackageLibraryUpdateWithWhereUniqueWithoutPackageInput | PackageLibraryUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PackageLibraryUpdateManyWithWhereWithoutPackageInput | PackageLibraryUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PackageLibraryScalarWhereInput | PackageLibraryScalarWhereInput[]
  }

  export type UserServerLinkUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutPackageInput, UserServerLinkUncheckedCreateWithoutPackageInput> | UserServerLinkCreateWithoutPackageInput[] | UserServerLinkUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutPackageInput | UserServerLinkCreateOrConnectWithoutPackageInput[]
    upsert?: UserServerLinkUpsertWithWhereUniqueWithoutPackageInput | UserServerLinkUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserServerLinkCreateManyPackageInputEnvelope
    set?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    disconnect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    delete?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    update?: UserServerLinkUpdateWithWhereUniqueWithoutPackageInput | UserServerLinkUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserServerLinkUpdateManyWithWhereWithoutPackageInput | UserServerLinkUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
  }

  export type PackageLibraryUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PackageLibraryCreateWithoutPackageInput, PackageLibraryUncheckedCreateWithoutPackageInput> | PackageLibraryCreateWithoutPackageInput[] | PackageLibraryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageLibraryCreateOrConnectWithoutPackageInput | PackageLibraryCreateOrConnectWithoutPackageInput[]
    upsert?: PackageLibraryUpsertWithWhereUniqueWithoutPackageInput | PackageLibraryUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PackageLibraryCreateManyPackageInputEnvelope
    set?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
    disconnect?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
    delete?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
    connect?: PackageLibraryWhereUniqueInput | PackageLibraryWhereUniqueInput[]
    update?: PackageLibraryUpdateWithWhereUniqueWithoutPackageInput | PackageLibraryUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PackageLibraryUpdateManyWithWhereWithoutPackageInput | PackageLibraryUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PackageLibraryScalarWhereInput | PackageLibraryScalarWhereInput[]
  }

  export type UserServerLinkUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutPackageInput, UserServerLinkUncheckedCreateWithoutPackageInput> | UserServerLinkCreateWithoutPackageInput[] | UserServerLinkUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutPackageInput | UserServerLinkCreateOrConnectWithoutPackageInput[]
    upsert?: UserServerLinkUpsertWithWhereUniqueWithoutPackageInput | UserServerLinkUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserServerLinkCreateManyPackageInputEnvelope
    set?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    disconnect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    delete?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    connect?: UserServerLinkWhereUniqueInput | UserServerLinkWhereUniqueInput[]
    update?: UserServerLinkUpdateWithWhereUniqueWithoutPackageInput | UserServerLinkUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserServerLinkUpdateManyWithWhereWithoutPackageInput | UserServerLinkUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
  }

  export type PackageCreateNestedOneWithoutLibrariesInput = {
    create?: XOR<PackageCreateWithoutLibrariesInput, PackageUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutLibrariesInput
    connect?: PackageWhereUniqueInput
  }

  export type PackageUpdateOneRequiredWithoutLibrariesNestedInput = {
    create?: XOR<PackageCreateWithoutLibrariesInput, PackageUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutLibrariesInput
    upsert?: PackageUpsertWithoutLibrariesInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutLibrariesInput, PackageUpdateWithoutLibrariesInput>, PackageUncheckedUpdateWithoutLibrariesInput>
  }

  export type EmbyUserCreateNestedOneWithoutUserServerLinksInput = {
    create?: XOR<EmbyUserCreateWithoutUserServerLinksInput, EmbyUserUncheckedCreateWithoutUserServerLinksInput>
    connectOrCreate?: EmbyUserCreateOrConnectWithoutUserServerLinksInput
    connect?: EmbyUserWhereUniqueInput
  }

  export type EmbyServerCreateNestedOneWithoutUserLinksInput = {
    create?: XOR<EmbyServerCreateWithoutUserLinksInput, EmbyServerUncheckedCreateWithoutUserLinksInput>
    connectOrCreate?: EmbyServerCreateOrConnectWithoutUserLinksInput
    connect?: EmbyServerWhereUniqueInput
  }

  export type PackageCreateNestedOneWithoutUserLinksInput = {
    create?: XOR<PackageCreateWithoutUserLinksInput, PackageUncheckedCreateWithoutUserLinksInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUserLinksInput
    connect?: PackageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSuspendedLinksInput = {
    create?: XOR<UserCreateWithoutSuspendedLinksInput, UserUncheckedCreateWithoutSuspendedLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuspendedLinksInput
    connect?: UserWhereUniqueInput
  }

  export type EmbyAccountCreateNestedOneWithoutUserServerLinkInput = {
    create?: XOR<EmbyAccountCreateWithoutUserServerLinkInput, EmbyAccountUncheckedCreateWithoutUserServerLinkInput>
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutUserServerLinkInput
    connect?: EmbyAccountWhereUniqueInput
  }

  export type EmbyAccountUncheckedCreateNestedOneWithoutUserServerLinkInput = {
    create?: XOR<EmbyAccountCreateWithoutUserServerLinkInput, EmbyAccountUncheckedCreateWithoutUserServerLinkInput>
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutUserServerLinkInput
    connect?: EmbyAccountWhereUniqueInput
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmbyUserUpdateOneRequiredWithoutUserServerLinksNestedInput = {
    create?: XOR<EmbyUserCreateWithoutUserServerLinksInput, EmbyUserUncheckedCreateWithoutUserServerLinksInput>
    connectOrCreate?: EmbyUserCreateOrConnectWithoutUserServerLinksInput
    upsert?: EmbyUserUpsertWithoutUserServerLinksInput
    connect?: EmbyUserWhereUniqueInput
    update?: XOR<XOR<EmbyUserUpdateToOneWithWhereWithoutUserServerLinksInput, EmbyUserUpdateWithoutUserServerLinksInput>, EmbyUserUncheckedUpdateWithoutUserServerLinksInput>
  }

  export type EmbyServerUpdateOneRequiredWithoutUserLinksNestedInput = {
    create?: XOR<EmbyServerCreateWithoutUserLinksInput, EmbyServerUncheckedCreateWithoutUserLinksInput>
    connectOrCreate?: EmbyServerCreateOrConnectWithoutUserLinksInput
    upsert?: EmbyServerUpsertWithoutUserLinksInput
    connect?: EmbyServerWhereUniqueInput
    update?: XOR<XOR<EmbyServerUpdateToOneWithWhereWithoutUserLinksInput, EmbyServerUpdateWithoutUserLinksInput>, EmbyServerUncheckedUpdateWithoutUserLinksInput>
  }

  export type PackageUpdateOneWithoutUserLinksNestedInput = {
    create?: XOR<PackageCreateWithoutUserLinksInput, PackageUncheckedCreateWithoutUserLinksInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUserLinksInput
    upsert?: PackageUpsertWithoutUserLinksInput
    disconnect?: PackageWhereInput | boolean
    delete?: PackageWhereInput | boolean
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutUserLinksInput, PackageUpdateWithoutUserLinksInput>, PackageUncheckedUpdateWithoutUserLinksInput>
  }

  export type UserUpdateOneWithoutSuspendedLinksNestedInput = {
    create?: XOR<UserCreateWithoutSuspendedLinksInput, UserUncheckedCreateWithoutSuspendedLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuspendedLinksInput
    upsert?: UserUpsertWithoutSuspendedLinksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuspendedLinksInput, UserUpdateWithoutSuspendedLinksInput>, UserUncheckedUpdateWithoutSuspendedLinksInput>
  }

  export type EmbyAccountUpdateOneWithoutUserServerLinkNestedInput = {
    create?: XOR<EmbyAccountCreateWithoutUserServerLinkInput, EmbyAccountUncheckedCreateWithoutUserServerLinkInput>
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutUserServerLinkInput
    upsert?: EmbyAccountUpsertWithoutUserServerLinkInput
    disconnect?: EmbyAccountWhereInput | boolean
    delete?: EmbyAccountWhereInput | boolean
    connect?: EmbyAccountWhereUniqueInput
    update?: XOR<XOR<EmbyAccountUpdateToOneWithWhereWithoutUserServerLinkInput, EmbyAccountUpdateWithoutUserServerLinkInput>, EmbyAccountUncheckedUpdateWithoutUserServerLinkInput>
  }

  export type EmbyAccountUncheckedUpdateOneWithoutUserServerLinkNestedInput = {
    create?: XOR<EmbyAccountCreateWithoutUserServerLinkInput, EmbyAccountUncheckedCreateWithoutUserServerLinkInput>
    connectOrCreate?: EmbyAccountCreateOrConnectWithoutUserServerLinkInput
    upsert?: EmbyAccountUpsertWithoutUserServerLinkInput
    disconnect?: EmbyAccountWhereInput | boolean
    delete?: EmbyAccountWhereInput | boolean
    connect?: EmbyAccountWhereUniqueInput
    update?: XOR<XOR<EmbyAccountUpdateToOneWithWhereWithoutUserServerLinkInput, EmbyAccountUpdateWithoutUserServerLinkInput>, EmbyAccountUncheckedUpdateWithoutUserServerLinkInput>
  }

  export type EmbyUserCreateNestedOneWithoutEmbyAccountsInput = {
    create?: XOR<EmbyUserCreateWithoutEmbyAccountsInput, EmbyUserUncheckedCreateWithoutEmbyAccountsInput>
    connectOrCreate?: EmbyUserCreateOrConnectWithoutEmbyAccountsInput
    connect?: EmbyUserWhereUniqueInput
  }

  export type EmbyServerCreateNestedOneWithoutEmbyAccountsInput = {
    create?: XOR<EmbyServerCreateWithoutEmbyAccountsInput, EmbyServerUncheckedCreateWithoutEmbyAccountsInput>
    connectOrCreate?: EmbyServerCreateOrConnectWithoutEmbyAccountsInput
    connect?: EmbyServerWhereUniqueInput
  }

  export type UserServerLinkCreateNestedOneWithoutEmbyAccountInput = {
    create?: XOR<UserServerLinkCreateWithoutEmbyAccountInput, UserServerLinkUncheckedCreateWithoutEmbyAccountInput>
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutEmbyAccountInput
    connect?: UserServerLinkWhereUniqueInput
  }

  export type EmbyUserUpdateOneRequiredWithoutEmbyAccountsNestedInput = {
    create?: XOR<EmbyUserCreateWithoutEmbyAccountsInput, EmbyUserUncheckedCreateWithoutEmbyAccountsInput>
    connectOrCreate?: EmbyUserCreateOrConnectWithoutEmbyAccountsInput
    upsert?: EmbyUserUpsertWithoutEmbyAccountsInput
    connect?: EmbyUserWhereUniqueInput
    update?: XOR<XOR<EmbyUserUpdateToOneWithWhereWithoutEmbyAccountsInput, EmbyUserUpdateWithoutEmbyAccountsInput>, EmbyUserUncheckedUpdateWithoutEmbyAccountsInput>
  }

  export type EmbyServerUpdateOneRequiredWithoutEmbyAccountsNestedInput = {
    create?: XOR<EmbyServerCreateWithoutEmbyAccountsInput, EmbyServerUncheckedCreateWithoutEmbyAccountsInput>
    connectOrCreate?: EmbyServerCreateOrConnectWithoutEmbyAccountsInput
    upsert?: EmbyServerUpsertWithoutEmbyAccountsInput
    connect?: EmbyServerWhereUniqueInput
    update?: XOR<XOR<EmbyServerUpdateToOneWithWhereWithoutEmbyAccountsInput, EmbyServerUpdateWithoutEmbyAccountsInput>, EmbyServerUncheckedUpdateWithoutEmbyAccountsInput>
  }

  export type UserServerLinkUpdateOneWithoutEmbyAccountNestedInput = {
    create?: XOR<UserServerLinkCreateWithoutEmbyAccountInput, UserServerLinkUncheckedCreateWithoutEmbyAccountInput>
    connectOrCreate?: UserServerLinkCreateOrConnectWithoutEmbyAccountInput
    upsert?: UserServerLinkUpsertWithoutEmbyAccountInput
    disconnect?: UserServerLinkWhereInput | boolean
    delete?: UserServerLinkWhereInput | boolean
    connect?: UserServerLinkWhereUniqueInput
    update?: XOR<XOR<UserServerLinkUpdateToOneWithWhereWithoutEmbyAccountInput, UserServerLinkUpdateWithoutEmbyAccountInput>, UserServerLinkUncheckedUpdateWithoutEmbyAccountInput>
  }

  export type EmbyServerCreateNestedOneWithoutUserPoliciesInput = {
    create?: XOR<EmbyServerCreateWithoutUserPoliciesInput, EmbyServerUncheckedCreateWithoutUserPoliciesInput>
    connectOrCreate?: EmbyServerCreateOrConnectWithoutUserPoliciesInput
    connect?: EmbyServerWhereUniqueInput
  }

  export type EmbyServerUpdateOneWithoutUserPoliciesNestedInput = {
    create?: XOR<EmbyServerCreateWithoutUserPoliciesInput, EmbyServerUncheckedCreateWithoutUserPoliciesInput>
    connectOrCreate?: EmbyServerCreateOrConnectWithoutUserPoliciesInput
    upsert?: EmbyServerUpsertWithoutUserPoliciesInput
    disconnect?: EmbyServerWhereInput | boolean
    delete?: EmbyServerWhereInput | boolean
    connect?: EmbyServerWhereUniqueInput
    update?: XOR<XOR<EmbyServerUpdateToOneWithWhereWithoutUserPoliciesInput, EmbyServerUpdateWithoutUserPoliciesInput>, EmbyServerUncheckedUpdateWithoutUserPoliciesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ResellerTierCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    creditToDaysRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellerTierUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    creditToDaysRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellerTierCreateOrConnectWithoutUsersInput = {
    where: ResellerTierWhereUniqueInput
    create: XOR<ResellerTierCreateWithoutUsersInput, ResellerTierUncheckedCreateWithoutUsersInput>
  }

  export type CreditBalanceCreateWithoutUserInput = {
    id?: string
    balance?: number
    updatedAt?: Date | string
  }

  export type CreditBalanceUncheckedCreateWithoutUserInput = {
    id?: string
    balance?: number
    updatedAt?: Date | string
  }

  export type CreditBalanceCreateOrConnectWithoutUserInput = {
    where: CreditBalanceWhereUniqueInput
    create: XOR<CreditBalanceCreateWithoutUserInput, CreditBalanceUncheckedCreateWithoutUserInput>
  }

  export type EmbyServerCreateWithoutOwnerInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    packages?: PackageCreateNestedManyWithoutServerInput
    userLinks?: UserServerLinkCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyCreateNestedManyWithoutServerInput
  }

  export type EmbyServerUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    packages?: PackageUncheckedCreateNestedManyWithoutServerInput
    userLinks?: UserServerLinkUncheckedCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountUncheckedCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyUncheckedCreateNestedManyWithoutServerInput
  }

  export type EmbyServerCreateOrConnectWithoutOwnerInput = {
    where: EmbyServerWhereUniqueInput
    create: XOR<EmbyServerCreateWithoutOwnerInput, EmbyServerUncheckedCreateWithoutOwnerInput>
  }

  export type EmbyServerCreateManyOwnerInputEnvelope = {
    data: EmbyServerCreateManyOwnerInput | EmbyServerCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CreditLogCreateWithoutActorInput = {
    id?: string
    delta: number
    reason?: string | null
    createdAt?: Date | string
    targetUser?: UserCreateNestedOneWithoutCreditLogsTargetedInput
  }

  export type CreditLogUncheckedCreateWithoutActorInput = {
    id?: string
    delta: number
    reason?: string | null
    targetUserId?: string | null
    createdAt?: Date | string
  }

  export type CreditLogCreateOrConnectWithoutActorInput = {
    where: CreditLogWhereUniqueInput
    create: XOR<CreditLogCreateWithoutActorInput, CreditLogUncheckedCreateWithoutActorInput>
  }

  export type CreditLogCreateManyActorInputEnvelope = {
    data: CreditLogCreateManyActorInput | CreditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type CreditLogCreateWithoutTargetUserInput = {
    id?: string
    delta: number
    reason?: string | null
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutCreditLogsAuthoredInput
  }

  export type CreditLogUncheckedCreateWithoutTargetUserInput = {
    id?: string
    actorUserId: string
    delta: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type CreditLogCreateOrConnectWithoutTargetUserInput = {
    where: CreditLogWhereUniqueInput
    create: XOR<CreditLogCreateWithoutTargetUserInput, CreditLogUncheckedCreateWithoutTargetUserInput>
  }

  export type CreditLogCreateManyTargetUserInputEnvelope = {
    data: CreditLogCreateManyTargetUserInput | CreditLogCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type UserServerLinkCreateWithoutSuspendedByInput = {
    id?: string
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyUser: EmbyUserCreateNestedOneWithoutUserServerLinksInput
    server: EmbyServerCreateNestedOneWithoutUserLinksInput
    package?: PackageCreateNestedOneWithoutUserLinksInput
    embyAccount?: EmbyAccountCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkUncheckedCreateWithoutSuspendedByInput = {
    id?: string
    embyUserId: string
    serverId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyAccount?: EmbyAccountUncheckedCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkCreateOrConnectWithoutSuspendedByInput = {
    where: UserServerLinkWhereUniqueInput
    create: XOR<UserServerLinkCreateWithoutSuspendedByInput, UserServerLinkUncheckedCreateWithoutSuspendedByInput>
  }

  export type UserServerLinkCreateManySuspendedByInputEnvelope = {
    data: UserServerLinkCreateManySuspendedByInput | UserServerLinkCreateManySuspendedByInput[]
    skipDuplicates?: boolean
  }

  export type ResellerTierUpsertWithoutUsersInput = {
    update: XOR<ResellerTierUpdateWithoutUsersInput, ResellerTierUncheckedUpdateWithoutUsersInput>
    create: XOR<ResellerTierCreateWithoutUsersInput, ResellerTierUncheckedCreateWithoutUsersInput>
    where?: ResellerTierWhereInput
  }

  export type ResellerTierUpdateToOneWithWhereWithoutUsersInput = {
    where?: ResellerTierWhereInput
    data: XOR<ResellerTierUpdateWithoutUsersInput, ResellerTierUncheckedUpdateWithoutUsersInput>
  }

  export type ResellerTierUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditToDaysRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellerTierUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditToDaysRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditBalanceUpsertWithoutUserInput = {
    update: XOR<CreditBalanceUpdateWithoutUserInput, CreditBalanceUncheckedUpdateWithoutUserInput>
    create: XOR<CreditBalanceCreateWithoutUserInput, CreditBalanceUncheckedCreateWithoutUserInput>
    where?: CreditBalanceWhereInput
  }

  export type CreditBalanceUpdateToOneWithWhereWithoutUserInput = {
    where?: CreditBalanceWhereInput
    data: XOR<CreditBalanceUpdateWithoutUserInput, CreditBalanceUncheckedUpdateWithoutUserInput>
  }

  export type CreditBalanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditBalanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyServerUpsertWithWhereUniqueWithoutOwnerInput = {
    where: EmbyServerWhereUniqueInput
    update: XOR<EmbyServerUpdateWithoutOwnerInput, EmbyServerUncheckedUpdateWithoutOwnerInput>
    create: XOR<EmbyServerCreateWithoutOwnerInput, EmbyServerUncheckedCreateWithoutOwnerInput>
  }

  export type EmbyServerUpdateWithWhereUniqueWithoutOwnerInput = {
    where: EmbyServerWhereUniqueInput
    data: XOR<EmbyServerUpdateWithoutOwnerInput, EmbyServerUncheckedUpdateWithoutOwnerInput>
  }

  export type EmbyServerUpdateManyWithWhereWithoutOwnerInput = {
    where: EmbyServerScalarWhereInput
    data: XOR<EmbyServerUpdateManyMutationInput, EmbyServerUncheckedUpdateManyWithoutOwnerInput>
  }

  export type EmbyServerScalarWhereInput = {
    AND?: EmbyServerScalarWhereInput | EmbyServerScalarWhereInput[]
    OR?: EmbyServerScalarWhereInput[]
    NOT?: EmbyServerScalarWhereInput | EmbyServerScalarWhereInput[]
    id?: StringFilter<"EmbyServer"> | string
    name?: StringFilter<"EmbyServer"> | string
    baseUrl?: StringFilter<"EmbyServer"> | string
    apiKey?: StringFilter<"EmbyServer"> | string
    ownerUserId?: StringNullableFilter<"EmbyServer"> | string | null
    maxUsers?: IntFilter<"EmbyServer"> | number
    referenceUserId?: StringNullableFilter<"EmbyServer"> | string | null
    createdAt?: DateTimeFilter<"EmbyServer"> | Date | string
    updatedAt?: DateTimeFilter<"EmbyServer"> | Date | string
  }

  export type CreditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: CreditLogWhereUniqueInput
    update: XOR<CreditLogUpdateWithoutActorInput, CreditLogUncheckedUpdateWithoutActorInput>
    create: XOR<CreditLogCreateWithoutActorInput, CreditLogUncheckedCreateWithoutActorInput>
  }

  export type CreditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: CreditLogWhereUniqueInput
    data: XOR<CreditLogUpdateWithoutActorInput, CreditLogUncheckedUpdateWithoutActorInput>
  }

  export type CreditLogUpdateManyWithWhereWithoutActorInput = {
    where: CreditLogScalarWhereInput
    data: XOR<CreditLogUpdateManyMutationInput, CreditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type CreditLogScalarWhereInput = {
    AND?: CreditLogScalarWhereInput | CreditLogScalarWhereInput[]
    OR?: CreditLogScalarWhereInput[]
    NOT?: CreditLogScalarWhereInput | CreditLogScalarWhereInput[]
    id?: StringFilter<"CreditLog"> | string
    actorUserId?: StringFilter<"CreditLog"> | string
    delta?: IntFilter<"CreditLog"> | number
    reason?: StringNullableFilter<"CreditLog"> | string | null
    targetUserId?: StringNullableFilter<"CreditLog"> | string | null
    createdAt?: DateTimeFilter<"CreditLog"> | Date | string
  }

  export type CreditLogUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: CreditLogWhereUniqueInput
    update: XOR<CreditLogUpdateWithoutTargetUserInput, CreditLogUncheckedUpdateWithoutTargetUserInput>
    create: XOR<CreditLogCreateWithoutTargetUserInput, CreditLogUncheckedCreateWithoutTargetUserInput>
  }

  export type CreditLogUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: CreditLogWhereUniqueInput
    data: XOR<CreditLogUpdateWithoutTargetUserInput, CreditLogUncheckedUpdateWithoutTargetUserInput>
  }

  export type CreditLogUpdateManyWithWhereWithoutTargetUserInput = {
    where: CreditLogScalarWhereInput
    data: XOR<CreditLogUpdateManyMutationInput, CreditLogUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type UserServerLinkUpsertWithWhereUniqueWithoutSuspendedByInput = {
    where: UserServerLinkWhereUniqueInput
    update: XOR<UserServerLinkUpdateWithoutSuspendedByInput, UserServerLinkUncheckedUpdateWithoutSuspendedByInput>
    create: XOR<UserServerLinkCreateWithoutSuspendedByInput, UserServerLinkUncheckedCreateWithoutSuspendedByInput>
  }

  export type UserServerLinkUpdateWithWhereUniqueWithoutSuspendedByInput = {
    where: UserServerLinkWhereUniqueInput
    data: XOR<UserServerLinkUpdateWithoutSuspendedByInput, UserServerLinkUncheckedUpdateWithoutSuspendedByInput>
  }

  export type UserServerLinkUpdateManyWithWhereWithoutSuspendedByInput = {
    where: UserServerLinkScalarWhereInput
    data: XOR<UserServerLinkUpdateManyMutationInput, UserServerLinkUncheckedUpdateManyWithoutSuspendedByInput>
  }

  export type UserServerLinkScalarWhereInput = {
    AND?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
    OR?: UserServerLinkScalarWhereInput[]
    NOT?: UserServerLinkScalarWhereInput | UserServerLinkScalarWhereInput[]
    id?: StringFilter<"UserServerLink"> | string
    embyUserId?: StringFilter<"UserServerLink"> | string
    serverId?: StringFilter<"UserServerLink"> | string
    packageId?: StringNullableFilter<"UserServerLink"> | string | null
    status?: EnumAccountStatusFilter<"UserServerLink"> | $Enums.AccountStatus
    startAt?: DateTimeFilter<"UserServerLink"> | Date | string
    expireAt?: DateTimeNullableFilter<"UserServerLink"> | Date | string | null
    suspendedAt?: DateTimeNullableFilter<"UserServerLink"> | Date | string | null
    suspendedById?: StringNullableFilter<"UserServerLink"> | string | null
    creditsAllocated?: IntFilter<"UserServerLink"> | number
    creditsUsed?: IntFilter<"UserServerLink"> | number
    creditsRemaining?: IntFilter<"UserServerLink"> | number
    creditType?: StringFilter<"UserServerLink"> | string
    demoHours?: IntNullableFilter<"UserServerLink"> | number | null
    isDemo?: BoolFilter<"UserServerLink"> | boolean
    createdAt?: DateTimeFilter<"UserServerLink"> | Date | string
    updatedAt?: DateTimeFilter<"UserServerLink"> | Date | string
  }

  export type UserServerLinkCreateWithoutEmbyUserInput = {
    id?: string
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    server: EmbyServerCreateNestedOneWithoutUserLinksInput
    package?: PackageCreateNestedOneWithoutUserLinksInput
    suspendedBy?: UserCreateNestedOneWithoutSuspendedLinksInput
    embyAccount?: EmbyAccountCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkUncheckedCreateWithoutEmbyUserInput = {
    id?: string
    serverId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyAccount?: EmbyAccountUncheckedCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkCreateOrConnectWithoutEmbyUserInput = {
    where: UserServerLinkWhereUniqueInput
    create: XOR<UserServerLinkCreateWithoutEmbyUserInput, UserServerLinkUncheckedCreateWithoutEmbyUserInput>
  }

  export type UserServerLinkCreateManyEmbyUserInputEnvelope = {
    data: UserServerLinkCreateManyEmbyUserInput | UserServerLinkCreateManyEmbyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmbyAccountCreateWithoutEmbyUserInput = {
    id?: string
    embyUserIdInternal: string
    embyUsername: string
    createdAt?: Date | string
    updatedAt?: Date | string
    server: EmbyServerCreateNestedOneWithoutEmbyAccountsInput
    userServerLink?: UserServerLinkCreateNestedOneWithoutEmbyAccountInput
  }

  export type EmbyAccountUncheckedCreateWithoutEmbyUserInput = {
    id?: string
    serverId: string
    embyUserIdInternal: string
    embyUsername: string
    userServerLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyAccountCreateOrConnectWithoutEmbyUserInput = {
    where: EmbyAccountWhereUniqueInput
    create: XOR<EmbyAccountCreateWithoutEmbyUserInput, EmbyAccountUncheckedCreateWithoutEmbyUserInput>
  }

  export type EmbyAccountCreateManyEmbyUserInputEnvelope = {
    data: EmbyAccountCreateManyEmbyUserInput | EmbyAccountCreateManyEmbyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserServerLinkUpsertWithWhereUniqueWithoutEmbyUserInput = {
    where: UserServerLinkWhereUniqueInput
    update: XOR<UserServerLinkUpdateWithoutEmbyUserInput, UserServerLinkUncheckedUpdateWithoutEmbyUserInput>
    create: XOR<UserServerLinkCreateWithoutEmbyUserInput, UserServerLinkUncheckedCreateWithoutEmbyUserInput>
  }

  export type UserServerLinkUpdateWithWhereUniqueWithoutEmbyUserInput = {
    where: UserServerLinkWhereUniqueInput
    data: XOR<UserServerLinkUpdateWithoutEmbyUserInput, UserServerLinkUncheckedUpdateWithoutEmbyUserInput>
  }

  export type UserServerLinkUpdateManyWithWhereWithoutEmbyUserInput = {
    where: UserServerLinkScalarWhereInput
    data: XOR<UserServerLinkUpdateManyMutationInput, UserServerLinkUncheckedUpdateManyWithoutEmbyUserInput>
  }

  export type EmbyAccountUpsertWithWhereUniqueWithoutEmbyUserInput = {
    where: EmbyAccountWhereUniqueInput
    update: XOR<EmbyAccountUpdateWithoutEmbyUserInput, EmbyAccountUncheckedUpdateWithoutEmbyUserInput>
    create: XOR<EmbyAccountCreateWithoutEmbyUserInput, EmbyAccountUncheckedCreateWithoutEmbyUserInput>
  }

  export type EmbyAccountUpdateWithWhereUniqueWithoutEmbyUserInput = {
    where: EmbyAccountWhereUniqueInput
    data: XOR<EmbyAccountUpdateWithoutEmbyUserInput, EmbyAccountUncheckedUpdateWithoutEmbyUserInput>
  }

  export type EmbyAccountUpdateManyWithWhereWithoutEmbyUserInput = {
    where: EmbyAccountScalarWhereInput
    data: XOR<EmbyAccountUpdateManyMutationInput, EmbyAccountUncheckedUpdateManyWithoutEmbyUserInput>
  }

  export type EmbyAccountScalarWhereInput = {
    AND?: EmbyAccountScalarWhereInput | EmbyAccountScalarWhereInput[]
    OR?: EmbyAccountScalarWhereInput[]
    NOT?: EmbyAccountScalarWhereInput | EmbyAccountScalarWhereInput[]
    id?: StringFilter<"EmbyAccount"> | string
    embyUserId?: StringFilter<"EmbyAccount"> | string
    serverId?: StringFilter<"EmbyAccount"> | string
    embyUserIdInternal?: StringFilter<"EmbyAccount"> | string
    embyUsername?: StringFilter<"EmbyAccount"> | string
    userServerLinkId?: StringNullableFilter<"EmbyAccount"> | string | null
    createdAt?: DateTimeFilter<"EmbyAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EmbyAccount"> | Date | string
  }

  export type UserCreateWithoutResellerTierInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    creditBalance?: CreditBalanceCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkCreateNestedManyWithoutSuspendedByInput
  }

  export type UserUncheckedCreateWithoutResellerTierInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    creditBalance?: CreditBalanceUncheckedCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerUncheckedCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogUncheckedCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogUncheckedCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkUncheckedCreateNestedManyWithoutSuspendedByInput
  }

  export type UserCreateOrConnectWithoutResellerTierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResellerTierInput, UserUncheckedCreateWithoutResellerTierInput>
  }

  export type UserCreateManyResellerTierInputEnvelope = {
    data: UserCreateManyResellerTierInput | UserCreateManyResellerTierInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutResellerTierInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutResellerTierInput, UserUncheckedUpdateWithoutResellerTierInput>
    create: XOR<UserCreateWithoutResellerTierInput, UserUncheckedCreateWithoutResellerTierInput>
  }

  export type UserUpdateWithWhereUniqueWithoutResellerTierInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutResellerTierInput, UserUncheckedUpdateWithoutResellerTierInput>
  }

  export type UserUpdateManyWithWhereWithoutResellerTierInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutResellerTierInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNameFilter<"User"> | $Enums.RoleName
    defaultDomain?: StringNullableFilter<"User"> | string | null
    resellerTierId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    suspensionUntil?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserCreateWithoutCreditBalanceInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    resellerTier?: ResellerTierCreateNestedOneWithoutUsersInput
    ownedServers?: EmbyServerCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkCreateNestedManyWithoutSuspendedByInput
  }

  export type UserUncheckedCreateWithoutCreditBalanceInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    resellerTierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    ownedServers?: EmbyServerUncheckedCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogUncheckedCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogUncheckedCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkUncheckedCreateNestedManyWithoutSuspendedByInput
  }

  export type UserCreateOrConnectWithoutCreditBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditBalanceInput, UserUncheckedCreateWithoutCreditBalanceInput>
  }

  export type UserUpsertWithoutCreditBalanceInput = {
    update: XOR<UserUpdateWithoutCreditBalanceInput, UserUncheckedUpdateWithoutCreditBalanceInput>
    create: XOR<UserCreateWithoutCreditBalanceInput, UserUncheckedCreateWithoutCreditBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditBalanceInput, UserUncheckedUpdateWithoutCreditBalanceInput>
  }

  export type UserUpdateWithoutCreditBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resellerTier?: ResellerTierUpdateOneWithoutUsersNestedInput
    ownedServers?: EmbyServerUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    resellerTierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedServers?: EmbyServerUncheckedUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUncheckedUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUncheckedUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUncheckedUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserCreateWithoutCreditLogsAuthoredInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    resellerTier?: ResellerTierCreateNestedOneWithoutUsersInput
    creditBalance?: CreditBalanceCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerCreateNestedManyWithoutOwnerInput
    creditLogsTargeted?: CreditLogCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkCreateNestedManyWithoutSuspendedByInput
  }

  export type UserUncheckedCreateWithoutCreditLogsAuthoredInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    resellerTierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    creditBalance?: CreditBalanceUncheckedCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerUncheckedCreateNestedManyWithoutOwnerInput
    creditLogsTargeted?: CreditLogUncheckedCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkUncheckedCreateNestedManyWithoutSuspendedByInput
  }

  export type UserCreateOrConnectWithoutCreditLogsAuthoredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditLogsAuthoredInput, UserUncheckedCreateWithoutCreditLogsAuthoredInput>
  }

  export type UserCreateWithoutCreditLogsTargetedInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    resellerTier?: ResellerTierCreateNestedOneWithoutUsersInput
    creditBalance?: CreditBalanceCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogCreateNestedManyWithoutActorInput
    suspendedLinks?: UserServerLinkCreateNestedManyWithoutSuspendedByInput
  }

  export type UserUncheckedCreateWithoutCreditLogsTargetedInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    resellerTierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    creditBalance?: CreditBalanceUncheckedCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerUncheckedCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogUncheckedCreateNestedManyWithoutActorInput
    suspendedLinks?: UserServerLinkUncheckedCreateNestedManyWithoutSuspendedByInput
  }

  export type UserCreateOrConnectWithoutCreditLogsTargetedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditLogsTargetedInput, UserUncheckedCreateWithoutCreditLogsTargetedInput>
  }

  export type UserUpsertWithoutCreditLogsAuthoredInput = {
    update: XOR<UserUpdateWithoutCreditLogsAuthoredInput, UserUncheckedUpdateWithoutCreditLogsAuthoredInput>
    create: XOR<UserCreateWithoutCreditLogsAuthoredInput, UserUncheckedCreateWithoutCreditLogsAuthoredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditLogsAuthoredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditLogsAuthoredInput, UserUncheckedUpdateWithoutCreditLogsAuthoredInput>
  }

  export type UserUpdateWithoutCreditLogsAuthoredInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resellerTier?: ResellerTierUpdateOneWithoutUsersNestedInput
    creditBalance?: CreditBalanceUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUpdateManyWithoutOwnerNestedInput
    creditLogsTargeted?: CreditLogUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditLogsAuthoredInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    resellerTierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditBalance?: CreditBalanceUncheckedUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUncheckedUpdateManyWithoutOwnerNestedInput
    creditLogsTargeted?: CreditLogUncheckedUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUncheckedUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserUpsertWithoutCreditLogsTargetedInput = {
    update: XOR<UserUpdateWithoutCreditLogsTargetedInput, UserUncheckedUpdateWithoutCreditLogsTargetedInput>
    create: XOR<UserCreateWithoutCreditLogsTargetedInput, UserUncheckedCreateWithoutCreditLogsTargetedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditLogsTargetedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditLogsTargetedInput, UserUncheckedUpdateWithoutCreditLogsTargetedInput>
  }

  export type UserUpdateWithoutCreditLogsTargetedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resellerTier?: ResellerTierUpdateOneWithoutUsersNestedInput
    creditBalance?: CreditBalanceUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUpdateManyWithoutActorNestedInput
    suspendedLinks?: UserServerLinkUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditLogsTargetedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    resellerTierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditBalance?: CreditBalanceUncheckedUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUncheckedUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUncheckedUpdateManyWithoutActorNestedInput
    suspendedLinks?: UserServerLinkUncheckedUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserCreateWithoutOwnedServersInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    resellerTier?: ResellerTierCreateNestedOneWithoutUsersInput
    creditBalance?: CreditBalanceCreateNestedOneWithoutUserInput
    creditLogsAuthored?: CreditLogCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkCreateNestedManyWithoutSuspendedByInput
  }

  export type UserUncheckedCreateWithoutOwnedServersInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    resellerTierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    creditBalance?: CreditBalanceUncheckedCreateNestedOneWithoutUserInput
    creditLogsAuthored?: CreditLogUncheckedCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogUncheckedCreateNestedManyWithoutTargetUserInput
    suspendedLinks?: UserServerLinkUncheckedCreateNestedManyWithoutSuspendedByInput
  }

  export type UserCreateOrConnectWithoutOwnedServersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedServersInput, UserUncheckedCreateWithoutOwnedServersInput>
  }

  export type PackageCreateWithoutServerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    libraries?: PackageLibraryCreateNestedManyWithoutPackageInput
    userLinks?: UserServerLinkCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutServerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    libraries?: PackageLibraryUncheckedCreateNestedManyWithoutPackageInput
    userLinks?: UserServerLinkUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutServerInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutServerInput, PackageUncheckedCreateWithoutServerInput>
  }

  export type PackageCreateManyServerInputEnvelope = {
    data: PackageCreateManyServerInput | PackageCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type UserServerLinkCreateWithoutServerInput = {
    id?: string
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyUser: EmbyUserCreateNestedOneWithoutUserServerLinksInput
    package?: PackageCreateNestedOneWithoutUserLinksInput
    suspendedBy?: UserCreateNestedOneWithoutSuspendedLinksInput
    embyAccount?: EmbyAccountCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkUncheckedCreateWithoutServerInput = {
    id?: string
    embyUserId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyAccount?: EmbyAccountUncheckedCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkCreateOrConnectWithoutServerInput = {
    where: UserServerLinkWhereUniqueInput
    create: XOR<UserServerLinkCreateWithoutServerInput, UserServerLinkUncheckedCreateWithoutServerInput>
  }

  export type UserServerLinkCreateManyServerInputEnvelope = {
    data: UserServerLinkCreateManyServerInput | UserServerLinkCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type EmbyAccountCreateWithoutServerInput = {
    id?: string
    embyUserIdInternal: string
    embyUsername: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embyUser: EmbyUserCreateNestedOneWithoutEmbyAccountsInput
    userServerLink?: UserServerLinkCreateNestedOneWithoutEmbyAccountInput
  }

  export type EmbyAccountUncheckedCreateWithoutServerInput = {
    id?: string
    embyUserId: string
    embyUserIdInternal: string
    embyUsername: string
    userServerLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyAccountCreateOrConnectWithoutServerInput = {
    where: EmbyAccountWhereUniqueInput
    create: XOR<EmbyAccountCreateWithoutServerInput, EmbyAccountUncheckedCreateWithoutServerInput>
  }

  export type EmbyAccountCreateManyServerInputEnvelope = {
    data: EmbyAccountCreateManyServerInput | EmbyAccountCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type UserPolicyCreateWithoutServerInput = {
    id?: string
    name: string
    description?: string | null
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: number
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: number
    maxActiveSessions?: number
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: number
    syncPlayAccess?: string
    enableSchedule?: boolean
    scheduleStart?: string | null
    scheduleEnd?: string | null
    blockedTags?: string | null
    blockedMediaFolders?: string | null
    blockedChannels?: string | null
    accessSchedules?: string | null
    blockUnratedItems?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPolicyUncheckedCreateWithoutServerInput = {
    id?: string
    name: string
    description?: string | null
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: number
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: number
    maxActiveSessions?: number
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: number
    syncPlayAccess?: string
    enableSchedule?: boolean
    scheduleStart?: string | null
    scheduleEnd?: string | null
    blockedTags?: string | null
    blockedMediaFolders?: string | null
    blockedChannels?: string | null
    accessSchedules?: string | null
    blockUnratedItems?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPolicyCreateOrConnectWithoutServerInput = {
    where: UserPolicyWhereUniqueInput
    create: XOR<UserPolicyCreateWithoutServerInput, UserPolicyUncheckedCreateWithoutServerInput>
  }

  export type UserPolicyCreateManyServerInputEnvelope = {
    data: UserPolicyCreateManyServerInput | UserPolicyCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedServersInput = {
    update: XOR<UserUpdateWithoutOwnedServersInput, UserUncheckedUpdateWithoutOwnedServersInput>
    create: XOR<UserCreateWithoutOwnedServersInput, UserUncheckedCreateWithoutOwnedServersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedServersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedServersInput, UserUncheckedUpdateWithoutOwnedServersInput>
  }

  export type UserUpdateWithoutOwnedServersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resellerTier?: ResellerTierUpdateOneWithoutUsersNestedInput
    creditBalance?: CreditBalanceUpdateOneWithoutUserNestedInput
    creditLogsAuthored?: CreditLogUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedServersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    resellerTierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditBalance?: CreditBalanceUncheckedUpdateOneWithoutUserNestedInput
    creditLogsAuthored?: CreditLogUncheckedUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUncheckedUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUncheckedUpdateManyWithoutSuspendedByNestedInput
  }

  export type PackageUpsertWithWhereUniqueWithoutServerInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutServerInput, PackageUncheckedUpdateWithoutServerInput>
    create: XOR<PackageCreateWithoutServerInput, PackageUncheckedCreateWithoutServerInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutServerInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutServerInput, PackageUncheckedUpdateWithoutServerInput>
  }

  export type PackageUpdateManyWithWhereWithoutServerInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutServerInput>
  }

  export type PackageScalarWhereInput = {
    AND?: PackageScalarWhereInput | PackageScalarWhereInput[]
    OR?: PackageScalarWhereInput[]
    NOT?: PackageScalarWhereInput | PackageScalarWhereInput[]
    id?: StringFilter<"Package"> | string
    serverId?: StringFilter<"Package"> | string
    name?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
  }

  export type UserServerLinkUpsertWithWhereUniqueWithoutServerInput = {
    where: UserServerLinkWhereUniqueInput
    update: XOR<UserServerLinkUpdateWithoutServerInput, UserServerLinkUncheckedUpdateWithoutServerInput>
    create: XOR<UserServerLinkCreateWithoutServerInput, UserServerLinkUncheckedCreateWithoutServerInput>
  }

  export type UserServerLinkUpdateWithWhereUniqueWithoutServerInput = {
    where: UserServerLinkWhereUniqueInput
    data: XOR<UserServerLinkUpdateWithoutServerInput, UserServerLinkUncheckedUpdateWithoutServerInput>
  }

  export type UserServerLinkUpdateManyWithWhereWithoutServerInput = {
    where: UserServerLinkScalarWhereInput
    data: XOR<UserServerLinkUpdateManyMutationInput, UserServerLinkUncheckedUpdateManyWithoutServerInput>
  }

  export type EmbyAccountUpsertWithWhereUniqueWithoutServerInput = {
    where: EmbyAccountWhereUniqueInput
    update: XOR<EmbyAccountUpdateWithoutServerInput, EmbyAccountUncheckedUpdateWithoutServerInput>
    create: XOR<EmbyAccountCreateWithoutServerInput, EmbyAccountUncheckedCreateWithoutServerInput>
  }

  export type EmbyAccountUpdateWithWhereUniqueWithoutServerInput = {
    where: EmbyAccountWhereUniqueInput
    data: XOR<EmbyAccountUpdateWithoutServerInput, EmbyAccountUncheckedUpdateWithoutServerInput>
  }

  export type EmbyAccountUpdateManyWithWhereWithoutServerInput = {
    where: EmbyAccountScalarWhereInput
    data: XOR<EmbyAccountUpdateManyMutationInput, EmbyAccountUncheckedUpdateManyWithoutServerInput>
  }

  export type UserPolicyUpsertWithWhereUniqueWithoutServerInput = {
    where: UserPolicyWhereUniqueInput
    update: XOR<UserPolicyUpdateWithoutServerInput, UserPolicyUncheckedUpdateWithoutServerInput>
    create: XOR<UserPolicyCreateWithoutServerInput, UserPolicyUncheckedCreateWithoutServerInput>
  }

  export type UserPolicyUpdateWithWhereUniqueWithoutServerInput = {
    where: UserPolicyWhereUniqueInput
    data: XOR<UserPolicyUpdateWithoutServerInput, UserPolicyUncheckedUpdateWithoutServerInput>
  }

  export type UserPolicyUpdateManyWithWhereWithoutServerInput = {
    where: UserPolicyScalarWhereInput
    data: XOR<UserPolicyUpdateManyMutationInput, UserPolicyUncheckedUpdateManyWithoutServerInput>
  }

  export type UserPolicyScalarWhereInput = {
    AND?: UserPolicyScalarWhereInput | UserPolicyScalarWhereInput[]
    OR?: UserPolicyScalarWhereInput[]
    NOT?: UserPolicyScalarWhereInput | UserPolicyScalarWhereInput[]
    id?: StringFilter<"UserPolicy"> | string
    name?: StringFilter<"UserPolicy"> | string
    description?: StringNullableFilter<"UserPolicy"> | string | null
    isTemplate?: BoolFilter<"UserPolicy"> | boolean
    isAdministrator?: BoolFilter<"UserPolicy"> | boolean
    isHidden?: BoolFilter<"UserPolicy"> | boolean
    isDisabled?: BoolFilter<"UserPolicy"> | boolean
    maxParentalRating?: IntFilter<"UserPolicy"> | number
    enableUserPreferenceAccess?: BoolFilter<"UserPolicy"> | boolean
    enableAudioPlaybackTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableVideoPlaybackTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enablePlaybackRemuxing?: BoolFilter<"UserPolicy"> | boolean
    forceRemoteSourceTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableSyncTranscoding?: BoolFilter<"UserPolicy"> | boolean
    enableMediaConversion?: BoolFilter<"UserPolicy"> | boolean
    enableContentDownloading?: BoolFilter<"UserPolicy"> | boolean
    enableContentDeletion?: BoolFilter<"UserPolicy"> | boolean
    enableCameraUpload?: BoolFilter<"UserPolicy"> | boolean
    enableRemoteAccess?: BoolFilter<"UserPolicy"> | boolean
    enableMediaPlayback?: BoolFilter<"UserPolicy"> | boolean
    remoteClientBitrateLimit?: IntFilter<"UserPolicy"> | number
    maxActiveSessions?: IntFilter<"UserPolicy"> | number
    enableAllDevices?: BoolFilter<"UserPolicy"> | boolean
    enableLiveTvManagement?: BoolFilter<"UserPolicy"> | boolean
    enableLiveTvAccess?: BoolFilter<"UserPolicy"> | boolean
    enableAllChannels?: BoolFilter<"UserPolicy"> | boolean
    enableRemoteControlOfOtherUsers?: BoolFilter<"UserPolicy"> | boolean
    enableSharedDeviceControl?: BoolFilter<"UserPolicy"> | boolean
    enablePublicSharing?: BoolFilter<"UserPolicy"> | boolean
    enableAllFolders?: BoolFilter<"UserPolicy"> | boolean
    loginAttemptsBeforeLockout?: IntFilter<"UserPolicy"> | number
    syncPlayAccess?: StringFilter<"UserPolicy"> | string
    enableSchedule?: BoolFilter<"UserPolicy"> | boolean
    scheduleStart?: StringNullableFilter<"UserPolicy"> | string | null
    scheduleEnd?: StringNullableFilter<"UserPolicy"> | string | null
    blockedTags?: StringNullableFilter<"UserPolicy"> | string | null
    blockedMediaFolders?: StringNullableFilter<"UserPolicy"> | string | null
    blockedChannels?: StringNullableFilter<"UserPolicy"> | string | null
    accessSchedules?: StringNullableFilter<"UserPolicy"> | string | null
    blockUnratedItems?: StringNullableFilter<"UserPolicy"> | string | null
    serverId?: StringNullableFilter<"UserPolicy"> | string | null
    createdAt?: DateTimeFilter<"UserPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"UserPolicy"> | Date | string
  }

  export type EmbyServerCreateWithoutPackagesInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedServersInput
    userLinks?: UserServerLinkCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyCreateNestedManyWithoutServerInput
  }

  export type EmbyServerUncheckedCreateWithoutPackagesInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    ownerUserId?: string | null
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userLinks?: UserServerLinkUncheckedCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountUncheckedCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyUncheckedCreateNestedManyWithoutServerInput
  }

  export type EmbyServerCreateOrConnectWithoutPackagesInput = {
    where: EmbyServerWhereUniqueInput
    create: XOR<EmbyServerCreateWithoutPackagesInput, EmbyServerUncheckedCreateWithoutPackagesInput>
  }

  export type PackageLibraryCreateWithoutPackageInput = {
    id?: string
    libraryId?: string | null
    libraryName?: string | null
  }

  export type PackageLibraryUncheckedCreateWithoutPackageInput = {
    id?: string
    libraryId?: string | null
    libraryName?: string | null
  }

  export type PackageLibraryCreateOrConnectWithoutPackageInput = {
    where: PackageLibraryWhereUniqueInput
    create: XOR<PackageLibraryCreateWithoutPackageInput, PackageLibraryUncheckedCreateWithoutPackageInput>
  }

  export type PackageLibraryCreateManyPackageInputEnvelope = {
    data: PackageLibraryCreateManyPackageInput | PackageLibraryCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type UserServerLinkCreateWithoutPackageInput = {
    id?: string
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyUser: EmbyUserCreateNestedOneWithoutUserServerLinksInput
    server: EmbyServerCreateNestedOneWithoutUserLinksInput
    suspendedBy?: UserCreateNestedOneWithoutSuspendedLinksInput
    embyAccount?: EmbyAccountCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkUncheckedCreateWithoutPackageInput = {
    id?: string
    embyUserId: string
    serverId: string
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyAccount?: EmbyAccountUncheckedCreateNestedOneWithoutUserServerLinkInput
  }

  export type UserServerLinkCreateOrConnectWithoutPackageInput = {
    where: UserServerLinkWhereUniqueInput
    create: XOR<UserServerLinkCreateWithoutPackageInput, UserServerLinkUncheckedCreateWithoutPackageInput>
  }

  export type UserServerLinkCreateManyPackageInputEnvelope = {
    data: UserServerLinkCreateManyPackageInput | UserServerLinkCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type EmbyServerUpsertWithoutPackagesInput = {
    update: XOR<EmbyServerUpdateWithoutPackagesInput, EmbyServerUncheckedUpdateWithoutPackagesInput>
    create: XOR<EmbyServerCreateWithoutPackagesInput, EmbyServerUncheckedCreateWithoutPackagesInput>
    where?: EmbyServerWhereInput
  }

  export type EmbyServerUpdateToOneWithWhereWithoutPackagesInput = {
    where?: EmbyServerWhereInput
    data: XOR<EmbyServerUpdateWithoutPackagesInput, EmbyServerUncheckedUpdateWithoutPackagesInput>
  }

  export type EmbyServerUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedServersNestedInput
    userLinks?: UserServerLinkUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerUncheckedUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLinks?: UserServerLinkUncheckedUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUncheckedUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUncheckedUpdateManyWithoutServerNestedInput
  }

  export type PackageLibraryUpsertWithWhereUniqueWithoutPackageInput = {
    where: PackageLibraryWhereUniqueInput
    update: XOR<PackageLibraryUpdateWithoutPackageInput, PackageLibraryUncheckedUpdateWithoutPackageInput>
    create: XOR<PackageLibraryCreateWithoutPackageInput, PackageLibraryUncheckedCreateWithoutPackageInput>
  }

  export type PackageLibraryUpdateWithWhereUniqueWithoutPackageInput = {
    where: PackageLibraryWhereUniqueInput
    data: XOR<PackageLibraryUpdateWithoutPackageInput, PackageLibraryUncheckedUpdateWithoutPackageInput>
  }

  export type PackageLibraryUpdateManyWithWhereWithoutPackageInput = {
    where: PackageLibraryScalarWhereInput
    data: XOR<PackageLibraryUpdateManyMutationInput, PackageLibraryUncheckedUpdateManyWithoutPackageInput>
  }

  export type PackageLibraryScalarWhereInput = {
    AND?: PackageLibraryScalarWhereInput | PackageLibraryScalarWhereInput[]
    OR?: PackageLibraryScalarWhereInput[]
    NOT?: PackageLibraryScalarWhereInput | PackageLibraryScalarWhereInput[]
    id?: StringFilter<"PackageLibrary"> | string
    packageId?: StringFilter<"PackageLibrary"> | string
    libraryId?: StringNullableFilter<"PackageLibrary"> | string | null
    libraryName?: StringNullableFilter<"PackageLibrary"> | string | null
  }

  export type UserServerLinkUpsertWithWhereUniqueWithoutPackageInput = {
    where: UserServerLinkWhereUniqueInput
    update: XOR<UserServerLinkUpdateWithoutPackageInput, UserServerLinkUncheckedUpdateWithoutPackageInput>
    create: XOR<UserServerLinkCreateWithoutPackageInput, UserServerLinkUncheckedCreateWithoutPackageInput>
  }

  export type UserServerLinkUpdateWithWhereUniqueWithoutPackageInput = {
    where: UserServerLinkWhereUniqueInput
    data: XOR<UserServerLinkUpdateWithoutPackageInput, UserServerLinkUncheckedUpdateWithoutPackageInput>
  }

  export type UserServerLinkUpdateManyWithWhereWithoutPackageInput = {
    where: UserServerLinkScalarWhereInput
    data: XOR<UserServerLinkUpdateManyMutationInput, UserServerLinkUncheckedUpdateManyWithoutPackageInput>
  }

  export type PackageCreateWithoutLibrariesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    server: EmbyServerCreateNestedOneWithoutPackagesInput
    userLinks?: UserServerLinkCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutLibrariesInput = {
    id?: string
    serverId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userLinks?: UserServerLinkUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutLibrariesInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutLibrariesInput, PackageUncheckedCreateWithoutLibrariesInput>
  }

  export type PackageUpsertWithoutLibrariesInput = {
    update: XOR<PackageUpdateWithoutLibrariesInput, PackageUncheckedUpdateWithoutLibrariesInput>
    create: XOR<PackageCreateWithoutLibrariesInput, PackageUncheckedCreateWithoutLibrariesInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutLibrariesInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutLibrariesInput, PackageUncheckedUpdateWithoutLibrariesInput>
  }

  export type PackageUpdateWithoutLibrariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: EmbyServerUpdateOneRequiredWithoutPackagesNestedInput
    userLinks?: UserServerLinkUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutLibrariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLinks?: UserServerLinkUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type EmbyUserCreateWithoutUserServerLinksInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embyAccounts?: EmbyAccountCreateNestedManyWithoutEmbyUserInput
  }

  export type EmbyUserUncheckedCreateWithoutUserServerLinksInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embyAccounts?: EmbyAccountUncheckedCreateNestedManyWithoutEmbyUserInput
  }

  export type EmbyUserCreateOrConnectWithoutUserServerLinksInput = {
    where: EmbyUserWhereUniqueInput
    create: XOR<EmbyUserCreateWithoutUserServerLinksInput, EmbyUserUncheckedCreateWithoutUserServerLinksInput>
  }

  export type EmbyServerCreateWithoutUserLinksInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedServersInput
    packages?: PackageCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyCreateNestedManyWithoutServerInput
  }

  export type EmbyServerUncheckedCreateWithoutUserLinksInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    ownerUserId?: string | null
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    packages?: PackageUncheckedCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountUncheckedCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyUncheckedCreateNestedManyWithoutServerInput
  }

  export type EmbyServerCreateOrConnectWithoutUserLinksInput = {
    where: EmbyServerWhereUniqueInput
    create: XOR<EmbyServerCreateWithoutUserLinksInput, EmbyServerUncheckedCreateWithoutUserLinksInput>
  }

  export type PackageCreateWithoutUserLinksInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    server: EmbyServerCreateNestedOneWithoutPackagesInput
    libraries?: PackageLibraryCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutUserLinksInput = {
    id?: string
    serverId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    libraries?: PackageLibraryUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutUserLinksInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutUserLinksInput, PackageUncheckedCreateWithoutUserLinksInput>
  }

  export type UserCreateWithoutSuspendedLinksInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    resellerTier?: ResellerTierCreateNestedOneWithoutUsersInput
    creditBalance?: CreditBalanceCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutSuspendedLinksInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    resellerTierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
    creditBalance?: CreditBalanceUncheckedCreateNestedOneWithoutUserInput
    ownedServers?: EmbyServerUncheckedCreateNestedManyWithoutOwnerInput
    creditLogsAuthored?: CreditLogUncheckedCreateNestedManyWithoutActorInput
    creditLogsTargeted?: CreditLogUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutSuspendedLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuspendedLinksInput, UserUncheckedCreateWithoutSuspendedLinksInput>
  }

  export type EmbyAccountCreateWithoutUserServerLinkInput = {
    id?: string
    embyUserIdInternal: string
    embyUsername: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embyUser: EmbyUserCreateNestedOneWithoutEmbyAccountsInput
    server: EmbyServerCreateNestedOneWithoutEmbyAccountsInput
  }

  export type EmbyAccountUncheckedCreateWithoutUserServerLinkInput = {
    id?: string
    embyUserId: string
    serverId: string
    embyUserIdInternal: string
    embyUsername: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyAccountCreateOrConnectWithoutUserServerLinkInput = {
    where: EmbyAccountWhereUniqueInput
    create: XOR<EmbyAccountCreateWithoutUserServerLinkInput, EmbyAccountUncheckedCreateWithoutUserServerLinkInput>
  }

  export type EmbyUserUpsertWithoutUserServerLinksInput = {
    update: XOR<EmbyUserUpdateWithoutUserServerLinksInput, EmbyUserUncheckedUpdateWithoutUserServerLinksInput>
    create: XOR<EmbyUserCreateWithoutUserServerLinksInput, EmbyUserUncheckedCreateWithoutUserServerLinksInput>
    where?: EmbyUserWhereInput
  }

  export type EmbyUserUpdateToOneWithWhereWithoutUserServerLinksInput = {
    where?: EmbyUserWhereInput
    data: XOR<EmbyUserUpdateWithoutUserServerLinksInput, EmbyUserUncheckedUpdateWithoutUserServerLinksInput>
  }

  export type EmbyUserUpdateWithoutUserServerLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyAccounts?: EmbyAccountUpdateManyWithoutEmbyUserNestedInput
  }

  export type EmbyUserUncheckedUpdateWithoutUserServerLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyAccounts?: EmbyAccountUncheckedUpdateManyWithoutEmbyUserNestedInput
  }

  export type EmbyServerUpsertWithoutUserLinksInput = {
    update: XOR<EmbyServerUpdateWithoutUserLinksInput, EmbyServerUncheckedUpdateWithoutUserLinksInput>
    create: XOR<EmbyServerCreateWithoutUserLinksInput, EmbyServerUncheckedCreateWithoutUserLinksInput>
    where?: EmbyServerWhereInput
  }

  export type EmbyServerUpdateToOneWithWhereWithoutUserLinksInput = {
    where?: EmbyServerWhereInput
    data: XOR<EmbyServerUpdateWithoutUserLinksInput, EmbyServerUncheckedUpdateWithoutUserLinksInput>
  }

  export type EmbyServerUpdateWithoutUserLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedServersNestedInput
    packages?: PackageUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerUncheckedUpdateWithoutUserLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: PackageUncheckedUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUncheckedUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUncheckedUpdateManyWithoutServerNestedInput
  }

  export type PackageUpsertWithoutUserLinksInput = {
    update: XOR<PackageUpdateWithoutUserLinksInput, PackageUncheckedUpdateWithoutUserLinksInput>
    create: XOR<PackageCreateWithoutUserLinksInput, PackageUncheckedCreateWithoutUserLinksInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutUserLinksInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutUserLinksInput, PackageUncheckedUpdateWithoutUserLinksInput>
  }

  export type PackageUpdateWithoutUserLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: EmbyServerUpdateOneRequiredWithoutPackagesNestedInput
    libraries?: PackageLibraryUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutUserLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraries?: PackageLibraryUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type UserUpsertWithoutSuspendedLinksInput = {
    update: XOR<UserUpdateWithoutSuspendedLinksInput, UserUncheckedUpdateWithoutSuspendedLinksInput>
    create: XOR<UserCreateWithoutSuspendedLinksInput, UserUncheckedCreateWithoutSuspendedLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuspendedLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuspendedLinksInput, UserUncheckedUpdateWithoutSuspendedLinksInput>
  }

  export type UserUpdateWithoutSuspendedLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resellerTier?: ResellerTierUpdateOneWithoutUsersNestedInput
    creditBalance?: CreditBalanceUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSuspendedLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    resellerTierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditBalance?: CreditBalanceUncheckedUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUncheckedUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUncheckedUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type EmbyAccountUpsertWithoutUserServerLinkInput = {
    update: XOR<EmbyAccountUpdateWithoutUserServerLinkInput, EmbyAccountUncheckedUpdateWithoutUserServerLinkInput>
    create: XOR<EmbyAccountCreateWithoutUserServerLinkInput, EmbyAccountUncheckedCreateWithoutUserServerLinkInput>
    where?: EmbyAccountWhereInput
  }

  export type EmbyAccountUpdateToOneWithWhereWithoutUserServerLinkInput = {
    where?: EmbyAccountWhereInput
    data: XOR<EmbyAccountUpdateWithoutUserServerLinkInput, EmbyAccountUncheckedUpdateWithoutUserServerLinkInput>
  }

  export type EmbyAccountUpdateWithoutUserServerLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyUser?: EmbyUserUpdateOneRequiredWithoutEmbyAccountsNestedInput
    server?: EmbyServerUpdateOneRequiredWithoutEmbyAccountsNestedInput
  }

  export type EmbyAccountUncheckedUpdateWithoutUserServerLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyUserCreateWithoutEmbyAccountsInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userServerLinks?: UserServerLinkCreateNestedManyWithoutEmbyUserInput
  }

  export type EmbyUserUncheckedCreateWithoutEmbyAccountsInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userServerLinks?: UserServerLinkUncheckedCreateNestedManyWithoutEmbyUserInput
  }

  export type EmbyUserCreateOrConnectWithoutEmbyAccountsInput = {
    where: EmbyUserWhereUniqueInput
    create: XOR<EmbyUserCreateWithoutEmbyAccountsInput, EmbyUserUncheckedCreateWithoutEmbyAccountsInput>
  }

  export type EmbyServerCreateWithoutEmbyAccountsInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedServersInput
    packages?: PackageCreateNestedManyWithoutServerInput
    userLinks?: UserServerLinkCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyCreateNestedManyWithoutServerInput
  }

  export type EmbyServerUncheckedCreateWithoutEmbyAccountsInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    ownerUserId?: string | null
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    packages?: PackageUncheckedCreateNestedManyWithoutServerInput
    userLinks?: UserServerLinkUncheckedCreateNestedManyWithoutServerInput
    userPolicies?: UserPolicyUncheckedCreateNestedManyWithoutServerInput
  }

  export type EmbyServerCreateOrConnectWithoutEmbyAccountsInput = {
    where: EmbyServerWhereUniqueInput
    create: XOR<EmbyServerCreateWithoutEmbyAccountsInput, EmbyServerUncheckedCreateWithoutEmbyAccountsInput>
  }

  export type UserServerLinkCreateWithoutEmbyAccountInput = {
    id?: string
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embyUser: EmbyUserCreateNestedOneWithoutUserServerLinksInput
    server: EmbyServerCreateNestedOneWithoutUserLinksInput
    package?: PackageCreateNestedOneWithoutUserLinksInput
    suspendedBy?: UserCreateNestedOneWithoutSuspendedLinksInput
  }

  export type UserServerLinkUncheckedCreateWithoutEmbyAccountInput = {
    id?: string
    embyUserId: string
    serverId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserServerLinkCreateOrConnectWithoutEmbyAccountInput = {
    where: UserServerLinkWhereUniqueInput
    create: XOR<UserServerLinkCreateWithoutEmbyAccountInput, UserServerLinkUncheckedCreateWithoutEmbyAccountInput>
  }

  export type EmbyUserUpsertWithoutEmbyAccountsInput = {
    update: XOR<EmbyUserUpdateWithoutEmbyAccountsInput, EmbyUserUncheckedUpdateWithoutEmbyAccountsInput>
    create: XOR<EmbyUserCreateWithoutEmbyAccountsInput, EmbyUserUncheckedCreateWithoutEmbyAccountsInput>
    where?: EmbyUserWhereInput
  }

  export type EmbyUserUpdateToOneWithWhereWithoutEmbyAccountsInput = {
    where?: EmbyUserWhereInput
    data: XOR<EmbyUserUpdateWithoutEmbyAccountsInput, EmbyUserUncheckedUpdateWithoutEmbyAccountsInput>
  }

  export type EmbyUserUpdateWithoutEmbyAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userServerLinks?: UserServerLinkUpdateManyWithoutEmbyUserNestedInput
  }

  export type EmbyUserUncheckedUpdateWithoutEmbyAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userServerLinks?: UserServerLinkUncheckedUpdateManyWithoutEmbyUserNestedInput
  }

  export type EmbyServerUpsertWithoutEmbyAccountsInput = {
    update: XOR<EmbyServerUpdateWithoutEmbyAccountsInput, EmbyServerUncheckedUpdateWithoutEmbyAccountsInput>
    create: XOR<EmbyServerCreateWithoutEmbyAccountsInput, EmbyServerUncheckedCreateWithoutEmbyAccountsInput>
    where?: EmbyServerWhereInput
  }

  export type EmbyServerUpdateToOneWithWhereWithoutEmbyAccountsInput = {
    where?: EmbyServerWhereInput
    data: XOR<EmbyServerUpdateWithoutEmbyAccountsInput, EmbyServerUncheckedUpdateWithoutEmbyAccountsInput>
  }

  export type EmbyServerUpdateWithoutEmbyAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedServersNestedInput
    packages?: PackageUpdateManyWithoutServerNestedInput
    userLinks?: UserServerLinkUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerUncheckedUpdateWithoutEmbyAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: PackageUncheckedUpdateManyWithoutServerNestedInput
    userLinks?: UserServerLinkUncheckedUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUncheckedUpdateManyWithoutServerNestedInput
  }

  export type UserServerLinkUpsertWithoutEmbyAccountInput = {
    update: XOR<UserServerLinkUpdateWithoutEmbyAccountInput, UserServerLinkUncheckedUpdateWithoutEmbyAccountInput>
    create: XOR<UserServerLinkCreateWithoutEmbyAccountInput, UserServerLinkUncheckedCreateWithoutEmbyAccountInput>
    where?: UserServerLinkWhereInput
  }

  export type UserServerLinkUpdateToOneWithWhereWithoutEmbyAccountInput = {
    where?: UserServerLinkWhereInput
    data: XOR<UserServerLinkUpdateWithoutEmbyAccountInput, UserServerLinkUncheckedUpdateWithoutEmbyAccountInput>
  }

  export type UserServerLinkUpdateWithoutEmbyAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyUser?: EmbyUserUpdateOneRequiredWithoutUserServerLinksNestedInput
    server?: EmbyServerUpdateOneRequiredWithoutUserLinksNestedInput
    package?: PackageUpdateOneWithoutUserLinksNestedInput
    suspendedBy?: UserUpdateOneWithoutSuspendedLinksNestedInput
  }

  export type UserServerLinkUncheckedUpdateWithoutEmbyAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyServerCreateWithoutUserPoliciesInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedServersInput
    packages?: PackageCreateNestedManyWithoutServerInput
    userLinks?: UserServerLinkCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountCreateNestedManyWithoutServerInput
  }

  export type EmbyServerUncheckedCreateWithoutUserPoliciesInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    ownerUserId?: string | null
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    packages?: PackageUncheckedCreateNestedManyWithoutServerInput
    userLinks?: UserServerLinkUncheckedCreateNestedManyWithoutServerInput
    embyAccounts?: EmbyAccountUncheckedCreateNestedManyWithoutServerInput
  }

  export type EmbyServerCreateOrConnectWithoutUserPoliciesInput = {
    where: EmbyServerWhereUniqueInput
    create: XOR<EmbyServerCreateWithoutUserPoliciesInput, EmbyServerUncheckedCreateWithoutUserPoliciesInput>
  }

  export type EmbyServerUpsertWithoutUserPoliciesInput = {
    update: XOR<EmbyServerUpdateWithoutUserPoliciesInput, EmbyServerUncheckedUpdateWithoutUserPoliciesInput>
    create: XOR<EmbyServerCreateWithoutUserPoliciesInput, EmbyServerUncheckedCreateWithoutUserPoliciesInput>
    where?: EmbyServerWhereInput
  }

  export type EmbyServerUpdateToOneWithWhereWithoutUserPoliciesInput = {
    where?: EmbyServerWhereInput
    data: XOR<EmbyServerUpdateWithoutUserPoliciesInput, EmbyServerUncheckedUpdateWithoutUserPoliciesInput>
  }

  export type EmbyServerUpdateWithoutUserPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedServersNestedInput
    packages?: PackageUpdateManyWithoutServerNestedInput
    userLinks?: UserServerLinkUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerUncheckedUpdateWithoutUserPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: PackageUncheckedUpdateManyWithoutServerNestedInput
    userLinks?: UserServerLinkUncheckedUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUncheckedUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerCreateManyOwnerInput = {
    id?: string
    name: string
    baseUrl: string
    apiKey: string
    maxUsers?: number
    referenceUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditLogCreateManyActorInput = {
    id?: string
    delta: number
    reason?: string | null
    targetUserId?: string | null
    createdAt?: Date | string
  }

  export type CreditLogCreateManyTargetUserInput = {
    id?: string
    actorUserId: string
    delta: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type UserServerLinkCreateManySuspendedByInput = {
    id?: string
    embyUserId: string
    serverId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyServerUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: PackageUpdateManyWithoutServerNestedInput
    userLinks?: UserServerLinkUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: PackageUncheckedUpdateManyWithoutServerNestedInput
    userLinks?: UserServerLinkUncheckedUpdateManyWithoutServerNestedInput
    embyAccounts?: EmbyAccountUncheckedUpdateManyWithoutServerNestedInput
    userPolicies?: UserPolicyUncheckedUpdateManyWithoutServerNestedInput
  }

  export type EmbyServerUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    referenceUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUser?: UserUpdateOneWithoutCreditLogsTargetedNestedInput
  }

  export type CreditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLogUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutCreditLogsAuthoredNestedInput
  }

  export type CreditLogUncheckedUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLogUncheckedUpdateManyWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserServerLinkUpdateWithoutSuspendedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyUser?: EmbyUserUpdateOneRequiredWithoutUserServerLinksNestedInput
    server?: EmbyServerUpdateOneRequiredWithoutUserLinksNestedInput
    package?: PackageUpdateOneWithoutUserLinksNestedInput
    embyAccount?: EmbyAccountUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateWithoutSuspendedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyAccount?: EmbyAccountUncheckedUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateManyWithoutSuspendedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserServerLinkCreateManyEmbyUserInput = {
    id?: string
    serverId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyAccountCreateManyEmbyUserInput = {
    id?: string
    serverId: string
    embyUserIdInternal: string
    embyUsername: string
    userServerLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserServerLinkUpdateWithoutEmbyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: EmbyServerUpdateOneRequiredWithoutUserLinksNestedInput
    package?: PackageUpdateOneWithoutUserLinksNestedInput
    suspendedBy?: UserUpdateOneWithoutSuspendedLinksNestedInput
    embyAccount?: EmbyAccountUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateWithoutEmbyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyAccount?: EmbyAccountUncheckedUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateManyWithoutEmbyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyAccountUpdateWithoutEmbyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: EmbyServerUpdateOneRequiredWithoutEmbyAccountsNestedInput
    userServerLink?: UserServerLinkUpdateOneWithoutEmbyAccountNestedInput
  }

  export type EmbyAccountUncheckedUpdateWithoutEmbyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    userServerLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyAccountUncheckedUpdateManyWithoutEmbyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    userServerLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyResellerTierInput = {
    id?: string
    email: string
    name?: string | null
    hashedPassword?: string | null
    role?: $Enums.RoleName
    defaultDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    suspensionUntil?: Date | string | null
  }

  export type UserUpdateWithoutResellerTierInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditBalance?: CreditBalanceUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserUncheckedUpdateWithoutResellerTierInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditBalance?: CreditBalanceUncheckedUpdateOneWithoutUserNestedInput
    ownedServers?: EmbyServerUncheckedUpdateManyWithoutOwnerNestedInput
    creditLogsAuthored?: CreditLogUncheckedUpdateManyWithoutActorNestedInput
    creditLogsTargeted?: CreditLogUncheckedUpdateManyWithoutTargetUserNestedInput
    suspendedLinks?: UserServerLinkUncheckedUpdateManyWithoutSuspendedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutResellerTierInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    defaultDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suspensionUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PackageCreateManyServerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserServerLinkCreateManyServerInput = {
    id?: string
    embyUserId: string
    packageId?: string | null
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbyAccountCreateManyServerInput = {
    id?: string
    embyUserId: string
    embyUserIdInternal: string
    embyUsername: string
    userServerLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPolicyCreateManyServerInput = {
    id?: string
    name: string
    description?: string | null
    isTemplate?: boolean
    isAdministrator?: boolean
    isHidden?: boolean
    isDisabled?: boolean
    maxParentalRating?: number
    enableUserPreferenceAccess?: boolean
    enableAudioPlaybackTranscoding?: boolean
    enableVideoPlaybackTranscoding?: boolean
    enablePlaybackRemuxing?: boolean
    forceRemoteSourceTranscoding?: boolean
    enableSyncTranscoding?: boolean
    enableMediaConversion?: boolean
    enableContentDownloading?: boolean
    enableContentDeletion?: boolean
    enableCameraUpload?: boolean
    enableRemoteAccess?: boolean
    enableMediaPlayback?: boolean
    remoteClientBitrateLimit?: number
    maxActiveSessions?: number
    enableAllDevices?: boolean
    enableLiveTvManagement?: boolean
    enableLiveTvAccess?: boolean
    enableAllChannels?: boolean
    enableRemoteControlOfOtherUsers?: boolean
    enableSharedDeviceControl?: boolean
    enablePublicSharing?: boolean
    enableAllFolders?: boolean
    loginAttemptsBeforeLockout?: number
    syncPlayAccess?: string
    enableSchedule?: boolean
    scheduleStart?: string | null
    scheduleEnd?: string | null
    blockedTags?: string | null
    blockedMediaFolders?: string | null
    blockedChannels?: string | null
    accessSchedules?: string | null
    blockUnratedItems?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraries?: PackageLibraryUpdateManyWithoutPackageNestedInput
    userLinks?: UserServerLinkUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraries?: PackageLibraryUncheckedUpdateManyWithoutPackageNestedInput
    userLinks?: UserServerLinkUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserServerLinkUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyUser?: EmbyUserUpdateOneRequiredWithoutUserServerLinksNestedInput
    package?: PackageUpdateOneWithoutUserLinksNestedInput
    suspendedBy?: UserUpdateOneWithoutSuspendedLinksNestedInput
    embyAccount?: EmbyAccountUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyAccount?: EmbyAccountUncheckedUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyAccountUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyUser?: EmbyUserUpdateOneRequiredWithoutEmbyAccountsNestedInput
    userServerLink?: UserServerLinkUpdateOneWithoutEmbyAccountNestedInput
  }

  export type EmbyAccountUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    userServerLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbyAccountUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    embyUserIdInternal?: StringFieldUpdateOperationsInput | string
    embyUsername?: StringFieldUpdateOperationsInput | string
    userServerLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPolicyUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isAdministrator?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    maxParentalRating?: IntFieldUpdateOperationsInput | number
    enableUserPreferenceAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAudioPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableVideoPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enablePlaybackRemuxing?: BoolFieldUpdateOperationsInput | boolean
    forceRemoteSourceTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableSyncTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableMediaConversion?: BoolFieldUpdateOperationsInput | boolean
    enableContentDownloading?: BoolFieldUpdateOperationsInput | boolean
    enableContentDeletion?: BoolFieldUpdateOperationsInput | boolean
    enableCameraUpload?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteAccess?: BoolFieldUpdateOperationsInput | boolean
    enableMediaPlayback?: BoolFieldUpdateOperationsInput | boolean
    remoteClientBitrateLimit?: IntFieldUpdateOperationsInput | number
    maxActiveSessions?: IntFieldUpdateOperationsInput | number
    enableAllDevices?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvManagement?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAllChannels?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteControlOfOtherUsers?: BoolFieldUpdateOperationsInput | boolean
    enableSharedDeviceControl?: BoolFieldUpdateOperationsInput | boolean
    enablePublicSharing?: BoolFieldUpdateOperationsInput | boolean
    enableAllFolders?: BoolFieldUpdateOperationsInput | boolean
    loginAttemptsBeforeLockout?: IntFieldUpdateOperationsInput | number
    syncPlayAccess?: StringFieldUpdateOperationsInput | string
    enableSchedule?: BoolFieldUpdateOperationsInput | boolean
    scheduleStart?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleEnd?: NullableStringFieldUpdateOperationsInput | string | null
    blockedTags?: NullableStringFieldUpdateOperationsInput | string | null
    blockedMediaFolders?: NullableStringFieldUpdateOperationsInput | string | null
    blockedChannels?: NullableStringFieldUpdateOperationsInput | string | null
    accessSchedules?: NullableStringFieldUpdateOperationsInput | string | null
    blockUnratedItems?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPolicyUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isAdministrator?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    maxParentalRating?: IntFieldUpdateOperationsInput | number
    enableUserPreferenceAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAudioPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableVideoPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enablePlaybackRemuxing?: BoolFieldUpdateOperationsInput | boolean
    forceRemoteSourceTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableSyncTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableMediaConversion?: BoolFieldUpdateOperationsInput | boolean
    enableContentDownloading?: BoolFieldUpdateOperationsInput | boolean
    enableContentDeletion?: BoolFieldUpdateOperationsInput | boolean
    enableCameraUpload?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteAccess?: BoolFieldUpdateOperationsInput | boolean
    enableMediaPlayback?: BoolFieldUpdateOperationsInput | boolean
    remoteClientBitrateLimit?: IntFieldUpdateOperationsInput | number
    maxActiveSessions?: IntFieldUpdateOperationsInput | number
    enableAllDevices?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvManagement?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAllChannels?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteControlOfOtherUsers?: BoolFieldUpdateOperationsInput | boolean
    enableSharedDeviceControl?: BoolFieldUpdateOperationsInput | boolean
    enablePublicSharing?: BoolFieldUpdateOperationsInput | boolean
    enableAllFolders?: BoolFieldUpdateOperationsInput | boolean
    loginAttemptsBeforeLockout?: IntFieldUpdateOperationsInput | number
    syncPlayAccess?: StringFieldUpdateOperationsInput | string
    enableSchedule?: BoolFieldUpdateOperationsInput | boolean
    scheduleStart?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleEnd?: NullableStringFieldUpdateOperationsInput | string | null
    blockedTags?: NullableStringFieldUpdateOperationsInput | string | null
    blockedMediaFolders?: NullableStringFieldUpdateOperationsInput | string | null
    blockedChannels?: NullableStringFieldUpdateOperationsInput | string | null
    accessSchedules?: NullableStringFieldUpdateOperationsInput | string | null
    blockUnratedItems?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPolicyUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isAdministrator?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    maxParentalRating?: IntFieldUpdateOperationsInput | number
    enableUserPreferenceAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAudioPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableVideoPlaybackTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enablePlaybackRemuxing?: BoolFieldUpdateOperationsInput | boolean
    forceRemoteSourceTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableSyncTranscoding?: BoolFieldUpdateOperationsInput | boolean
    enableMediaConversion?: BoolFieldUpdateOperationsInput | boolean
    enableContentDownloading?: BoolFieldUpdateOperationsInput | boolean
    enableContentDeletion?: BoolFieldUpdateOperationsInput | boolean
    enableCameraUpload?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteAccess?: BoolFieldUpdateOperationsInput | boolean
    enableMediaPlayback?: BoolFieldUpdateOperationsInput | boolean
    remoteClientBitrateLimit?: IntFieldUpdateOperationsInput | number
    maxActiveSessions?: IntFieldUpdateOperationsInput | number
    enableAllDevices?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvManagement?: BoolFieldUpdateOperationsInput | boolean
    enableLiveTvAccess?: BoolFieldUpdateOperationsInput | boolean
    enableAllChannels?: BoolFieldUpdateOperationsInput | boolean
    enableRemoteControlOfOtherUsers?: BoolFieldUpdateOperationsInput | boolean
    enableSharedDeviceControl?: BoolFieldUpdateOperationsInput | boolean
    enablePublicSharing?: BoolFieldUpdateOperationsInput | boolean
    enableAllFolders?: BoolFieldUpdateOperationsInput | boolean
    loginAttemptsBeforeLockout?: IntFieldUpdateOperationsInput | number
    syncPlayAccess?: StringFieldUpdateOperationsInput | string
    enableSchedule?: BoolFieldUpdateOperationsInput | boolean
    scheduleStart?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleEnd?: NullableStringFieldUpdateOperationsInput | string | null
    blockedTags?: NullableStringFieldUpdateOperationsInput | string | null
    blockedMediaFolders?: NullableStringFieldUpdateOperationsInput | string | null
    blockedChannels?: NullableStringFieldUpdateOperationsInput | string | null
    accessSchedules?: NullableStringFieldUpdateOperationsInput | string | null
    blockUnratedItems?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageLibraryCreateManyPackageInput = {
    id?: string
    libraryId?: string | null
    libraryName?: string | null
  }

  export type UserServerLinkCreateManyPackageInput = {
    id?: string
    embyUserId: string
    serverId: string
    status?: $Enums.AccountStatus
    startAt?: Date | string
    expireAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendedById?: string | null
    creditsAllocated?: number
    creditsUsed?: number
    creditsRemaining?: number
    creditType?: string
    demoHours?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageLibraryUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: NullableStringFieldUpdateOperationsInput | string | null
    libraryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageLibraryUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: NullableStringFieldUpdateOperationsInput | string | null
    libraryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageLibraryUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: NullableStringFieldUpdateOperationsInput | string | null
    libraryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserServerLinkUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyUser?: EmbyUserUpdateOneRequiredWithoutUserServerLinksNestedInput
    server?: EmbyServerUpdateOneRequiredWithoutUserLinksNestedInput
    suspendedBy?: UserUpdateOneWithoutSuspendedLinksNestedInput
    embyAccount?: EmbyAccountUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embyAccount?: EmbyAccountUncheckedUpdateOneWithoutUserServerLinkNestedInput
  }

  export type UserServerLinkUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    embyUserId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedById?: NullableStringFieldUpdateOperationsInput | string | null
    creditsAllocated?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    creditsRemaining?: IntFieldUpdateOperationsInput | number
    creditType?: StringFieldUpdateOperationsInput | string
    demoHours?: NullableIntFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
