
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
 * Model potential_participants
 * 
 */
export type potential_participants = $Result.DefaultSelection<Prisma.$potential_participantsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model eligibility_screening
 * 
 */
export type eligibility_screening = $Result.DefaultSelection<Prisma.$eligibility_screeningPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Potential_participants
 * const potential_participants = await prisma.potential_participants.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Potential_participants
   * const potential_participants = await prisma.potential_participants.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.potential_participants`: Exposes CRUD operations for the **potential_participants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Potential_participants
    * const potential_participants = await prisma.potential_participants.findMany()
    * ```
    */
  get potential_participants(): Prisma.potential_participantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eligibility_screening`: Exposes CRUD operations for the **eligibility_screening** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eligibility_screenings
    * const eligibility_screenings = await prisma.eligibility_screening.findMany()
    * ```
    */
  get eligibility_screening(): Prisma.eligibility_screeningDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    potential_participants: 'potential_participants',
    users: 'users',
    eligibility_screening: 'eligibility_screening'
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
      modelProps: "potential_participants" | "users" | "eligibility_screening"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      potential_participants: {
        payload: Prisma.$potential_participantsPayload<ExtArgs>
        fields: Prisma.potential_participantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.potential_participantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.potential_participantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>
          }
          findFirst: {
            args: Prisma.potential_participantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.potential_participantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>
          }
          findMany: {
            args: Prisma.potential_participantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>[]
          }
          create: {
            args: Prisma.potential_participantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>
          }
          createMany: {
            args: Prisma.potential_participantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.potential_participantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>[]
          }
          delete: {
            args: Prisma.potential_participantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>
          }
          update: {
            args: Prisma.potential_participantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>
          }
          deleteMany: {
            args: Prisma.potential_participantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.potential_participantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.potential_participantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>[]
          }
          upsert: {
            args: Prisma.potential_participantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$potential_participantsPayload>
          }
          aggregate: {
            args: Prisma.Potential_participantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePotential_participants>
          }
          groupBy: {
            args: Prisma.potential_participantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Potential_participantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.potential_participantsCountArgs<ExtArgs>
            result: $Utils.Optional<Potential_participantsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      eligibility_screening: {
        payload: Prisma.$eligibility_screeningPayload<ExtArgs>
        fields: Prisma.eligibility_screeningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eligibility_screeningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eligibility_screeningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>
          }
          findFirst: {
            args: Prisma.eligibility_screeningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eligibility_screeningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>
          }
          findMany: {
            args: Prisma.eligibility_screeningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>[]
          }
          create: {
            args: Prisma.eligibility_screeningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>
          }
          createMany: {
            args: Prisma.eligibility_screeningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eligibility_screeningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>[]
          }
          delete: {
            args: Prisma.eligibility_screeningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>
          }
          update: {
            args: Prisma.eligibility_screeningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>
          }
          deleteMany: {
            args: Prisma.eligibility_screeningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eligibility_screeningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eligibility_screeningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>[]
          }
          upsert: {
            args: Prisma.eligibility_screeningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eligibility_screeningPayload>
          }
          aggregate: {
            args: Prisma.Eligibility_screeningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEligibility_screening>
          }
          groupBy: {
            args: Prisma.eligibility_screeningGroupByArgs<ExtArgs>
            result: $Utils.Optional<Eligibility_screeningGroupByOutputType>[]
          }
          count: {
            args: Prisma.eligibility_screeningCountArgs<ExtArgs>
            result: $Utils.Optional<Eligibility_screeningCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    potential_participants?: potential_participantsOmit
    users?: usersOmit
    eligibility_screening?: eligibility_screeningOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Potential_participantsCountOutputType
   */

  export type Potential_participantsCountOutputType = {
    eligibility_screening: number
  }

  export type Potential_participantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibility_screening?: boolean | Potential_participantsCountOutputTypeCountEligibility_screeningArgs
  }

  // Custom InputTypes
  /**
   * Potential_participantsCountOutputType without action
   */
  export type Potential_participantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potential_participantsCountOutputType
     */
    select?: Potential_participantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Potential_participantsCountOutputType without action
   */
  export type Potential_participantsCountOutputTypeCountEligibility_screeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eligibility_screeningWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    eligibility_screening: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibility_screening?: boolean | UsersCountOutputTypeCountEligibility_screeningArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEligibility_screeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eligibility_screeningWhereInput
  }


  /**
   * Models
   */

  /**
   * Model potential_participants
   */

  export type AggregatePotential_participants = {
    _count: Potential_participantsCountAggregateOutputType | null
    _avg: Potential_participantsAvgAggregateOutputType | null
    _sum: Potential_participantsSumAggregateOutputType | null
    _min: Potential_participantsMinAggregateOutputType | null
    _max: Potential_participantsMaxAggregateOutputType | null
  }

  export type Potential_participantsAvgAggregateOutputType = {
    id: number | null
  }

  export type Potential_participantsSumAggregateOutputType = {
    id: number | null
  }

  export type Potential_participantsMinAggregateOutputType = {
    id: number | null
    eligibility_criteria: string | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    email: string | null
    county: string | null
    zip: string | null
    referrer_first_name: string | null
    referrer_last_name: string | null
    referrer_phone: string | null
    referrer_email: string | null
    referral_source: string | null
    referral_business_name: string | null
    client_of_mdrrs: string | null
    staff_submit_referral_to_mdrs: string | null
    release_info_consent_mdrs: string | null
    long_covid_syndrome: string | null
    is_ms_resident: string | null
    is_age_16_to_70: string | null
    desire_to_continue_work: string | null
    wants_to_work_if_unemployed: string | null
    not_involving_other_off: string | null
    submitted_at: Date | null
  }

  export type Potential_participantsMaxAggregateOutputType = {
    id: number | null
    eligibility_criteria: string | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    email: string | null
    county: string | null
    zip: string | null
    referrer_first_name: string | null
    referrer_last_name: string | null
    referrer_phone: string | null
    referrer_email: string | null
    referral_source: string | null
    referral_business_name: string | null
    client_of_mdrrs: string | null
    staff_submit_referral_to_mdrs: string | null
    release_info_consent_mdrs: string | null
    long_covid_syndrome: string | null
    is_ms_resident: string | null
    is_age_16_to_70: string | null
    desire_to_continue_work: string | null
    wants_to_work_if_unemployed: string | null
    not_involving_other_off: string | null
    submitted_at: Date | null
  }

  export type Potential_participantsCountAggregateOutputType = {
    id: number
    eligibility_criteria: number
    first_name: number
    last_name: number
    phone_number: number
    email: number
    county: number
    zip: number
    referrer_first_name: number
    referrer_last_name: number
    referrer_phone: number
    referrer_email: number
    referral_source: number
    referral_business_name: number
    client_of_mdrrs: number
    staff_submit_referral_to_mdrs: number
    release_info_consent_mdrs: number
    long_covid_syndrome: number
    is_ms_resident: number
    is_age_16_to_70: number
    desire_to_continue_work: number
    wants_to_work_if_unemployed: number
    not_involving_other_off: number
    submitted_at: number
    _all: number
  }


  export type Potential_participantsAvgAggregateInputType = {
    id?: true
  }

  export type Potential_participantsSumAggregateInputType = {
    id?: true
  }

  export type Potential_participantsMinAggregateInputType = {
    id?: true
    eligibility_criteria?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    email?: true
    county?: true
    zip?: true
    referrer_first_name?: true
    referrer_last_name?: true
    referrer_phone?: true
    referrer_email?: true
    referral_source?: true
    referral_business_name?: true
    client_of_mdrrs?: true
    staff_submit_referral_to_mdrs?: true
    release_info_consent_mdrs?: true
    long_covid_syndrome?: true
    is_ms_resident?: true
    is_age_16_to_70?: true
    desire_to_continue_work?: true
    wants_to_work_if_unemployed?: true
    not_involving_other_off?: true
    submitted_at?: true
  }

  export type Potential_participantsMaxAggregateInputType = {
    id?: true
    eligibility_criteria?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    email?: true
    county?: true
    zip?: true
    referrer_first_name?: true
    referrer_last_name?: true
    referrer_phone?: true
    referrer_email?: true
    referral_source?: true
    referral_business_name?: true
    client_of_mdrrs?: true
    staff_submit_referral_to_mdrs?: true
    release_info_consent_mdrs?: true
    long_covid_syndrome?: true
    is_ms_resident?: true
    is_age_16_to_70?: true
    desire_to_continue_work?: true
    wants_to_work_if_unemployed?: true
    not_involving_other_off?: true
    submitted_at?: true
  }

  export type Potential_participantsCountAggregateInputType = {
    id?: true
    eligibility_criteria?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    email?: true
    county?: true
    zip?: true
    referrer_first_name?: true
    referrer_last_name?: true
    referrer_phone?: true
    referrer_email?: true
    referral_source?: true
    referral_business_name?: true
    client_of_mdrrs?: true
    staff_submit_referral_to_mdrs?: true
    release_info_consent_mdrs?: true
    long_covid_syndrome?: true
    is_ms_resident?: true
    is_age_16_to_70?: true
    desire_to_continue_work?: true
    wants_to_work_if_unemployed?: true
    not_involving_other_off?: true
    submitted_at?: true
    _all?: true
  }

  export type Potential_participantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which potential_participants to aggregate.
     */
    where?: potential_participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of potential_participants to fetch.
     */
    orderBy?: potential_participantsOrderByWithRelationInput | potential_participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: potential_participantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` potential_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` potential_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned potential_participants
    **/
    _count?: true | Potential_participantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Potential_participantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Potential_participantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Potential_participantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Potential_participantsMaxAggregateInputType
  }

  export type GetPotential_participantsAggregateType<T extends Potential_participantsAggregateArgs> = {
        [P in keyof T & keyof AggregatePotential_participants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePotential_participants[P]>
      : GetScalarType<T[P], AggregatePotential_participants[P]>
  }




  export type potential_participantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: potential_participantsWhereInput
    orderBy?: potential_participantsOrderByWithAggregationInput | potential_participantsOrderByWithAggregationInput[]
    by: Potential_participantsScalarFieldEnum[] | Potential_participantsScalarFieldEnum
    having?: potential_participantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Potential_participantsCountAggregateInputType | true
    _avg?: Potential_participantsAvgAggregateInputType
    _sum?: Potential_participantsSumAggregateInputType
    _min?: Potential_participantsMinAggregateInputType
    _max?: Potential_participantsMaxAggregateInputType
  }

  export type Potential_participantsGroupByOutputType = {
    id: number
    eligibility_criteria: string | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    email: string | null
    county: string | null
    zip: string | null
    referrer_first_name: string | null
    referrer_last_name: string | null
    referrer_phone: string | null
    referrer_email: string | null
    referral_source: string | null
    referral_business_name: string | null
    client_of_mdrrs: string | null
    staff_submit_referral_to_mdrs: string | null
    release_info_consent_mdrs: string | null
    long_covid_syndrome: string | null
    is_ms_resident: string | null
    is_age_16_to_70: string | null
    desire_to_continue_work: string | null
    wants_to_work_if_unemployed: string | null
    not_involving_other_off: string | null
    submitted_at: Date | null
    _count: Potential_participantsCountAggregateOutputType | null
    _avg: Potential_participantsAvgAggregateOutputType | null
    _sum: Potential_participantsSumAggregateOutputType | null
    _min: Potential_participantsMinAggregateOutputType | null
    _max: Potential_participantsMaxAggregateOutputType | null
  }

  type GetPotential_participantsGroupByPayload<T extends potential_participantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Potential_participantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Potential_participantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Potential_participantsGroupByOutputType[P]>
            : GetScalarType<T[P], Potential_participantsGroupByOutputType[P]>
        }
      >
    >


  export type potential_participantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eligibility_criteria?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    email?: boolean
    county?: boolean
    zip?: boolean
    referrer_first_name?: boolean
    referrer_last_name?: boolean
    referrer_phone?: boolean
    referrer_email?: boolean
    referral_source?: boolean
    referral_business_name?: boolean
    client_of_mdrrs?: boolean
    staff_submit_referral_to_mdrs?: boolean
    release_info_consent_mdrs?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    desire_to_continue_work?: boolean
    wants_to_work_if_unemployed?: boolean
    not_involving_other_off?: boolean
    submitted_at?: boolean
    eligibility_screening?: boolean | potential_participants$eligibility_screeningArgs<ExtArgs>
    _count?: boolean | Potential_participantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["potential_participants"]>

  export type potential_participantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eligibility_criteria?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    email?: boolean
    county?: boolean
    zip?: boolean
    referrer_first_name?: boolean
    referrer_last_name?: boolean
    referrer_phone?: boolean
    referrer_email?: boolean
    referral_source?: boolean
    referral_business_name?: boolean
    client_of_mdrrs?: boolean
    staff_submit_referral_to_mdrs?: boolean
    release_info_consent_mdrs?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    desire_to_continue_work?: boolean
    wants_to_work_if_unemployed?: boolean
    not_involving_other_off?: boolean
    submitted_at?: boolean
  }, ExtArgs["result"]["potential_participants"]>

  export type potential_participantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eligibility_criteria?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    email?: boolean
    county?: boolean
    zip?: boolean
    referrer_first_name?: boolean
    referrer_last_name?: boolean
    referrer_phone?: boolean
    referrer_email?: boolean
    referral_source?: boolean
    referral_business_name?: boolean
    client_of_mdrrs?: boolean
    staff_submit_referral_to_mdrs?: boolean
    release_info_consent_mdrs?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    desire_to_continue_work?: boolean
    wants_to_work_if_unemployed?: boolean
    not_involving_other_off?: boolean
    submitted_at?: boolean
  }, ExtArgs["result"]["potential_participants"]>

  export type potential_participantsSelectScalar = {
    id?: boolean
    eligibility_criteria?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    email?: boolean
    county?: boolean
    zip?: boolean
    referrer_first_name?: boolean
    referrer_last_name?: boolean
    referrer_phone?: boolean
    referrer_email?: boolean
    referral_source?: boolean
    referral_business_name?: boolean
    client_of_mdrrs?: boolean
    staff_submit_referral_to_mdrs?: boolean
    release_info_consent_mdrs?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    desire_to_continue_work?: boolean
    wants_to_work_if_unemployed?: boolean
    not_involving_other_off?: boolean
    submitted_at?: boolean
  }

  export type potential_participantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eligibility_criteria" | "first_name" | "last_name" | "phone_number" | "email" | "county" | "zip" | "referrer_first_name" | "referrer_last_name" | "referrer_phone" | "referrer_email" | "referral_source" | "referral_business_name" | "client_of_mdrrs" | "staff_submit_referral_to_mdrs" | "release_info_consent_mdrs" | "long_covid_syndrome" | "is_ms_resident" | "is_age_16_to_70" | "desire_to_continue_work" | "wants_to_work_if_unemployed" | "not_involving_other_off" | "submitted_at", ExtArgs["result"]["potential_participants"]>
  export type potential_participantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibility_screening?: boolean | potential_participants$eligibility_screeningArgs<ExtArgs>
    _count?: boolean | Potential_participantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type potential_participantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type potential_participantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $potential_participantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "potential_participants"
    objects: {
      eligibility_screening: Prisma.$eligibility_screeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eligibility_criteria: string | null
      first_name: string | null
      last_name: string | null
      phone_number: string | null
      email: string | null
      county: string | null
      zip: string | null
      referrer_first_name: string | null
      referrer_last_name: string | null
      referrer_phone: string | null
      referrer_email: string | null
      referral_source: string | null
      referral_business_name: string | null
      client_of_mdrrs: string | null
      staff_submit_referral_to_mdrs: string | null
      release_info_consent_mdrs: string | null
      long_covid_syndrome: string | null
      is_ms_resident: string | null
      is_age_16_to_70: string | null
      desire_to_continue_work: string | null
      wants_to_work_if_unemployed: string | null
      not_involving_other_off: string | null
      submitted_at: Date | null
    }, ExtArgs["result"]["potential_participants"]>
    composites: {}
  }

  type potential_participantsGetPayload<S extends boolean | null | undefined | potential_participantsDefaultArgs> = $Result.GetResult<Prisma.$potential_participantsPayload, S>

  type potential_participantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<potential_participantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Potential_participantsCountAggregateInputType | true
    }

  export interface potential_participantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['potential_participants'], meta: { name: 'potential_participants' } }
    /**
     * Find zero or one Potential_participants that matches the filter.
     * @param {potential_participantsFindUniqueArgs} args - Arguments to find a Potential_participants
     * @example
     * // Get one Potential_participants
     * const potential_participants = await prisma.potential_participants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends potential_participantsFindUniqueArgs>(args: SelectSubset<T, potential_participantsFindUniqueArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Potential_participants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {potential_participantsFindUniqueOrThrowArgs} args - Arguments to find a Potential_participants
     * @example
     * // Get one Potential_participants
     * const potential_participants = await prisma.potential_participants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends potential_participantsFindUniqueOrThrowArgs>(args: SelectSubset<T, potential_participantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Potential_participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {potential_participantsFindFirstArgs} args - Arguments to find a Potential_participants
     * @example
     * // Get one Potential_participants
     * const potential_participants = await prisma.potential_participants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends potential_participantsFindFirstArgs>(args?: SelectSubset<T, potential_participantsFindFirstArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Potential_participants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {potential_participantsFindFirstOrThrowArgs} args - Arguments to find a Potential_participants
     * @example
     * // Get one Potential_participants
     * const potential_participants = await prisma.potential_participants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends potential_participantsFindFirstOrThrowArgs>(args?: SelectSubset<T, potential_participantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Potential_participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {potential_participantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Potential_participants
     * const potential_participants = await prisma.potential_participants.findMany()
     * 
     * // Get first 10 Potential_participants
     * const potential_participants = await prisma.potential_participants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const potential_participantsWithIdOnly = await prisma.potential_participants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends potential_participantsFindManyArgs>(args?: SelectSubset<T, potential_participantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Potential_participants.
     * @param {potential_participantsCreateArgs} args - Arguments to create a Potential_participants.
     * @example
     * // Create one Potential_participants
     * const Potential_participants = await prisma.potential_participants.create({
     *   data: {
     *     // ... data to create a Potential_participants
     *   }
     * })
     * 
     */
    create<T extends potential_participantsCreateArgs>(args: SelectSubset<T, potential_participantsCreateArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Potential_participants.
     * @param {potential_participantsCreateManyArgs} args - Arguments to create many Potential_participants.
     * @example
     * // Create many Potential_participants
     * const potential_participants = await prisma.potential_participants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends potential_participantsCreateManyArgs>(args?: SelectSubset<T, potential_participantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Potential_participants and returns the data saved in the database.
     * @param {potential_participantsCreateManyAndReturnArgs} args - Arguments to create many Potential_participants.
     * @example
     * // Create many Potential_participants
     * const potential_participants = await prisma.potential_participants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Potential_participants and only return the `id`
     * const potential_participantsWithIdOnly = await prisma.potential_participants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends potential_participantsCreateManyAndReturnArgs>(args?: SelectSubset<T, potential_participantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Potential_participants.
     * @param {potential_participantsDeleteArgs} args - Arguments to delete one Potential_participants.
     * @example
     * // Delete one Potential_participants
     * const Potential_participants = await prisma.potential_participants.delete({
     *   where: {
     *     // ... filter to delete one Potential_participants
     *   }
     * })
     * 
     */
    delete<T extends potential_participantsDeleteArgs>(args: SelectSubset<T, potential_participantsDeleteArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Potential_participants.
     * @param {potential_participantsUpdateArgs} args - Arguments to update one Potential_participants.
     * @example
     * // Update one Potential_participants
     * const potential_participants = await prisma.potential_participants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends potential_participantsUpdateArgs>(args: SelectSubset<T, potential_participantsUpdateArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Potential_participants.
     * @param {potential_participantsDeleteManyArgs} args - Arguments to filter Potential_participants to delete.
     * @example
     * // Delete a few Potential_participants
     * const { count } = await prisma.potential_participants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends potential_participantsDeleteManyArgs>(args?: SelectSubset<T, potential_participantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Potential_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {potential_participantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Potential_participants
     * const potential_participants = await prisma.potential_participants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends potential_participantsUpdateManyArgs>(args: SelectSubset<T, potential_participantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Potential_participants and returns the data updated in the database.
     * @param {potential_participantsUpdateManyAndReturnArgs} args - Arguments to update many Potential_participants.
     * @example
     * // Update many Potential_participants
     * const potential_participants = await prisma.potential_participants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Potential_participants and only return the `id`
     * const potential_participantsWithIdOnly = await prisma.potential_participants.updateManyAndReturn({
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
    updateManyAndReturn<T extends potential_participantsUpdateManyAndReturnArgs>(args: SelectSubset<T, potential_participantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Potential_participants.
     * @param {potential_participantsUpsertArgs} args - Arguments to update or create a Potential_participants.
     * @example
     * // Update or create a Potential_participants
     * const potential_participants = await prisma.potential_participants.upsert({
     *   create: {
     *     // ... data to create a Potential_participants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Potential_participants we want to update
     *   }
     * })
     */
    upsert<T extends potential_participantsUpsertArgs>(args: SelectSubset<T, potential_participantsUpsertArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Potential_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {potential_participantsCountArgs} args - Arguments to filter Potential_participants to count.
     * @example
     * // Count the number of Potential_participants
     * const count = await prisma.potential_participants.count({
     *   where: {
     *     // ... the filter for the Potential_participants we want to count
     *   }
     * })
    **/
    count<T extends potential_participantsCountArgs>(
      args?: Subset<T, potential_participantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Potential_participantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Potential_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Potential_participantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Potential_participantsAggregateArgs>(args: Subset<T, Potential_participantsAggregateArgs>): Prisma.PrismaPromise<GetPotential_participantsAggregateType<T>>

    /**
     * Group by Potential_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {potential_participantsGroupByArgs} args - Group by arguments.
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
      T extends potential_participantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: potential_participantsGroupByArgs['orderBy'] }
        : { orderBy?: potential_participantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, potential_participantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPotential_participantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the potential_participants model
   */
  readonly fields: potential_participantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for potential_participants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__potential_participantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eligibility_screening<T extends potential_participants$eligibility_screeningArgs<ExtArgs> = {}>(args?: Subset<T, potential_participants$eligibility_screeningArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the potential_participants model
   */
  interface potential_participantsFieldRefs {
    readonly id: FieldRef<"potential_participants", 'Int'>
    readonly eligibility_criteria: FieldRef<"potential_participants", 'String'>
    readonly first_name: FieldRef<"potential_participants", 'String'>
    readonly last_name: FieldRef<"potential_participants", 'String'>
    readonly phone_number: FieldRef<"potential_participants", 'String'>
    readonly email: FieldRef<"potential_participants", 'String'>
    readonly county: FieldRef<"potential_participants", 'String'>
    readonly zip: FieldRef<"potential_participants", 'String'>
    readonly referrer_first_name: FieldRef<"potential_participants", 'String'>
    readonly referrer_last_name: FieldRef<"potential_participants", 'String'>
    readonly referrer_phone: FieldRef<"potential_participants", 'String'>
    readonly referrer_email: FieldRef<"potential_participants", 'String'>
    readonly referral_source: FieldRef<"potential_participants", 'String'>
    readonly referral_business_name: FieldRef<"potential_participants", 'String'>
    readonly client_of_mdrrs: FieldRef<"potential_participants", 'String'>
    readonly staff_submit_referral_to_mdrs: FieldRef<"potential_participants", 'String'>
    readonly release_info_consent_mdrs: FieldRef<"potential_participants", 'String'>
    readonly long_covid_syndrome: FieldRef<"potential_participants", 'String'>
    readonly is_ms_resident: FieldRef<"potential_participants", 'String'>
    readonly is_age_16_to_70: FieldRef<"potential_participants", 'String'>
    readonly desire_to_continue_work: FieldRef<"potential_participants", 'String'>
    readonly wants_to_work_if_unemployed: FieldRef<"potential_participants", 'String'>
    readonly not_involving_other_off: FieldRef<"potential_participants", 'String'>
    readonly submitted_at: FieldRef<"potential_participants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * potential_participants findUnique
   */
  export type potential_participantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * Filter, which potential_participants to fetch.
     */
    where: potential_participantsWhereUniqueInput
  }

  /**
   * potential_participants findUniqueOrThrow
   */
  export type potential_participantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * Filter, which potential_participants to fetch.
     */
    where: potential_participantsWhereUniqueInput
  }

  /**
   * potential_participants findFirst
   */
  export type potential_participantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * Filter, which potential_participants to fetch.
     */
    where?: potential_participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of potential_participants to fetch.
     */
    orderBy?: potential_participantsOrderByWithRelationInput | potential_participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for potential_participants.
     */
    cursor?: potential_participantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` potential_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` potential_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of potential_participants.
     */
    distinct?: Potential_participantsScalarFieldEnum | Potential_participantsScalarFieldEnum[]
  }

  /**
   * potential_participants findFirstOrThrow
   */
  export type potential_participantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * Filter, which potential_participants to fetch.
     */
    where?: potential_participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of potential_participants to fetch.
     */
    orderBy?: potential_participantsOrderByWithRelationInput | potential_participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for potential_participants.
     */
    cursor?: potential_participantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` potential_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` potential_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of potential_participants.
     */
    distinct?: Potential_participantsScalarFieldEnum | Potential_participantsScalarFieldEnum[]
  }

  /**
   * potential_participants findMany
   */
  export type potential_participantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * Filter, which potential_participants to fetch.
     */
    where?: potential_participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of potential_participants to fetch.
     */
    orderBy?: potential_participantsOrderByWithRelationInput | potential_participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing potential_participants.
     */
    cursor?: potential_participantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` potential_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` potential_participants.
     */
    skip?: number
    distinct?: Potential_participantsScalarFieldEnum | Potential_participantsScalarFieldEnum[]
  }

  /**
   * potential_participants create
   */
  export type potential_participantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * The data needed to create a potential_participants.
     */
    data?: XOR<potential_participantsCreateInput, potential_participantsUncheckedCreateInput>
  }

  /**
   * potential_participants createMany
   */
  export type potential_participantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many potential_participants.
     */
    data: potential_participantsCreateManyInput | potential_participantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * potential_participants createManyAndReturn
   */
  export type potential_participantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * The data used to create many potential_participants.
     */
    data: potential_participantsCreateManyInput | potential_participantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * potential_participants update
   */
  export type potential_participantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * The data needed to update a potential_participants.
     */
    data: XOR<potential_participantsUpdateInput, potential_participantsUncheckedUpdateInput>
    /**
     * Choose, which potential_participants to update.
     */
    where: potential_participantsWhereUniqueInput
  }

  /**
   * potential_participants updateMany
   */
  export type potential_participantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update potential_participants.
     */
    data: XOR<potential_participantsUpdateManyMutationInput, potential_participantsUncheckedUpdateManyInput>
    /**
     * Filter which potential_participants to update
     */
    where?: potential_participantsWhereInput
    /**
     * Limit how many potential_participants to update.
     */
    limit?: number
  }

  /**
   * potential_participants updateManyAndReturn
   */
  export type potential_participantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * The data used to update potential_participants.
     */
    data: XOR<potential_participantsUpdateManyMutationInput, potential_participantsUncheckedUpdateManyInput>
    /**
     * Filter which potential_participants to update
     */
    where?: potential_participantsWhereInput
    /**
     * Limit how many potential_participants to update.
     */
    limit?: number
  }

  /**
   * potential_participants upsert
   */
  export type potential_participantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * The filter to search for the potential_participants to update in case it exists.
     */
    where: potential_participantsWhereUniqueInput
    /**
     * In case the potential_participants found by the `where` argument doesn't exist, create a new potential_participants with this data.
     */
    create: XOR<potential_participantsCreateInput, potential_participantsUncheckedCreateInput>
    /**
     * In case the potential_participants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<potential_participantsUpdateInput, potential_participantsUncheckedUpdateInput>
  }

  /**
   * potential_participants delete
   */
  export type potential_participantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    /**
     * Filter which potential_participants to delete.
     */
    where: potential_participantsWhereUniqueInput
  }

  /**
   * potential_participants deleteMany
   */
  export type potential_participantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which potential_participants to delete
     */
    where?: potential_participantsWhereInput
    /**
     * Limit how many potential_participants to delete.
     */
    limit?: number
  }

  /**
   * potential_participants.eligibility_screening
   */
  export type potential_participants$eligibility_screeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    where?: eligibility_screeningWhereInput
    orderBy?: eligibility_screeningOrderByWithRelationInput | eligibility_screeningOrderByWithRelationInput[]
    cursor?: eligibility_screeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eligibility_screeningScalarFieldEnum | Eligibility_screeningScalarFieldEnum[]
  }

  /**
   * potential_participants without action
   */
  export type potential_participantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    role: string | null
    role_description: string | null
    role_capabilities: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    organization: string | null
    title: string | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    role: string | null
    role_description: string | null
    role_capabilities: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    organization: string | null
    title: string | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    role: number
    role_description: number
    role_capabilities: number
    first_name: number
    last_name: number
    email: number
    phone: number
    password: number
    organization: number
    title: number
    last_login: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    role?: true
    role_description?: true
    role_capabilities?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    organization?: true
    title?: true
    last_login?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    role?: true
    role_description?: true
    role_capabilities?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    organization?: true
    title?: true
    last_login?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    role?: true
    role_description?: true
    role_capabilities?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    organization?: true
    title?: true
    last_login?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    role: string | null
    role_description: string | null
    role_capabilities: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    organization: string | null
    title: string | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    role_description?: boolean
    role_capabilities?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    organization?: boolean
    title?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
    eligibility_screening?: boolean | users$eligibility_screeningArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    role_description?: boolean
    role_capabilities?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    organization?: boolean
    title?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    role_description?: boolean
    role_capabilities?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    organization?: boolean
    title?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    role?: boolean
    role_description?: boolean
    role_capabilities?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    organization?: boolean
    title?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "role_description" | "role_capabilities" | "first_name" | "last_name" | "email" | "phone" | "password" | "organization" | "title" | "last_login" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibility_screening?: boolean | users$eligibility_screeningArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      eligibility_screening: Prisma.$eligibility_screeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string | null
      role_description: string | null
      role_capabilities: string | null
      first_name: string | null
      last_name: string | null
      email: string | null
      phone: string | null
      password: string | null
      organization: string | null
      title: string | null
      last_login: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eligibility_screening<T extends users$eligibility_screeningArgs<ExtArgs> = {}>(args?: Subset<T, users$eligibility_screeningArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly role: FieldRef<"users", 'String'>
    readonly role_description: FieldRef<"users", 'String'>
    readonly role_capabilities: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly organization: FieldRef<"users", 'String'>
    readonly title: FieldRef<"users", 'String'>
    readonly last_login: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.eligibility_screening
   */
  export type users$eligibility_screeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    where?: eligibility_screeningWhereInput
    orderBy?: eligibility_screeningOrderByWithRelationInput | eligibility_screeningOrderByWithRelationInput[]
    cursor?: eligibility_screeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eligibility_screeningScalarFieldEnum | Eligibility_screeningScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model eligibility_screening
   */

  export type AggregateEligibility_screening = {
    _count: Eligibility_screeningCountAggregateOutputType | null
    _avg: Eligibility_screeningAvgAggregateOutputType | null
    _sum: Eligibility_screeningSumAggregateOutputType | null
    _min: Eligibility_screeningMinAggregateOutputType | null
    _max: Eligibility_screeningMaxAggregateOutputType | null
  }

  export type Eligibility_screeningAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    potential_participant_id: number | null
  }

  export type Eligibility_screeningSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    potential_participant_id: number | null
  }

  export type Eligibility_screeningMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    potential_participant_id: number | null
    chp_partner_business: string | null
    contact_method: string | null
    history_of_contact_attempts: string | null
    mode_of_learning_about_chp: string | null
    source_of_learning_about_chp: string | null
    individual_interest_in_chp: string | null
    disability_accompanied_by_long_covid: string | null
    long_covid_syndrome: string | null
    is_ms_resident: string | null
    is_age_16_to_70: string | null
    is_currently_employed: string | null
    desire_to_continue_work: string | null
    paid_subminimum_wage: string | null
    working_leave_status: string | null
    risk_of_losing_job: string | null
    how_you_hope_to_benefit_from_chp: string | null
    interest_in_returning_to_work: string | null
    not_involving_other_off: string | null
    confirmation_of_eligibility_questions: boolean | null
    initial_contact_results: string | null
    reason_for_not_eligible: string | null
    statement_of_informed_consent: string | null
    release_of_information_roi: string | null
    individual_provided_medical_information: string | null
    status_of_receiving_medical_information: string | null
    individual_home_address: string | null
    individual_birthdate: string | null
    eligibility_for_participation: string | null
    service_region: string | null
    vocational_counselor_assigned_first_name: string | null
    vocational_counselor_assigned_last_name: string | null
    vocational_counselors_caseload_or_waitlist: string | null
    current_client_of_mdrs_or_no: string | null
    submit_an_mdrs_referral: string | null
    sharing_information_with_mdrs: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Eligibility_screeningMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    potential_participant_id: number | null
    chp_partner_business: string | null
    contact_method: string | null
    history_of_contact_attempts: string | null
    mode_of_learning_about_chp: string | null
    source_of_learning_about_chp: string | null
    individual_interest_in_chp: string | null
    disability_accompanied_by_long_covid: string | null
    long_covid_syndrome: string | null
    is_ms_resident: string | null
    is_age_16_to_70: string | null
    is_currently_employed: string | null
    desire_to_continue_work: string | null
    paid_subminimum_wage: string | null
    working_leave_status: string | null
    risk_of_losing_job: string | null
    how_you_hope_to_benefit_from_chp: string | null
    interest_in_returning_to_work: string | null
    not_involving_other_off: string | null
    confirmation_of_eligibility_questions: boolean | null
    initial_contact_results: string | null
    reason_for_not_eligible: string | null
    statement_of_informed_consent: string | null
    release_of_information_roi: string | null
    individual_provided_medical_information: string | null
    status_of_receiving_medical_information: string | null
    individual_home_address: string | null
    individual_birthdate: string | null
    eligibility_for_participation: string | null
    service_region: string | null
    vocational_counselor_assigned_first_name: string | null
    vocational_counselor_assigned_last_name: string | null
    vocational_counselors_caseload_or_waitlist: string | null
    current_client_of_mdrs_or_no: string | null
    submit_an_mdrs_referral: string | null
    sharing_information_with_mdrs: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Eligibility_screeningCountAggregateOutputType = {
    id: number
    user_id: number
    potential_participant_id: number
    chp_partner_business: number
    contact_method: number
    history_of_contact_attempts: number
    mode_of_learning_about_chp: number
    source_of_learning_about_chp: number
    individual_interest_in_chp: number
    disability_accompanied_by_long_covid: number
    long_covid_syndrome: number
    is_ms_resident: number
    is_age_16_to_70: number
    is_currently_employed: number
    desire_to_continue_work: number
    paid_subminimum_wage: number
    working_leave_status: number
    risk_of_losing_job: number
    how_you_hope_to_benefit_from_chp: number
    interest_in_returning_to_work: number
    not_involving_other_off: number
    confirmation_of_eligibility_questions: number
    initial_contact_results: number
    reason_for_not_eligible: number
    statement_of_informed_consent: number
    release_of_information_roi: number
    individual_provided_medical_information: number
    status_of_receiving_medical_information: number
    individual_home_address: number
    individual_birthdate: number
    eligibility_for_participation: number
    service_region: number
    vocational_counselor_assigned_first_name: number
    vocational_counselor_assigned_last_name: number
    vocational_counselors_caseload_or_waitlist: number
    current_client_of_mdrs_or_no: number
    submit_an_mdrs_referral: number
    sharing_information_with_mdrs: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Eligibility_screeningAvgAggregateInputType = {
    id?: true
    user_id?: true
    potential_participant_id?: true
  }

  export type Eligibility_screeningSumAggregateInputType = {
    id?: true
    user_id?: true
    potential_participant_id?: true
  }

  export type Eligibility_screeningMinAggregateInputType = {
    id?: true
    user_id?: true
    potential_participant_id?: true
    chp_partner_business?: true
    contact_method?: true
    history_of_contact_attempts?: true
    mode_of_learning_about_chp?: true
    source_of_learning_about_chp?: true
    individual_interest_in_chp?: true
    disability_accompanied_by_long_covid?: true
    long_covid_syndrome?: true
    is_ms_resident?: true
    is_age_16_to_70?: true
    is_currently_employed?: true
    desire_to_continue_work?: true
    paid_subminimum_wage?: true
    working_leave_status?: true
    risk_of_losing_job?: true
    how_you_hope_to_benefit_from_chp?: true
    interest_in_returning_to_work?: true
    not_involving_other_off?: true
    confirmation_of_eligibility_questions?: true
    initial_contact_results?: true
    reason_for_not_eligible?: true
    statement_of_informed_consent?: true
    release_of_information_roi?: true
    individual_provided_medical_information?: true
    status_of_receiving_medical_information?: true
    individual_home_address?: true
    individual_birthdate?: true
    eligibility_for_participation?: true
    service_region?: true
    vocational_counselor_assigned_first_name?: true
    vocational_counselor_assigned_last_name?: true
    vocational_counselors_caseload_or_waitlist?: true
    current_client_of_mdrs_or_no?: true
    submit_an_mdrs_referral?: true
    sharing_information_with_mdrs?: true
    created_at?: true
    updated_at?: true
  }

  export type Eligibility_screeningMaxAggregateInputType = {
    id?: true
    user_id?: true
    potential_participant_id?: true
    chp_partner_business?: true
    contact_method?: true
    history_of_contact_attempts?: true
    mode_of_learning_about_chp?: true
    source_of_learning_about_chp?: true
    individual_interest_in_chp?: true
    disability_accompanied_by_long_covid?: true
    long_covid_syndrome?: true
    is_ms_resident?: true
    is_age_16_to_70?: true
    is_currently_employed?: true
    desire_to_continue_work?: true
    paid_subminimum_wage?: true
    working_leave_status?: true
    risk_of_losing_job?: true
    how_you_hope_to_benefit_from_chp?: true
    interest_in_returning_to_work?: true
    not_involving_other_off?: true
    confirmation_of_eligibility_questions?: true
    initial_contact_results?: true
    reason_for_not_eligible?: true
    statement_of_informed_consent?: true
    release_of_information_roi?: true
    individual_provided_medical_information?: true
    status_of_receiving_medical_information?: true
    individual_home_address?: true
    individual_birthdate?: true
    eligibility_for_participation?: true
    service_region?: true
    vocational_counselor_assigned_first_name?: true
    vocational_counselor_assigned_last_name?: true
    vocational_counselors_caseload_or_waitlist?: true
    current_client_of_mdrs_or_no?: true
    submit_an_mdrs_referral?: true
    sharing_information_with_mdrs?: true
    created_at?: true
    updated_at?: true
  }

  export type Eligibility_screeningCountAggregateInputType = {
    id?: true
    user_id?: true
    potential_participant_id?: true
    chp_partner_business?: true
    contact_method?: true
    history_of_contact_attempts?: true
    mode_of_learning_about_chp?: true
    source_of_learning_about_chp?: true
    individual_interest_in_chp?: true
    disability_accompanied_by_long_covid?: true
    long_covid_syndrome?: true
    is_ms_resident?: true
    is_age_16_to_70?: true
    is_currently_employed?: true
    desire_to_continue_work?: true
    paid_subminimum_wage?: true
    working_leave_status?: true
    risk_of_losing_job?: true
    how_you_hope_to_benefit_from_chp?: true
    interest_in_returning_to_work?: true
    not_involving_other_off?: true
    confirmation_of_eligibility_questions?: true
    initial_contact_results?: true
    reason_for_not_eligible?: true
    statement_of_informed_consent?: true
    release_of_information_roi?: true
    individual_provided_medical_information?: true
    status_of_receiving_medical_information?: true
    individual_home_address?: true
    individual_birthdate?: true
    eligibility_for_participation?: true
    service_region?: true
    vocational_counselor_assigned_first_name?: true
    vocational_counselor_assigned_last_name?: true
    vocational_counselors_caseload_or_waitlist?: true
    current_client_of_mdrs_or_no?: true
    submit_an_mdrs_referral?: true
    sharing_information_with_mdrs?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Eligibility_screeningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eligibility_screening to aggregate.
     */
    where?: eligibility_screeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eligibility_screenings to fetch.
     */
    orderBy?: eligibility_screeningOrderByWithRelationInput | eligibility_screeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eligibility_screeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eligibility_screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eligibility_screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eligibility_screenings
    **/
    _count?: true | Eligibility_screeningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Eligibility_screeningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Eligibility_screeningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eligibility_screeningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eligibility_screeningMaxAggregateInputType
  }

  export type GetEligibility_screeningAggregateType<T extends Eligibility_screeningAggregateArgs> = {
        [P in keyof T & keyof AggregateEligibility_screening]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEligibility_screening[P]>
      : GetScalarType<T[P], AggregateEligibility_screening[P]>
  }




  export type eligibility_screeningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eligibility_screeningWhereInput
    orderBy?: eligibility_screeningOrderByWithAggregationInput | eligibility_screeningOrderByWithAggregationInput[]
    by: Eligibility_screeningScalarFieldEnum[] | Eligibility_screeningScalarFieldEnum
    having?: eligibility_screeningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eligibility_screeningCountAggregateInputType | true
    _avg?: Eligibility_screeningAvgAggregateInputType
    _sum?: Eligibility_screeningSumAggregateInputType
    _min?: Eligibility_screeningMinAggregateInputType
    _max?: Eligibility_screeningMaxAggregateInputType
  }

  export type Eligibility_screeningGroupByOutputType = {
    id: number
    user_id: number | null
    potential_participant_id: number | null
    chp_partner_business: string | null
    contact_method: string | null
    history_of_contact_attempts: string | null
    mode_of_learning_about_chp: string | null
    source_of_learning_about_chp: string | null
    individual_interest_in_chp: string | null
    disability_accompanied_by_long_covid: string | null
    long_covid_syndrome: string | null
    is_ms_resident: string | null
    is_age_16_to_70: string | null
    is_currently_employed: string | null
    desire_to_continue_work: string | null
    paid_subminimum_wage: string | null
    working_leave_status: string | null
    risk_of_losing_job: string | null
    how_you_hope_to_benefit_from_chp: string | null
    interest_in_returning_to_work: string | null
    not_involving_other_off: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results: string | null
    reason_for_not_eligible: string | null
    statement_of_informed_consent: string | null
    release_of_information_roi: string | null
    individual_provided_medical_information: string | null
    status_of_receiving_medical_information: string | null
    individual_home_address: string | null
    individual_birthdate: string | null
    eligibility_for_participation: string
    service_region: string | null
    vocational_counselor_assigned_first_name: string | null
    vocational_counselor_assigned_last_name: string | null
    vocational_counselors_caseload_or_waitlist: string | null
    current_client_of_mdrs_or_no: string | null
    submit_an_mdrs_referral: string | null
    sharing_information_with_mdrs: string | null
    created_at: Date
    updated_at: Date
    _count: Eligibility_screeningCountAggregateOutputType | null
    _avg: Eligibility_screeningAvgAggregateOutputType | null
    _sum: Eligibility_screeningSumAggregateOutputType | null
    _min: Eligibility_screeningMinAggregateOutputType | null
    _max: Eligibility_screeningMaxAggregateOutputType | null
  }

  type GetEligibility_screeningGroupByPayload<T extends eligibility_screeningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Eligibility_screeningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eligibility_screeningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eligibility_screeningGroupByOutputType[P]>
            : GetScalarType<T[P], Eligibility_screeningGroupByOutputType[P]>
        }
      >
    >


  export type eligibility_screeningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    potential_participant_id?: boolean
    chp_partner_business?: boolean
    contact_method?: boolean
    history_of_contact_attempts?: boolean
    mode_of_learning_about_chp?: boolean
    source_of_learning_about_chp?: boolean
    individual_interest_in_chp?: boolean
    disability_accompanied_by_long_covid?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    is_currently_employed?: boolean
    desire_to_continue_work?: boolean
    paid_subminimum_wage?: boolean
    working_leave_status?: boolean
    risk_of_losing_job?: boolean
    how_you_hope_to_benefit_from_chp?: boolean
    interest_in_returning_to_work?: boolean
    not_involving_other_off?: boolean
    confirmation_of_eligibility_questions?: boolean
    initial_contact_results?: boolean
    reason_for_not_eligible?: boolean
    statement_of_informed_consent?: boolean
    release_of_information_roi?: boolean
    individual_provided_medical_information?: boolean
    status_of_receiving_medical_information?: boolean
    individual_home_address?: boolean
    individual_birthdate?: boolean
    eligibility_for_participation?: boolean
    service_region?: boolean
    vocational_counselor_assigned_first_name?: boolean
    vocational_counselor_assigned_last_name?: boolean
    vocational_counselors_caseload_or_waitlist?: boolean
    current_client_of_mdrs_or_no?: boolean
    submit_an_mdrs_referral?: boolean
    sharing_information_with_mdrs?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | eligibility_screening$userArgs<ExtArgs>
    potential_participant?: boolean | eligibility_screening$potential_participantArgs<ExtArgs>
  }, ExtArgs["result"]["eligibility_screening"]>

  export type eligibility_screeningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    potential_participant_id?: boolean
    chp_partner_business?: boolean
    contact_method?: boolean
    history_of_contact_attempts?: boolean
    mode_of_learning_about_chp?: boolean
    source_of_learning_about_chp?: boolean
    individual_interest_in_chp?: boolean
    disability_accompanied_by_long_covid?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    is_currently_employed?: boolean
    desire_to_continue_work?: boolean
    paid_subminimum_wage?: boolean
    working_leave_status?: boolean
    risk_of_losing_job?: boolean
    how_you_hope_to_benefit_from_chp?: boolean
    interest_in_returning_to_work?: boolean
    not_involving_other_off?: boolean
    confirmation_of_eligibility_questions?: boolean
    initial_contact_results?: boolean
    reason_for_not_eligible?: boolean
    statement_of_informed_consent?: boolean
    release_of_information_roi?: boolean
    individual_provided_medical_information?: boolean
    status_of_receiving_medical_information?: boolean
    individual_home_address?: boolean
    individual_birthdate?: boolean
    eligibility_for_participation?: boolean
    service_region?: boolean
    vocational_counselor_assigned_first_name?: boolean
    vocational_counselor_assigned_last_name?: boolean
    vocational_counselors_caseload_or_waitlist?: boolean
    current_client_of_mdrs_or_no?: boolean
    submit_an_mdrs_referral?: boolean
    sharing_information_with_mdrs?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | eligibility_screening$userArgs<ExtArgs>
    potential_participant?: boolean | eligibility_screening$potential_participantArgs<ExtArgs>
  }, ExtArgs["result"]["eligibility_screening"]>

  export type eligibility_screeningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    potential_participant_id?: boolean
    chp_partner_business?: boolean
    contact_method?: boolean
    history_of_contact_attempts?: boolean
    mode_of_learning_about_chp?: boolean
    source_of_learning_about_chp?: boolean
    individual_interest_in_chp?: boolean
    disability_accompanied_by_long_covid?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    is_currently_employed?: boolean
    desire_to_continue_work?: boolean
    paid_subminimum_wage?: boolean
    working_leave_status?: boolean
    risk_of_losing_job?: boolean
    how_you_hope_to_benefit_from_chp?: boolean
    interest_in_returning_to_work?: boolean
    not_involving_other_off?: boolean
    confirmation_of_eligibility_questions?: boolean
    initial_contact_results?: boolean
    reason_for_not_eligible?: boolean
    statement_of_informed_consent?: boolean
    release_of_information_roi?: boolean
    individual_provided_medical_information?: boolean
    status_of_receiving_medical_information?: boolean
    individual_home_address?: boolean
    individual_birthdate?: boolean
    eligibility_for_participation?: boolean
    service_region?: boolean
    vocational_counselor_assigned_first_name?: boolean
    vocational_counselor_assigned_last_name?: boolean
    vocational_counselors_caseload_or_waitlist?: boolean
    current_client_of_mdrs_or_no?: boolean
    submit_an_mdrs_referral?: boolean
    sharing_information_with_mdrs?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | eligibility_screening$userArgs<ExtArgs>
    potential_participant?: boolean | eligibility_screening$potential_participantArgs<ExtArgs>
  }, ExtArgs["result"]["eligibility_screening"]>

  export type eligibility_screeningSelectScalar = {
    id?: boolean
    user_id?: boolean
    potential_participant_id?: boolean
    chp_partner_business?: boolean
    contact_method?: boolean
    history_of_contact_attempts?: boolean
    mode_of_learning_about_chp?: boolean
    source_of_learning_about_chp?: boolean
    individual_interest_in_chp?: boolean
    disability_accompanied_by_long_covid?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    is_currently_employed?: boolean
    desire_to_continue_work?: boolean
    paid_subminimum_wage?: boolean
    working_leave_status?: boolean
    risk_of_losing_job?: boolean
    how_you_hope_to_benefit_from_chp?: boolean
    interest_in_returning_to_work?: boolean
    not_involving_other_off?: boolean
    confirmation_of_eligibility_questions?: boolean
    initial_contact_results?: boolean
    reason_for_not_eligible?: boolean
    statement_of_informed_consent?: boolean
    release_of_information_roi?: boolean
    individual_provided_medical_information?: boolean
    status_of_receiving_medical_information?: boolean
    individual_home_address?: boolean
    individual_birthdate?: boolean
    eligibility_for_participation?: boolean
    service_region?: boolean
    vocational_counselor_assigned_first_name?: boolean
    vocational_counselor_assigned_last_name?: boolean
    vocational_counselors_caseload_or_waitlist?: boolean
    current_client_of_mdrs_or_no?: boolean
    submit_an_mdrs_referral?: boolean
    sharing_information_with_mdrs?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type eligibility_screeningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "potential_participant_id" | "chp_partner_business" | "contact_method" | "history_of_contact_attempts" | "mode_of_learning_about_chp" | "source_of_learning_about_chp" | "individual_interest_in_chp" | "disability_accompanied_by_long_covid" | "long_covid_syndrome" | "is_ms_resident" | "is_age_16_to_70" | "is_currently_employed" | "desire_to_continue_work" | "paid_subminimum_wage" | "working_leave_status" | "risk_of_losing_job" | "how_you_hope_to_benefit_from_chp" | "interest_in_returning_to_work" | "not_involving_other_off" | "confirmation_of_eligibility_questions" | "initial_contact_results" | "reason_for_not_eligible" | "statement_of_informed_consent" | "release_of_information_roi" | "individual_provided_medical_information" | "status_of_receiving_medical_information" | "individual_home_address" | "individual_birthdate" | "eligibility_for_participation" | "service_region" | "vocational_counselor_assigned_first_name" | "vocational_counselor_assigned_last_name" | "vocational_counselors_caseload_or_waitlist" | "current_client_of_mdrs_or_no" | "submit_an_mdrs_referral" | "sharing_information_with_mdrs" | "created_at" | "updated_at", ExtArgs["result"]["eligibility_screening"]>
  export type eligibility_screeningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | eligibility_screening$userArgs<ExtArgs>
    potential_participant?: boolean | eligibility_screening$potential_participantArgs<ExtArgs>
  }
  export type eligibility_screeningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | eligibility_screening$userArgs<ExtArgs>
    potential_participant?: boolean | eligibility_screening$potential_participantArgs<ExtArgs>
  }
  export type eligibility_screeningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | eligibility_screening$userArgs<ExtArgs>
    potential_participant?: boolean | eligibility_screening$potential_participantArgs<ExtArgs>
  }

  export type $eligibility_screeningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eligibility_screening"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
      potential_participant: Prisma.$potential_participantsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      potential_participant_id: number | null
      chp_partner_business: string | null
      contact_method: string | null
      history_of_contact_attempts: string | null
      mode_of_learning_about_chp: string | null
      source_of_learning_about_chp: string | null
      individual_interest_in_chp: string | null
      disability_accompanied_by_long_covid: string | null
      long_covid_syndrome: string | null
      is_ms_resident: string | null
      is_age_16_to_70: string | null
      is_currently_employed: string | null
      desire_to_continue_work: string | null
      paid_subminimum_wage: string | null
      working_leave_status: string | null
      risk_of_losing_job: string | null
      how_you_hope_to_benefit_from_chp: string | null
      interest_in_returning_to_work: string | null
      not_involving_other_off: string | null
      confirmation_of_eligibility_questions: boolean
      initial_contact_results: string | null
      reason_for_not_eligible: string | null
      statement_of_informed_consent: string | null
      release_of_information_roi: string | null
      individual_provided_medical_information: string | null
      status_of_receiving_medical_information: string | null
      individual_home_address: string | null
      individual_birthdate: string | null
      eligibility_for_participation: string
      service_region: string | null
      vocational_counselor_assigned_first_name: string | null
      vocational_counselor_assigned_last_name: string | null
      vocational_counselors_caseload_or_waitlist: string | null
      current_client_of_mdrs_or_no: string | null
      submit_an_mdrs_referral: string | null
      sharing_information_with_mdrs: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["eligibility_screening"]>
    composites: {}
  }

  type eligibility_screeningGetPayload<S extends boolean | null | undefined | eligibility_screeningDefaultArgs> = $Result.GetResult<Prisma.$eligibility_screeningPayload, S>

  type eligibility_screeningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eligibility_screeningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Eligibility_screeningCountAggregateInputType | true
    }

  export interface eligibility_screeningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eligibility_screening'], meta: { name: 'eligibility_screening' } }
    /**
     * Find zero or one Eligibility_screening that matches the filter.
     * @param {eligibility_screeningFindUniqueArgs} args - Arguments to find a Eligibility_screening
     * @example
     * // Get one Eligibility_screening
     * const eligibility_screening = await prisma.eligibility_screening.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eligibility_screeningFindUniqueArgs>(args: SelectSubset<T, eligibility_screeningFindUniqueArgs<ExtArgs>>): Prisma__eligibility_screeningClient<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eligibility_screening that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eligibility_screeningFindUniqueOrThrowArgs} args - Arguments to find a Eligibility_screening
     * @example
     * // Get one Eligibility_screening
     * const eligibility_screening = await prisma.eligibility_screening.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eligibility_screeningFindUniqueOrThrowArgs>(args: SelectSubset<T, eligibility_screeningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eligibility_screeningClient<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eligibility_screening that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligibility_screeningFindFirstArgs} args - Arguments to find a Eligibility_screening
     * @example
     * // Get one Eligibility_screening
     * const eligibility_screening = await prisma.eligibility_screening.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eligibility_screeningFindFirstArgs>(args?: SelectSubset<T, eligibility_screeningFindFirstArgs<ExtArgs>>): Prisma__eligibility_screeningClient<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eligibility_screening that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligibility_screeningFindFirstOrThrowArgs} args - Arguments to find a Eligibility_screening
     * @example
     * // Get one Eligibility_screening
     * const eligibility_screening = await prisma.eligibility_screening.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eligibility_screeningFindFirstOrThrowArgs>(args?: SelectSubset<T, eligibility_screeningFindFirstOrThrowArgs<ExtArgs>>): Prisma__eligibility_screeningClient<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eligibility_screenings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligibility_screeningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eligibility_screenings
     * const eligibility_screenings = await prisma.eligibility_screening.findMany()
     * 
     * // Get first 10 Eligibility_screenings
     * const eligibility_screenings = await prisma.eligibility_screening.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eligibility_screeningWithIdOnly = await prisma.eligibility_screening.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eligibility_screeningFindManyArgs>(args?: SelectSubset<T, eligibility_screeningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eligibility_screening.
     * @param {eligibility_screeningCreateArgs} args - Arguments to create a Eligibility_screening.
     * @example
     * // Create one Eligibility_screening
     * const Eligibility_screening = await prisma.eligibility_screening.create({
     *   data: {
     *     // ... data to create a Eligibility_screening
     *   }
     * })
     * 
     */
    create<T extends eligibility_screeningCreateArgs>(args: SelectSubset<T, eligibility_screeningCreateArgs<ExtArgs>>): Prisma__eligibility_screeningClient<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eligibility_screenings.
     * @param {eligibility_screeningCreateManyArgs} args - Arguments to create many Eligibility_screenings.
     * @example
     * // Create many Eligibility_screenings
     * const eligibility_screening = await prisma.eligibility_screening.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eligibility_screeningCreateManyArgs>(args?: SelectSubset<T, eligibility_screeningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eligibility_screenings and returns the data saved in the database.
     * @param {eligibility_screeningCreateManyAndReturnArgs} args - Arguments to create many Eligibility_screenings.
     * @example
     * // Create many Eligibility_screenings
     * const eligibility_screening = await prisma.eligibility_screening.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eligibility_screenings and only return the `id`
     * const eligibility_screeningWithIdOnly = await prisma.eligibility_screening.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eligibility_screeningCreateManyAndReturnArgs>(args?: SelectSubset<T, eligibility_screeningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eligibility_screening.
     * @param {eligibility_screeningDeleteArgs} args - Arguments to delete one Eligibility_screening.
     * @example
     * // Delete one Eligibility_screening
     * const Eligibility_screening = await prisma.eligibility_screening.delete({
     *   where: {
     *     // ... filter to delete one Eligibility_screening
     *   }
     * })
     * 
     */
    delete<T extends eligibility_screeningDeleteArgs>(args: SelectSubset<T, eligibility_screeningDeleteArgs<ExtArgs>>): Prisma__eligibility_screeningClient<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eligibility_screening.
     * @param {eligibility_screeningUpdateArgs} args - Arguments to update one Eligibility_screening.
     * @example
     * // Update one Eligibility_screening
     * const eligibility_screening = await prisma.eligibility_screening.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eligibility_screeningUpdateArgs>(args: SelectSubset<T, eligibility_screeningUpdateArgs<ExtArgs>>): Prisma__eligibility_screeningClient<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eligibility_screenings.
     * @param {eligibility_screeningDeleteManyArgs} args - Arguments to filter Eligibility_screenings to delete.
     * @example
     * // Delete a few Eligibility_screenings
     * const { count } = await prisma.eligibility_screening.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eligibility_screeningDeleteManyArgs>(args?: SelectSubset<T, eligibility_screeningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eligibility_screenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligibility_screeningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eligibility_screenings
     * const eligibility_screening = await prisma.eligibility_screening.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eligibility_screeningUpdateManyArgs>(args: SelectSubset<T, eligibility_screeningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eligibility_screenings and returns the data updated in the database.
     * @param {eligibility_screeningUpdateManyAndReturnArgs} args - Arguments to update many Eligibility_screenings.
     * @example
     * // Update many Eligibility_screenings
     * const eligibility_screening = await prisma.eligibility_screening.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eligibility_screenings and only return the `id`
     * const eligibility_screeningWithIdOnly = await prisma.eligibility_screening.updateManyAndReturn({
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
    updateManyAndReturn<T extends eligibility_screeningUpdateManyAndReturnArgs>(args: SelectSubset<T, eligibility_screeningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eligibility_screening.
     * @param {eligibility_screeningUpsertArgs} args - Arguments to update or create a Eligibility_screening.
     * @example
     * // Update or create a Eligibility_screening
     * const eligibility_screening = await prisma.eligibility_screening.upsert({
     *   create: {
     *     // ... data to create a Eligibility_screening
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eligibility_screening we want to update
     *   }
     * })
     */
    upsert<T extends eligibility_screeningUpsertArgs>(args: SelectSubset<T, eligibility_screeningUpsertArgs<ExtArgs>>): Prisma__eligibility_screeningClient<$Result.GetResult<Prisma.$eligibility_screeningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eligibility_screenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligibility_screeningCountArgs} args - Arguments to filter Eligibility_screenings to count.
     * @example
     * // Count the number of Eligibility_screenings
     * const count = await prisma.eligibility_screening.count({
     *   where: {
     *     // ... the filter for the Eligibility_screenings we want to count
     *   }
     * })
    **/
    count<T extends eligibility_screeningCountArgs>(
      args?: Subset<T, eligibility_screeningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eligibility_screeningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eligibility_screening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eligibility_screeningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Eligibility_screeningAggregateArgs>(args: Subset<T, Eligibility_screeningAggregateArgs>): Prisma.PrismaPromise<GetEligibility_screeningAggregateType<T>>

    /**
     * Group by Eligibility_screening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligibility_screeningGroupByArgs} args - Group by arguments.
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
      T extends eligibility_screeningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eligibility_screeningGroupByArgs['orderBy'] }
        : { orderBy?: eligibility_screeningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eligibility_screeningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEligibility_screeningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eligibility_screening model
   */
  readonly fields: eligibility_screeningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eligibility_screening.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eligibility_screeningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends eligibility_screening$userArgs<ExtArgs> = {}>(args?: Subset<T, eligibility_screening$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    potential_participant<T extends eligibility_screening$potential_participantArgs<ExtArgs> = {}>(args?: Subset<T, eligibility_screening$potential_participantArgs<ExtArgs>>): Prisma__potential_participantsClient<$Result.GetResult<Prisma.$potential_participantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the eligibility_screening model
   */
  interface eligibility_screeningFieldRefs {
    readonly id: FieldRef<"eligibility_screening", 'Int'>
    readonly user_id: FieldRef<"eligibility_screening", 'Int'>
    readonly potential_participant_id: FieldRef<"eligibility_screening", 'Int'>
    readonly chp_partner_business: FieldRef<"eligibility_screening", 'String'>
    readonly contact_method: FieldRef<"eligibility_screening", 'String'>
    readonly history_of_contact_attempts: FieldRef<"eligibility_screening", 'String'>
    readonly mode_of_learning_about_chp: FieldRef<"eligibility_screening", 'String'>
    readonly source_of_learning_about_chp: FieldRef<"eligibility_screening", 'String'>
    readonly individual_interest_in_chp: FieldRef<"eligibility_screening", 'String'>
    readonly disability_accompanied_by_long_covid: FieldRef<"eligibility_screening", 'String'>
    readonly long_covid_syndrome: FieldRef<"eligibility_screening", 'String'>
    readonly is_ms_resident: FieldRef<"eligibility_screening", 'String'>
    readonly is_age_16_to_70: FieldRef<"eligibility_screening", 'String'>
    readonly is_currently_employed: FieldRef<"eligibility_screening", 'String'>
    readonly desire_to_continue_work: FieldRef<"eligibility_screening", 'String'>
    readonly paid_subminimum_wage: FieldRef<"eligibility_screening", 'String'>
    readonly working_leave_status: FieldRef<"eligibility_screening", 'String'>
    readonly risk_of_losing_job: FieldRef<"eligibility_screening", 'String'>
    readonly how_you_hope_to_benefit_from_chp: FieldRef<"eligibility_screening", 'String'>
    readonly interest_in_returning_to_work: FieldRef<"eligibility_screening", 'String'>
    readonly not_involving_other_off: FieldRef<"eligibility_screening", 'String'>
    readonly confirmation_of_eligibility_questions: FieldRef<"eligibility_screening", 'Boolean'>
    readonly initial_contact_results: FieldRef<"eligibility_screening", 'String'>
    readonly reason_for_not_eligible: FieldRef<"eligibility_screening", 'String'>
    readonly statement_of_informed_consent: FieldRef<"eligibility_screening", 'String'>
    readonly release_of_information_roi: FieldRef<"eligibility_screening", 'String'>
    readonly individual_provided_medical_information: FieldRef<"eligibility_screening", 'String'>
    readonly status_of_receiving_medical_information: FieldRef<"eligibility_screening", 'String'>
    readonly individual_home_address: FieldRef<"eligibility_screening", 'String'>
    readonly individual_birthdate: FieldRef<"eligibility_screening", 'String'>
    readonly eligibility_for_participation: FieldRef<"eligibility_screening", 'String'>
    readonly service_region: FieldRef<"eligibility_screening", 'String'>
    readonly vocational_counselor_assigned_first_name: FieldRef<"eligibility_screening", 'String'>
    readonly vocational_counselor_assigned_last_name: FieldRef<"eligibility_screening", 'String'>
    readonly vocational_counselors_caseload_or_waitlist: FieldRef<"eligibility_screening", 'String'>
    readonly current_client_of_mdrs_or_no: FieldRef<"eligibility_screening", 'String'>
    readonly submit_an_mdrs_referral: FieldRef<"eligibility_screening", 'String'>
    readonly sharing_information_with_mdrs: FieldRef<"eligibility_screening", 'String'>
    readonly created_at: FieldRef<"eligibility_screening", 'DateTime'>
    readonly updated_at: FieldRef<"eligibility_screening", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * eligibility_screening findUnique
   */
  export type eligibility_screeningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * Filter, which eligibility_screening to fetch.
     */
    where: eligibility_screeningWhereUniqueInput
  }

  /**
   * eligibility_screening findUniqueOrThrow
   */
  export type eligibility_screeningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * Filter, which eligibility_screening to fetch.
     */
    where: eligibility_screeningWhereUniqueInput
  }

  /**
   * eligibility_screening findFirst
   */
  export type eligibility_screeningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * Filter, which eligibility_screening to fetch.
     */
    where?: eligibility_screeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eligibility_screenings to fetch.
     */
    orderBy?: eligibility_screeningOrderByWithRelationInput | eligibility_screeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eligibility_screenings.
     */
    cursor?: eligibility_screeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eligibility_screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eligibility_screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eligibility_screenings.
     */
    distinct?: Eligibility_screeningScalarFieldEnum | Eligibility_screeningScalarFieldEnum[]
  }

  /**
   * eligibility_screening findFirstOrThrow
   */
  export type eligibility_screeningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * Filter, which eligibility_screening to fetch.
     */
    where?: eligibility_screeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eligibility_screenings to fetch.
     */
    orderBy?: eligibility_screeningOrderByWithRelationInput | eligibility_screeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eligibility_screenings.
     */
    cursor?: eligibility_screeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eligibility_screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eligibility_screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eligibility_screenings.
     */
    distinct?: Eligibility_screeningScalarFieldEnum | Eligibility_screeningScalarFieldEnum[]
  }

  /**
   * eligibility_screening findMany
   */
  export type eligibility_screeningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * Filter, which eligibility_screenings to fetch.
     */
    where?: eligibility_screeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eligibility_screenings to fetch.
     */
    orderBy?: eligibility_screeningOrderByWithRelationInput | eligibility_screeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eligibility_screenings.
     */
    cursor?: eligibility_screeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eligibility_screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eligibility_screenings.
     */
    skip?: number
    distinct?: Eligibility_screeningScalarFieldEnum | Eligibility_screeningScalarFieldEnum[]
  }

  /**
   * eligibility_screening create
   */
  export type eligibility_screeningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * The data needed to create a eligibility_screening.
     */
    data: XOR<eligibility_screeningCreateInput, eligibility_screeningUncheckedCreateInput>
  }

  /**
   * eligibility_screening createMany
   */
  export type eligibility_screeningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eligibility_screenings.
     */
    data: eligibility_screeningCreateManyInput | eligibility_screeningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eligibility_screening createManyAndReturn
   */
  export type eligibility_screeningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * The data used to create many eligibility_screenings.
     */
    data: eligibility_screeningCreateManyInput | eligibility_screeningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * eligibility_screening update
   */
  export type eligibility_screeningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * The data needed to update a eligibility_screening.
     */
    data: XOR<eligibility_screeningUpdateInput, eligibility_screeningUncheckedUpdateInput>
    /**
     * Choose, which eligibility_screening to update.
     */
    where: eligibility_screeningWhereUniqueInput
  }

  /**
   * eligibility_screening updateMany
   */
  export type eligibility_screeningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eligibility_screenings.
     */
    data: XOR<eligibility_screeningUpdateManyMutationInput, eligibility_screeningUncheckedUpdateManyInput>
    /**
     * Filter which eligibility_screenings to update
     */
    where?: eligibility_screeningWhereInput
    /**
     * Limit how many eligibility_screenings to update.
     */
    limit?: number
  }

  /**
   * eligibility_screening updateManyAndReturn
   */
  export type eligibility_screeningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * The data used to update eligibility_screenings.
     */
    data: XOR<eligibility_screeningUpdateManyMutationInput, eligibility_screeningUncheckedUpdateManyInput>
    /**
     * Filter which eligibility_screenings to update
     */
    where?: eligibility_screeningWhereInput
    /**
     * Limit how many eligibility_screenings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * eligibility_screening upsert
   */
  export type eligibility_screeningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * The filter to search for the eligibility_screening to update in case it exists.
     */
    where: eligibility_screeningWhereUniqueInput
    /**
     * In case the eligibility_screening found by the `where` argument doesn't exist, create a new eligibility_screening with this data.
     */
    create: XOR<eligibility_screeningCreateInput, eligibility_screeningUncheckedCreateInput>
    /**
     * In case the eligibility_screening was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eligibility_screeningUpdateInput, eligibility_screeningUncheckedUpdateInput>
  }

  /**
   * eligibility_screening delete
   */
  export type eligibility_screeningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
    /**
     * Filter which eligibility_screening to delete.
     */
    where: eligibility_screeningWhereUniqueInput
  }

  /**
   * eligibility_screening deleteMany
   */
  export type eligibility_screeningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eligibility_screenings to delete
     */
    where?: eligibility_screeningWhereInput
    /**
     * Limit how many eligibility_screenings to delete.
     */
    limit?: number
  }

  /**
   * eligibility_screening.user
   */
  export type eligibility_screening$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * eligibility_screening.potential_participant
   */
  export type eligibility_screening$potential_participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the potential_participants
     */
    select?: potential_participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the potential_participants
     */
    omit?: potential_participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: potential_participantsInclude<ExtArgs> | null
    where?: potential_participantsWhereInput
  }

  /**
   * eligibility_screening without action
   */
  export type eligibility_screeningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eligibility_screening
     */
    select?: eligibility_screeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eligibility_screening
     */
    omit?: eligibility_screeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eligibility_screeningInclude<ExtArgs> | null
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


  export const Potential_participantsScalarFieldEnum: {
    id: 'id',
    eligibility_criteria: 'eligibility_criteria',
    first_name: 'first_name',
    last_name: 'last_name',
    phone_number: 'phone_number',
    email: 'email',
    county: 'county',
    zip: 'zip',
    referrer_first_name: 'referrer_first_name',
    referrer_last_name: 'referrer_last_name',
    referrer_phone: 'referrer_phone',
    referrer_email: 'referrer_email',
    referral_source: 'referral_source',
    referral_business_name: 'referral_business_name',
    client_of_mdrrs: 'client_of_mdrrs',
    staff_submit_referral_to_mdrs: 'staff_submit_referral_to_mdrs',
    release_info_consent_mdrs: 'release_info_consent_mdrs',
    long_covid_syndrome: 'long_covid_syndrome',
    is_ms_resident: 'is_ms_resident',
    is_age_16_to_70: 'is_age_16_to_70',
    desire_to_continue_work: 'desire_to_continue_work',
    wants_to_work_if_unemployed: 'wants_to_work_if_unemployed',
    not_involving_other_off: 'not_involving_other_off',
    submitted_at: 'submitted_at'
  };

  export type Potential_participantsScalarFieldEnum = (typeof Potential_participantsScalarFieldEnum)[keyof typeof Potential_participantsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    role: 'role',
    role_description: 'role_description',
    role_capabilities: 'role_capabilities',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    organization: 'organization',
    title: 'title',
    last_login: 'last_login',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Eligibility_screeningScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    potential_participant_id: 'potential_participant_id',
    chp_partner_business: 'chp_partner_business',
    contact_method: 'contact_method',
    history_of_contact_attempts: 'history_of_contact_attempts',
    mode_of_learning_about_chp: 'mode_of_learning_about_chp',
    source_of_learning_about_chp: 'source_of_learning_about_chp',
    individual_interest_in_chp: 'individual_interest_in_chp',
    disability_accompanied_by_long_covid: 'disability_accompanied_by_long_covid',
    long_covid_syndrome: 'long_covid_syndrome',
    is_ms_resident: 'is_ms_resident',
    is_age_16_to_70: 'is_age_16_to_70',
    is_currently_employed: 'is_currently_employed',
    desire_to_continue_work: 'desire_to_continue_work',
    paid_subminimum_wage: 'paid_subminimum_wage',
    working_leave_status: 'working_leave_status',
    risk_of_losing_job: 'risk_of_losing_job',
    how_you_hope_to_benefit_from_chp: 'how_you_hope_to_benefit_from_chp',
    interest_in_returning_to_work: 'interest_in_returning_to_work',
    not_involving_other_off: 'not_involving_other_off',
    confirmation_of_eligibility_questions: 'confirmation_of_eligibility_questions',
    initial_contact_results: 'initial_contact_results',
    reason_for_not_eligible: 'reason_for_not_eligible',
    statement_of_informed_consent: 'statement_of_informed_consent',
    release_of_information_roi: 'release_of_information_roi',
    individual_provided_medical_information: 'individual_provided_medical_information',
    status_of_receiving_medical_information: 'status_of_receiving_medical_information',
    individual_home_address: 'individual_home_address',
    individual_birthdate: 'individual_birthdate',
    eligibility_for_participation: 'eligibility_for_participation',
    service_region: 'service_region',
    vocational_counselor_assigned_first_name: 'vocational_counselor_assigned_first_name',
    vocational_counselor_assigned_last_name: 'vocational_counselor_assigned_last_name',
    vocational_counselors_caseload_or_waitlist: 'vocational_counselors_caseload_or_waitlist',
    current_client_of_mdrs_or_no: 'current_client_of_mdrs_or_no',
    submit_an_mdrs_referral: 'submit_an_mdrs_referral',
    sharing_information_with_mdrs: 'sharing_information_with_mdrs',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Eligibility_screeningScalarFieldEnum = (typeof Eligibility_screeningScalarFieldEnum)[keyof typeof Eligibility_screeningScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type potential_participantsWhereInput = {
    AND?: potential_participantsWhereInput | potential_participantsWhereInput[]
    OR?: potential_participantsWhereInput[]
    NOT?: potential_participantsWhereInput | potential_participantsWhereInput[]
    id?: IntFilter<"potential_participants"> | number
    eligibility_criteria?: StringNullableFilter<"potential_participants"> | string | null
    first_name?: StringNullableFilter<"potential_participants"> | string | null
    last_name?: StringNullableFilter<"potential_participants"> | string | null
    phone_number?: StringNullableFilter<"potential_participants"> | string | null
    email?: StringNullableFilter<"potential_participants"> | string | null
    county?: StringNullableFilter<"potential_participants"> | string | null
    zip?: StringNullableFilter<"potential_participants"> | string | null
    referrer_first_name?: StringNullableFilter<"potential_participants"> | string | null
    referrer_last_name?: StringNullableFilter<"potential_participants"> | string | null
    referrer_phone?: StringNullableFilter<"potential_participants"> | string | null
    referrer_email?: StringNullableFilter<"potential_participants"> | string | null
    referral_source?: StringNullableFilter<"potential_participants"> | string | null
    referral_business_name?: StringNullableFilter<"potential_participants"> | string | null
    client_of_mdrrs?: StringNullableFilter<"potential_participants"> | string | null
    staff_submit_referral_to_mdrs?: StringNullableFilter<"potential_participants"> | string | null
    release_info_consent_mdrs?: StringNullableFilter<"potential_participants"> | string | null
    long_covid_syndrome?: StringNullableFilter<"potential_participants"> | string | null
    is_ms_resident?: StringNullableFilter<"potential_participants"> | string | null
    is_age_16_to_70?: StringNullableFilter<"potential_participants"> | string | null
    desire_to_continue_work?: StringNullableFilter<"potential_participants"> | string | null
    wants_to_work_if_unemployed?: StringNullableFilter<"potential_participants"> | string | null
    not_involving_other_off?: StringNullableFilter<"potential_participants"> | string | null
    submitted_at?: DateTimeNullableFilter<"potential_participants"> | Date | string | null
    eligibility_screening?: Eligibility_screeningListRelationFilter
  }

  export type potential_participantsOrderByWithRelationInput = {
    id?: SortOrder
    eligibility_criteria?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    county?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    referrer_first_name?: SortOrderInput | SortOrder
    referrer_last_name?: SortOrderInput | SortOrder
    referrer_phone?: SortOrderInput | SortOrder
    referrer_email?: SortOrderInput | SortOrder
    referral_source?: SortOrderInput | SortOrder
    referral_business_name?: SortOrderInput | SortOrder
    client_of_mdrrs?: SortOrderInput | SortOrder
    staff_submit_referral_to_mdrs?: SortOrderInput | SortOrder
    release_info_consent_mdrs?: SortOrderInput | SortOrder
    long_covid_syndrome?: SortOrderInput | SortOrder
    is_ms_resident?: SortOrderInput | SortOrder
    is_age_16_to_70?: SortOrderInput | SortOrder
    desire_to_continue_work?: SortOrderInput | SortOrder
    wants_to_work_if_unemployed?: SortOrderInput | SortOrder
    not_involving_other_off?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    eligibility_screening?: eligibility_screeningOrderByRelationAggregateInput
  }

  export type potential_participantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: potential_participantsWhereInput | potential_participantsWhereInput[]
    OR?: potential_participantsWhereInput[]
    NOT?: potential_participantsWhereInput | potential_participantsWhereInput[]
    eligibility_criteria?: StringNullableFilter<"potential_participants"> | string | null
    first_name?: StringNullableFilter<"potential_participants"> | string | null
    last_name?: StringNullableFilter<"potential_participants"> | string | null
    phone_number?: StringNullableFilter<"potential_participants"> | string | null
    email?: StringNullableFilter<"potential_participants"> | string | null
    county?: StringNullableFilter<"potential_participants"> | string | null
    zip?: StringNullableFilter<"potential_participants"> | string | null
    referrer_first_name?: StringNullableFilter<"potential_participants"> | string | null
    referrer_last_name?: StringNullableFilter<"potential_participants"> | string | null
    referrer_phone?: StringNullableFilter<"potential_participants"> | string | null
    referrer_email?: StringNullableFilter<"potential_participants"> | string | null
    referral_source?: StringNullableFilter<"potential_participants"> | string | null
    referral_business_name?: StringNullableFilter<"potential_participants"> | string | null
    client_of_mdrrs?: StringNullableFilter<"potential_participants"> | string | null
    staff_submit_referral_to_mdrs?: StringNullableFilter<"potential_participants"> | string | null
    release_info_consent_mdrs?: StringNullableFilter<"potential_participants"> | string | null
    long_covid_syndrome?: StringNullableFilter<"potential_participants"> | string | null
    is_ms_resident?: StringNullableFilter<"potential_participants"> | string | null
    is_age_16_to_70?: StringNullableFilter<"potential_participants"> | string | null
    desire_to_continue_work?: StringNullableFilter<"potential_participants"> | string | null
    wants_to_work_if_unemployed?: StringNullableFilter<"potential_participants"> | string | null
    not_involving_other_off?: StringNullableFilter<"potential_participants"> | string | null
    submitted_at?: DateTimeNullableFilter<"potential_participants"> | Date | string | null
    eligibility_screening?: Eligibility_screeningListRelationFilter
  }, "id">

  export type potential_participantsOrderByWithAggregationInput = {
    id?: SortOrder
    eligibility_criteria?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    county?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    referrer_first_name?: SortOrderInput | SortOrder
    referrer_last_name?: SortOrderInput | SortOrder
    referrer_phone?: SortOrderInput | SortOrder
    referrer_email?: SortOrderInput | SortOrder
    referral_source?: SortOrderInput | SortOrder
    referral_business_name?: SortOrderInput | SortOrder
    client_of_mdrrs?: SortOrderInput | SortOrder
    staff_submit_referral_to_mdrs?: SortOrderInput | SortOrder
    release_info_consent_mdrs?: SortOrderInput | SortOrder
    long_covid_syndrome?: SortOrderInput | SortOrder
    is_ms_resident?: SortOrderInput | SortOrder
    is_age_16_to_70?: SortOrderInput | SortOrder
    desire_to_continue_work?: SortOrderInput | SortOrder
    wants_to_work_if_unemployed?: SortOrderInput | SortOrder
    not_involving_other_off?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    _count?: potential_participantsCountOrderByAggregateInput
    _avg?: potential_participantsAvgOrderByAggregateInput
    _max?: potential_participantsMaxOrderByAggregateInput
    _min?: potential_participantsMinOrderByAggregateInput
    _sum?: potential_participantsSumOrderByAggregateInput
  }

  export type potential_participantsScalarWhereWithAggregatesInput = {
    AND?: potential_participantsScalarWhereWithAggregatesInput | potential_participantsScalarWhereWithAggregatesInput[]
    OR?: potential_participantsScalarWhereWithAggregatesInput[]
    NOT?: potential_participantsScalarWhereWithAggregatesInput | potential_participantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"potential_participants"> | number
    eligibility_criteria?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    email?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    county?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    zip?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    referrer_first_name?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    referrer_last_name?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    referrer_phone?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    referrer_email?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    referral_source?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    referral_business_name?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    client_of_mdrrs?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    staff_submit_referral_to_mdrs?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    release_info_consent_mdrs?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    long_covid_syndrome?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    is_ms_resident?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    is_age_16_to_70?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    desire_to_continue_work?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    wants_to_work_if_unemployed?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    not_involving_other_off?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    submitted_at?: DateTimeNullableWithAggregatesFilter<"potential_participants"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    role?: StringNullableFilter<"users"> | string | null
    role_description?: StringNullableFilter<"users"> | string | null
    role_capabilities?: StringNullableFilter<"users"> | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    organization?: StringNullableFilter<"users"> | string | null
    title?: StringNullableFilter<"users"> | string | null
    last_login?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    eligibility_screening?: Eligibility_screeningListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    role_description?: SortOrderInput | SortOrder
    role_capabilities?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    eligibility_screening?: eligibility_screeningOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    role?: StringNullableFilter<"users"> | string | null
    role_description?: StringNullableFilter<"users"> | string | null
    role_capabilities?: StringNullableFilter<"users"> | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    organization?: StringNullableFilter<"users"> | string | null
    title?: StringNullableFilter<"users"> | string | null
    last_login?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    eligibility_screening?: Eligibility_screeningListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    role_description?: SortOrderInput | SortOrder
    role_capabilities?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    role_description?: StringNullableWithAggregatesFilter<"users"> | string | null
    role_capabilities?: StringNullableWithAggregatesFilter<"users"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    organization?: StringNullableWithAggregatesFilter<"users"> | string | null
    title?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type eligibility_screeningWhereInput = {
    AND?: eligibility_screeningWhereInput | eligibility_screeningWhereInput[]
    OR?: eligibility_screeningWhereInput[]
    NOT?: eligibility_screeningWhereInput | eligibility_screeningWhereInput[]
    id?: IntFilter<"eligibility_screening"> | number
    user_id?: IntNullableFilter<"eligibility_screening"> | number | null
    potential_participant_id?: IntNullableFilter<"eligibility_screening"> | number | null
    chp_partner_business?: StringNullableFilter<"eligibility_screening"> | string | null
    contact_method?: StringNullableFilter<"eligibility_screening"> | string | null
    history_of_contact_attempts?: StringNullableFilter<"eligibility_screening"> | string | null
    mode_of_learning_about_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    source_of_learning_about_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_interest_in_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    disability_accompanied_by_long_covid?: StringNullableFilter<"eligibility_screening"> | string | null
    long_covid_syndrome?: StringNullableFilter<"eligibility_screening"> | string | null
    is_ms_resident?: StringNullableFilter<"eligibility_screening"> | string | null
    is_age_16_to_70?: StringNullableFilter<"eligibility_screening"> | string | null
    is_currently_employed?: StringNullableFilter<"eligibility_screening"> | string | null
    desire_to_continue_work?: StringNullableFilter<"eligibility_screening"> | string | null
    paid_subminimum_wage?: StringNullableFilter<"eligibility_screening"> | string | null
    working_leave_status?: StringNullableFilter<"eligibility_screening"> | string | null
    risk_of_losing_job?: StringNullableFilter<"eligibility_screening"> | string | null
    how_you_hope_to_benefit_from_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    interest_in_returning_to_work?: StringNullableFilter<"eligibility_screening"> | string | null
    not_involving_other_off?: StringNullableFilter<"eligibility_screening"> | string | null
    confirmation_of_eligibility_questions?: BoolFilter<"eligibility_screening"> | boolean
    initial_contact_results?: StringNullableFilter<"eligibility_screening"> | string | null
    reason_for_not_eligible?: StringNullableFilter<"eligibility_screening"> | string | null
    statement_of_informed_consent?: StringNullableFilter<"eligibility_screening"> | string | null
    release_of_information_roi?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_provided_medical_information?: StringNullableFilter<"eligibility_screening"> | string | null
    status_of_receiving_medical_information?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_home_address?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_birthdate?: StringNullableFilter<"eligibility_screening"> | string | null
    eligibility_for_participation?: StringFilter<"eligibility_screening"> | string
    service_region?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselor_assigned_first_name?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselor_assigned_last_name?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselors_caseload_or_waitlist?: StringNullableFilter<"eligibility_screening"> | string | null
    current_client_of_mdrs_or_no?: StringNullableFilter<"eligibility_screening"> | string | null
    submit_an_mdrs_referral?: StringNullableFilter<"eligibility_screening"> | string | null
    sharing_information_with_mdrs?: StringNullableFilter<"eligibility_screening"> | string | null
    created_at?: DateTimeFilter<"eligibility_screening"> | Date | string
    updated_at?: DateTimeFilter<"eligibility_screening"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    potential_participant?: XOR<Potential_participantsNullableScalarRelationFilter, potential_participantsWhereInput> | null
  }

  export type eligibility_screeningOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    potential_participant_id?: SortOrderInput | SortOrder
    chp_partner_business?: SortOrderInput | SortOrder
    contact_method?: SortOrderInput | SortOrder
    history_of_contact_attempts?: SortOrderInput | SortOrder
    mode_of_learning_about_chp?: SortOrderInput | SortOrder
    source_of_learning_about_chp?: SortOrderInput | SortOrder
    individual_interest_in_chp?: SortOrderInput | SortOrder
    disability_accompanied_by_long_covid?: SortOrderInput | SortOrder
    long_covid_syndrome?: SortOrderInput | SortOrder
    is_ms_resident?: SortOrderInput | SortOrder
    is_age_16_to_70?: SortOrderInput | SortOrder
    is_currently_employed?: SortOrderInput | SortOrder
    desire_to_continue_work?: SortOrderInput | SortOrder
    paid_subminimum_wage?: SortOrderInput | SortOrder
    working_leave_status?: SortOrderInput | SortOrder
    risk_of_losing_job?: SortOrderInput | SortOrder
    how_you_hope_to_benefit_from_chp?: SortOrderInput | SortOrder
    interest_in_returning_to_work?: SortOrderInput | SortOrder
    not_involving_other_off?: SortOrderInput | SortOrder
    confirmation_of_eligibility_questions?: SortOrder
    initial_contact_results?: SortOrderInput | SortOrder
    reason_for_not_eligible?: SortOrderInput | SortOrder
    statement_of_informed_consent?: SortOrderInput | SortOrder
    release_of_information_roi?: SortOrderInput | SortOrder
    individual_provided_medical_information?: SortOrderInput | SortOrder
    status_of_receiving_medical_information?: SortOrderInput | SortOrder
    individual_home_address?: SortOrderInput | SortOrder
    individual_birthdate?: SortOrderInput | SortOrder
    eligibility_for_participation?: SortOrder
    service_region?: SortOrderInput | SortOrder
    vocational_counselor_assigned_first_name?: SortOrderInput | SortOrder
    vocational_counselor_assigned_last_name?: SortOrderInput | SortOrder
    vocational_counselors_caseload_or_waitlist?: SortOrderInput | SortOrder
    current_client_of_mdrs_or_no?: SortOrderInput | SortOrder
    submit_an_mdrs_referral?: SortOrderInput | SortOrder
    sharing_information_with_mdrs?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: usersOrderByWithRelationInput
    potential_participant?: potential_participantsOrderByWithRelationInput
  }

  export type eligibility_screeningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eligibility_screeningWhereInput | eligibility_screeningWhereInput[]
    OR?: eligibility_screeningWhereInput[]
    NOT?: eligibility_screeningWhereInput | eligibility_screeningWhereInput[]
    user_id?: IntNullableFilter<"eligibility_screening"> | number | null
    potential_participant_id?: IntNullableFilter<"eligibility_screening"> | number | null
    chp_partner_business?: StringNullableFilter<"eligibility_screening"> | string | null
    contact_method?: StringNullableFilter<"eligibility_screening"> | string | null
    history_of_contact_attempts?: StringNullableFilter<"eligibility_screening"> | string | null
    mode_of_learning_about_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    source_of_learning_about_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_interest_in_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    disability_accompanied_by_long_covid?: StringNullableFilter<"eligibility_screening"> | string | null
    long_covid_syndrome?: StringNullableFilter<"eligibility_screening"> | string | null
    is_ms_resident?: StringNullableFilter<"eligibility_screening"> | string | null
    is_age_16_to_70?: StringNullableFilter<"eligibility_screening"> | string | null
    is_currently_employed?: StringNullableFilter<"eligibility_screening"> | string | null
    desire_to_continue_work?: StringNullableFilter<"eligibility_screening"> | string | null
    paid_subminimum_wage?: StringNullableFilter<"eligibility_screening"> | string | null
    working_leave_status?: StringNullableFilter<"eligibility_screening"> | string | null
    risk_of_losing_job?: StringNullableFilter<"eligibility_screening"> | string | null
    how_you_hope_to_benefit_from_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    interest_in_returning_to_work?: StringNullableFilter<"eligibility_screening"> | string | null
    not_involving_other_off?: StringNullableFilter<"eligibility_screening"> | string | null
    confirmation_of_eligibility_questions?: BoolFilter<"eligibility_screening"> | boolean
    initial_contact_results?: StringNullableFilter<"eligibility_screening"> | string | null
    reason_for_not_eligible?: StringNullableFilter<"eligibility_screening"> | string | null
    statement_of_informed_consent?: StringNullableFilter<"eligibility_screening"> | string | null
    release_of_information_roi?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_provided_medical_information?: StringNullableFilter<"eligibility_screening"> | string | null
    status_of_receiving_medical_information?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_home_address?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_birthdate?: StringNullableFilter<"eligibility_screening"> | string | null
    eligibility_for_participation?: StringFilter<"eligibility_screening"> | string
    service_region?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselor_assigned_first_name?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselor_assigned_last_name?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselors_caseload_or_waitlist?: StringNullableFilter<"eligibility_screening"> | string | null
    current_client_of_mdrs_or_no?: StringNullableFilter<"eligibility_screening"> | string | null
    submit_an_mdrs_referral?: StringNullableFilter<"eligibility_screening"> | string | null
    sharing_information_with_mdrs?: StringNullableFilter<"eligibility_screening"> | string | null
    created_at?: DateTimeFilter<"eligibility_screening"> | Date | string
    updated_at?: DateTimeFilter<"eligibility_screening"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    potential_participant?: XOR<Potential_participantsNullableScalarRelationFilter, potential_participantsWhereInput> | null
  }, "id">

  export type eligibility_screeningOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    potential_participant_id?: SortOrderInput | SortOrder
    chp_partner_business?: SortOrderInput | SortOrder
    contact_method?: SortOrderInput | SortOrder
    history_of_contact_attempts?: SortOrderInput | SortOrder
    mode_of_learning_about_chp?: SortOrderInput | SortOrder
    source_of_learning_about_chp?: SortOrderInput | SortOrder
    individual_interest_in_chp?: SortOrderInput | SortOrder
    disability_accompanied_by_long_covid?: SortOrderInput | SortOrder
    long_covid_syndrome?: SortOrderInput | SortOrder
    is_ms_resident?: SortOrderInput | SortOrder
    is_age_16_to_70?: SortOrderInput | SortOrder
    is_currently_employed?: SortOrderInput | SortOrder
    desire_to_continue_work?: SortOrderInput | SortOrder
    paid_subminimum_wage?: SortOrderInput | SortOrder
    working_leave_status?: SortOrderInput | SortOrder
    risk_of_losing_job?: SortOrderInput | SortOrder
    how_you_hope_to_benefit_from_chp?: SortOrderInput | SortOrder
    interest_in_returning_to_work?: SortOrderInput | SortOrder
    not_involving_other_off?: SortOrderInput | SortOrder
    confirmation_of_eligibility_questions?: SortOrder
    initial_contact_results?: SortOrderInput | SortOrder
    reason_for_not_eligible?: SortOrderInput | SortOrder
    statement_of_informed_consent?: SortOrderInput | SortOrder
    release_of_information_roi?: SortOrderInput | SortOrder
    individual_provided_medical_information?: SortOrderInput | SortOrder
    status_of_receiving_medical_information?: SortOrderInput | SortOrder
    individual_home_address?: SortOrderInput | SortOrder
    individual_birthdate?: SortOrderInput | SortOrder
    eligibility_for_participation?: SortOrder
    service_region?: SortOrderInput | SortOrder
    vocational_counselor_assigned_first_name?: SortOrderInput | SortOrder
    vocational_counselor_assigned_last_name?: SortOrderInput | SortOrder
    vocational_counselors_caseload_or_waitlist?: SortOrderInput | SortOrder
    current_client_of_mdrs_or_no?: SortOrderInput | SortOrder
    submit_an_mdrs_referral?: SortOrderInput | SortOrder
    sharing_information_with_mdrs?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: eligibility_screeningCountOrderByAggregateInput
    _avg?: eligibility_screeningAvgOrderByAggregateInput
    _max?: eligibility_screeningMaxOrderByAggregateInput
    _min?: eligibility_screeningMinOrderByAggregateInput
    _sum?: eligibility_screeningSumOrderByAggregateInput
  }

  export type eligibility_screeningScalarWhereWithAggregatesInput = {
    AND?: eligibility_screeningScalarWhereWithAggregatesInput | eligibility_screeningScalarWhereWithAggregatesInput[]
    OR?: eligibility_screeningScalarWhereWithAggregatesInput[]
    NOT?: eligibility_screeningScalarWhereWithAggregatesInput | eligibility_screeningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"eligibility_screening"> | number
    user_id?: IntNullableWithAggregatesFilter<"eligibility_screening"> | number | null
    potential_participant_id?: IntNullableWithAggregatesFilter<"eligibility_screening"> | number | null
    chp_partner_business?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    contact_method?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    history_of_contact_attempts?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    mode_of_learning_about_chp?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    source_of_learning_about_chp?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    individual_interest_in_chp?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    disability_accompanied_by_long_covid?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    long_covid_syndrome?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    is_ms_resident?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    is_age_16_to_70?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    is_currently_employed?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    desire_to_continue_work?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    paid_subminimum_wage?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    working_leave_status?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    risk_of_losing_job?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    how_you_hope_to_benefit_from_chp?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    interest_in_returning_to_work?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    not_involving_other_off?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    confirmation_of_eligibility_questions?: BoolWithAggregatesFilter<"eligibility_screening"> | boolean
    initial_contact_results?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    reason_for_not_eligible?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    statement_of_informed_consent?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    release_of_information_roi?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    individual_provided_medical_information?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    status_of_receiving_medical_information?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    individual_home_address?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    individual_birthdate?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    eligibility_for_participation?: StringWithAggregatesFilter<"eligibility_screening"> | string
    service_region?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    vocational_counselor_assigned_first_name?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    vocational_counselor_assigned_last_name?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    vocational_counselors_caseload_or_waitlist?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    current_client_of_mdrs_or_no?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    submit_an_mdrs_referral?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    sharing_information_with_mdrs?: StringNullableWithAggregatesFilter<"eligibility_screening"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"eligibility_screening"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"eligibility_screening"> | Date | string
  }

  export type potential_participantsCreateInput = {
    eligibility_criteria?: string | null
    first_name?: string | null
    last_name?: string | null
    phone_number?: string | null
    email?: string | null
    county?: string | null
    zip?: string | null
    referrer_first_name?: string | null
    referrer_last_name?: string | null
    referrer_phone?: string | null
    referrer_email?: string | null
    referral_source?: string | null
    referral_business_name?: string | null
    client_of_mdrrs?: string | null
    staff_submit_referral_to_mdrs?: string | null
    release_info_consent_mdrs?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    desire_to_continue_work?: string | null
    wants_to_work_if_unemployed?: string | null
    not_involving_other_off?: string | null
    submitted_at?: Date | string | null
    eligibility_screening?: eligibility_screeningCreateNestedManyWithoutPotential_participantInput
  }

  export type potential_participantsUncheckedCreateInput = {
    id?: number
    eligibility_criteria?: string | null
    first_name?: string | null
    last_name?: string | null
    phone_number?: string | null
    email?: string | null
    county?: string | null
    zip?: string | null
    referrer_first_name?: string | null
    referrer_last_name?: string | null
    referrer_phone?: string | null
    referrer_email?: string | null
    referral_source?: string | null
    referral_business_name?: string | null
    client_of_mdrrs?: string | null
    staff_submit_referral_to_mdrs?: string | null
    release_info_consent_mdrs?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    desire_to_continue_work?: string | null
    wants_to_work_if_unemployed?: string | null
    not_involving_other_off?: string | null
    submitted_at?: Date | string | null
    eligibility_screening?: eligibility_screeningUncheckedCreateNestedManyWithoutPotential_participantInput
  }

  export type potential_participantsUpdateInput = {
    eligibility_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_email?: NullableStringFieldUpdateOperationsInput | string | null
    referral_source?: NullableStringFieldUpdateOperationsInput | string | null
    referral_business_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_of_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    staff_submit_referral_to_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibility_screening?: eligibility_screeningUpdateManyWithoutPotential_participantNestedInput
  }

  export type potential_participantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eligibility_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_email?: NullableStringFieldUpdateOperationsInput | string | null
    referral_source?: NullableStringFieldUpdateOperationsInput | string | null
    referral_business_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_of_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    staff_submit_referral_to_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibility_screening?: eligibility_screeningUncheckedUpdateManyWithoutPotential_participantNestedInput
  }

  export type potential_participantsCreateManyInput = {
    id?: number
    eligibility_criteria?: string | null
    first_name?: string | null
    last_name?: string | null
    phone_number?: string | null
    email?: string | null
    county?: string | null
    zip?: string | null
    referrer_first_name?: string | null
    referrer_last_name?: string | null
    referrer_phone?: string | null
    referrer_email?: string | null
    referral_source?: string | null
    referral_business_name?: string | null
    client_of_mdrrs?: string | null
    staff_submit_referral_to_mdrs?: string | null
    release_info_consent_mdrs?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    desire_to_continue_work?: string | null
    wants_to_work_if_unemployed?: string | null
    not_involving_other_off?: string | null
    submitted_at?: Date | string | null
  }

  export type potential_participantsUpdateManyMutationInput = {
    eligibility_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_email?: NullableStringFieldUpdateOperationsInput | string | null
    referral_source?: NullableStringFieldUpdateOperationsInput | string | null
    referral_business_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_of_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    staff_submit_referral_to_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type potential_participantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eligibility_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_email?: NullableStringFieldUpdateOperationsInput | string | null
    referral_source?: NullableStringFieldUpdateOperationsInput | string | null
    referral_business_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_of_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    staff_submit_referral_to_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    role?: string | null
    role_description?: string | null
    role_capabilities?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    organization?: string | null
    title?: string | null
    last_login?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    eligibility_screening?: eligibility_screeningCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    role?: string | null
    role_description?: string | null
    role_capabilities?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    organization?: string | null
    title?: string | null
    last_login?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    eligibility_screening?: eligibility_screeningUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    role_capabilities?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibility_screening?: eligibility_screeningUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    role_capabilities?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibility_screening?: eligibility_screeningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    role?: string | null
    role_description?: string | null
    role_capabilities?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    organization?: string | null
    title?: string | null
    last_login?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    role_capabilities?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    role_capabilities?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eligibility_screeningCreateInput = {
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: usersCreateNestedOneWithoutEligibility_screeningInput
    potential_participant?: potential_participantsCreateNestedOneWithoutEligibility_screeningInput
  }

  export type eligibility_screeningUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    potential_participant_id?: number | null
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type eligibility_screeningUpdateInput = {
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutEligibility_screeningNestedInput
    potential_participant?: potential_participantsUpdateOneWithoutEligibility_screeningNestedInput
  }

  export type eligibility_screeningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    potential_participant_id?: NullableIntFieldUpdateOperationsInput | number | null
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eligibility_screeningCreateManyInput = {
    id?: number
    user_id?: number | null
    potential_participant_id?: number | null
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type eligibility_screeningUpdateManyMutationInput = {
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eligibility_screeningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    potential_participant_id?: NullableIntFieldUpdateOperationsInput | number | null
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type Eligibility_screeningListRelationFilter = {
    every?: eligibility_screeningWhereInput
    some?: eligibility_screeningWhereInput
    none?: eligibility_screeningWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type eligibility_screeningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type potential_participantsCountOrderByAggregateInput = {
    id?: SortOrder
    eligibility_criteria?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    county?: SortOrder
    zip?: SortOrder
    referrer_first_name?: SortOrder
    referrer_last_name?: SortOrder
    referrer_phone?: SortOrder
    referrer_email?: SortOrder
    referral_source?: SortOrder
    referral_business_name?: SortOrder
    client_of_mdrrs?: SortOrder
    staff_submit_referral_to_mdrs?: SortOrder
    release_info_consent_mdrs?: SortOrder
    long_covid_syndrome?: SortOrder
    is_ms_resident?: SortOrder
    is_age_16_to_70?: SortOrder
    desire_to_continue_work?: SortOrder
    wants_to_work_if_unemployed?: SortOrder
    not_involving_other_off?: SortOrder
    submitted_at?: SortOrder
  }

  export type potential_participantsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type potential_participantsMaxOrderByAggregateInput = {
    id?: SortOrder
    eligibility_criteria?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    county?: SortOrder
    zip?: SortOrder
    referrer_first_name?: SortOrder
    referrer_last_name?: SortOrder
    referrer_phone?: SortOrder
    referrer_email?: SortOrder
    referral_source?: SortOrder
    referral_business_name?: SortOrder
    client_of_mdrrs?: SortOrder
    staff_submit_referral_to_mdrs?: SortOrder
    release_info_consent_mdrs?: SortOrder
    long_covid_syndrome?: SortOrder
    is_ms_resident?: SortOrder
    is_age_16_to_70?: SortOrder
    desire_to_continue_work?: SortOrder
    wants_to_work_if_unemployed?: SortOrder
    not_involving_other_off?: SortOrder
    submitted_at?: SortOrder
  }

  export type potential_participantsMinOrderByAggregateInput = {
    id?: SortOrder
    eligibility_criteria?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    county?: SortOrder
    zip?: SortOrder
    referrer_first_name?: SortOrder
    referrer_last_name?: SortOrder
    referrer_phone?: SortOrder
    referrer_email?: SortOrder
    referral_source?: SortOrder
    referral_business_name?: SortOrder
    client_of_mdrrs?: SortOrder
    staff_submit_referral_to_mdrs?: SortOrder
    release_info_consent_mdrs?: SortOrder
    long_covid_syndrome?: SortOrder
    is_ms_resident?: SortOrder
    is_age_16_to_70?: SortOrder
    desire_to_continue_work?: SortOrder
    wants_to_work_if_unemployed?: SortOrder
    not_involving_other_off?: SortOrder
    submitted_at?: SortOrder
  }

  export type potential_participantsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    role_description?: SortOrder
    role_capabilities?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    organization?: SortOrder
    title?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    role_description?: SortOrder
    role_capabilities?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    organization?: SortOrder
    title?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    role_description?: SortOrder
    role_capabilities?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    organization?: SortOrder
    title?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type Potential_participantsNullableScalarRelationFilter = {
    is?: potential_participantsWhereInput | null
    isNot?: potential_participantsWhereInput | null
  }

  export type eligibility_screeningCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    potential_participant_id?: SortOrder
    chp_partner_business?: SortOrder
    contact_method?: SortOrder
    history_of_contact_attempts?: SortOrder
    mode_of_learning_about_chp?: SortOrder
    source_of_learning_about_chp?: SortOrder
    individual_interest_in_chp?: SortOrder
    disability_accompanied_by_long_covid?: SortOrder
    long_covid_syndrome?: SortOrder
    is_ms_resident?: SortOrder
    is_age_16_to_70?: SortOrder
    is_currently_employed?: SortOrder
    desire_to_continue_work?: SortOrder
    paid_subminimum_wage?: SortOrder
    working_leave_status?: SortOrder
    risk_of_losing_job?: SortOrder
    how_you_hope_to_benefit_from_chp?: SortOrder
    interest_in_returning_to_work?: SortOrder
    not_involving_other_off?: SortOrder
    confirmation_of_eligibility_questions?: SortOrder
    initial_contact_results?: SortOrder
    reason_for_not_eligible?: SortOrder
    statement_of_informed_consent?: SortOrder
    release_of_information_roi?: SortOrder
    individual_provided_medical_information?: SortOrder
    status_of_receiving_medical_information?: SortOrder
    individual_home_address?: SortOrder
    individual_birthdate?: SortOrder
    eligibility_for_participation?: SortOrder
    service_region?: SortOrder
    vocational_counselor_assigned_first_name?: SortOrder
    vocational_counselor_assigned_last_name?: SortOrder
    vocational_counselors_caseload_or_waitlist?: SortOrder
    current_client_of_mdrs_or_no?: SortOrder
    submit_an_mdrs_referral?: SortOrder
    sharing_information_with_mdrs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eligibility_screeningAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    potential_participant_id?: SortOrder
  }

  export type eligibility_screeningMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    potential_participant_id?: SortOrder
    chp_partner_business?: SortOrder
    contact_method?: SortOrder
    history_of_contact_attempts?: SortOrder
    mode_of_learning_about_chp?: SortOrder
    source_of_learning_about_chp?: SortOrder
    individual_interest_in_chp?: SortOrder
    disability_accompanied_by_long_covid?: SortOrder
    long_covid_syndrome?: SortOrder
    is_ms_resident?: SortOrder
    is_age_16_to_70?: SortOrder
    is_currently_employed?: SortOrder
    desire_to_continue_work?: SortOrder
    paid_subminimum_wage?: SortOrder
    working_leave_status?: SortOrder
    risk_of_losing_job?: SortOrder
    how_you_hope_to_benefit_from_chp?: SortOrder
    interest_in_returning_to_work?: SortOrder
    not_involving_other_off?: SortOrder
    confirmation_of_eligibility_questions?: SortOrder
    initial_contact_results?: SortOrder
    reason_for_not_eligible?: SortOrder
    statement_of_informed_consent?: SortOrder
    release_of_information_roi?: SortOrder
    individual_provided_medical_information?: SortOrder
    status_of_receiving_medical_information?: SortOrder
    individual_home_address?: SortOrder
    individual_birthdate?: SortOrder
    eligibility_for_participation?: SortOrder
    service_region?: SortOrder
    vocational_counselor_assigned_first_name?: SortOrder
    vocational_counselor_assigned_last_name?: SortOrder
    vocational_counselors_caseload_or_waitlist?: SortOrder
    current_client_of_mdrs_or_no?: SortOrder
    submit_an_mdrs_referral?: SortOrder
    sharing_information_with_mdrs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eligibility_screeningMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    potential_participant_id?: SortOrder
    chp_partner_business?: SortOrder
    contact_method?: SortOrder
    history_of_contact_attempts?: SortOrder
    mode_of_learning_about_chp?: SortOrder
    source_of_learning_about_chp?: SortOrder
    individual_interest_in_chp?: SortOrder
    disability_accompanied_by_long_covid?: SortOrder
    long_covid_syndrome?: SortOrder
    is_ms_resident?: SortOrder
    is_age_16_to_70?: SortOrder
    is_currently_employed?: SortOrder
    desire_to_continue_work?: SortOrder
    paid_subminimum_wage?: SortOrder
    working_leave_status?: SortOrder
    risk_of_losing_job?: SortOrder
    how_you_hope_to_benefit_from_chp?: SortOrder
    interest_in_returning_to_work?: SortOrder
    not_involving_other_off?: SortOrder
    confirmation_of_eligibility_questions?: SortOrder
    initial_contact_results?: SortOrder
    reason_for_not_eligible?: SortOrder
    statement_of_informed_consent?: SortOrder
    release_of_information_roi?: SortOrder
    individual_provided_medical_information?: SortOrder
    status_of_receiving_medical_information?: SortOrder
    individual_home_address?: SortOrder
    individual_birthdate?: SortOrder
    eligibility_for_participation?: SortOrder
    service_region?: SortOrder
    vocational_counselor_assigned_first_name?: SortOrder
    vocational_counselor_assigned_last_name?: SortOrder
    vocational_counselors_caseload_or_waitlist?: SortOrder
    current_client_of_mdrs_or_no?: SortOrder
    submit_an_mdrs_referral?: SortOrder
    sharing_information_with_mdrs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eligibility_screeningSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    potential_participant_id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type eligibility_screeningCreateNestedManyWithoutPotential_participantInput = {
    create?: XOR<eligibility_screeningCreateWithoutPotential_participantInput, eligibility_screeningUncheckedCreateWithoutPotential_participantInput> | eligibility_screeningCreateWithoutPotential_participantInput[] | eligibility_screeningUncheckedCreateWithoutPotential_participantInput[]
    connectOrCreate?: eligibility_screeningCreateOrConnectWithoutPotential_participantInput | eligibility_screeningCreateOrConnectWithoutPotential_participantInput[]
    createMany?: eligibility_screeningCreateManyPotential_participantInputEnvelope
    connect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
  }

  export type eligibility_screeningUncheckedCreateNestedManyWithoutPotential_participantInput = {
    create?: XOR<eligibility_screeningCreateWithoutPotential_participantInput, eligibility_screeningUncheckedCreateWithoutPotential_participantInput> | eligibility_screeningCreateWithoutPotential_participantInput[] | eligibility_screeningUncheckedCreateWithoutPotential_participantInput[]
    connectOrCreate?: eligibility_screeningCreateOrConnectWithoutPotential_participantInput | eligibility_screeningCreateOrConnectWithoutPotential_participantInput[]
    createMany?: eligibility_screeningCreateManyPotential_participantInputEnvelope
    connect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type eligibility_screeningUpdateManyWithoutPotential_participantNestedInput = {
    create?: XOR<eligibility_screeningCreateWithoutPotential_participantInput, eligibility_screeningUncheckedCreateWithoutPotential_participantInput> | eligibility_screeningCreateWithoutPotential_participantInput[] | eligibility_screeningUncheckedCreateWithoutPotential_participantInput[]
    connectOrCreate?: eligibility_screeningCreateOrConnectWithoutPotential_participantInput | eligibility_screeningCreateOrConnectWithoutPotential_participantInput[]
    upsert?: eligibility_screeningUpsertWithWhereUniqueWithoutPotential_participantInput | eligibility_screeningUpsertWithWhereUniqueWithoutPotential_participantInput[]
    createMany?: eligibility_screeningCreateManyPotential_participantInputEnvelope
    set?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    disconnect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    delete?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    connect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    update?: eligibility_screeningUpdateWithWhereUniqueWithoutPotential_participantInput | eligibility_screeningUpdateWithWhereUniqueWithoutPotential_participantInput[]
    updateMany?: eligibility_screeningUpdateManyWithWhereWithoutPotential_participantInput | eligibility_screeningUpdateManyWithWhereWithoutPotential_participantInput[]
    deleteMany?: eligibility_screeningScalarWhereInput | eligibility_screeningScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type eligibility_screeningUncheckedUpdateManyWithoutPotential_participantNestedInput = {
    create?: XOR<eligibility_screeningCreateWithoutPotential_participantInput, eligibility_screeningUncheckedCreateWithoutPotential_participantInput> | eligibility_screeningCreateWithoutPotential_participantInput[] | eligibility_screeningUncheckedCreateWithoutPotential_participantInput[]
    connectOrCreate?: eligibility_screeningCreateOrConnectWithoutPotential_participantInput | eligibility_screeningCreateOrConnectWithoutPotential_participantInput[]
    upsert?: eligibility_screeningUpsertWithWhereUniqueWithoutPotential_participantInput | eligibility_screeningUpsertWithWhereUniqueWithoutPotential_participantInput[]
    createMany?: eligibility_screeningCreateManyPotential_participantInputEnvelope
    set?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    disconnect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    delete?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    connect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    update?: eligibility_screeningUpdateWithWhereUniqueWithoutPotential_participantInput | eligibility_screeningUpdateWithWhereUniqueWithoutPotential_participantInput[]
    updateMany?: eligibility_screeningUpdateManyWithWhereWithoutPotential_participantInput | eligibility_screeningUpdateManyWithWhereWithoutPotential_participantInput[]
    deleteMany?: eligibility_screeningScalarWhereInput | eligibility_screeningScalarWhereInput[]
  }

  export type eligibility_screeningCreateNestedManyWithoutUserInput = {
    create?: XOR<eligibility_screeningCreateWithoutUserInput, eligibility_screeningUncheckedCreateWithoutUserInput> | eligibility_screeningCreateWithoutUserInput[] | eligibility_screeningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: eligibility_screeningCreateOrConnectWithoutUserInput | eligibility_screeningCreateOrConnectWithoutUserInput[]
    createMany?: eligibility_screeningCreateManyUserInputEnvelope
    connect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
  }

  export type eligibility_screeningUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<eligibility_screeningCreateWithoutUserInput, eligibility_screeningUncheckedCreateWithoutUserInput> | eligibility_screeningCreateWithoutUserInput[] | eligibility_screeningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: eligibility_screeningCreateOrConnectWithoutUserInput | eligibility_screeningCreateOrConnectWithoutUserInput[]
    createMany?: eligibility_screeningCreateManyUserInputEnvelope
    connect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
  }

  export type eligibility_screeningUpdateManyWithoutUserNestedInput = {
    create?: XOR<eligibility_screeningCreateWithoutUserInput, eligibility_screeningUncheckedCreateWithoutUserInput> | eligibility_screeningCreateWithoutUserInput[] | eligibility_screeningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: eligibility_screeningCreateOrConnectWithoutUserInput | eligibility_screeningCreateOrConnectWithoutUserInput[]
    upsert?: eligibility_screeningUpsertWithWhereUniqueWithoutUserInput | eligibility_screeningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: eligibility_screeningCreateManyUserInputEnvelope
    set?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    disconnect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    delete?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    connect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    update?: eligibility_screeningUpdateWithWhereUniqueWithoutUserInput | eligibility_screeningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: eligibility_screeningUpdateManyWithWhereWithoutUserInput | eligibility_screeningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: eligibility_screeningScalarWhereInput | eligibility_screeningScalarWhereInput[]
  }

  export type eligibility_screeningUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<eligibility_screeningCreateWithoutUserInput, eligibility_screeningUncheckedCreateWithoutUserInput> | eligibility_screeningCreateWithoutUserInput[] | eligibility_screeningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: eligibility_screeningCreateOrConnectWithoutUserInput | eligibility_screeningCreateOrConnectWithoutUserInput[]
    upsert?: eligibility_screeningUpsertWithWhereUniqueWithoutUserInput | eligibility_screeningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: eligibility_screeningCreateManyUserInputEnvelope
    set?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    disconnect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    delete?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    connect?: eligibility_screeningWhereUniqueInput | eligibility_screeningWhereUniqueInput[]
    update?: eligibility_screeningUpdateWithWhereUniqueWithoutUserInput | eligibility_screeningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: eligibility_screeningUpdateManyWithWhereWithoutUserInput | eligibility_screeningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: eligibility_screeningScalarWhereInput | eligibility_screeningScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutEligibility_screeningInput = {
    create?: XOR<usersCreateWithoutEligibility_screeningInput, usersUncheckedCreateWithoutEligibility_screeningInput>
    connectOrCreate?: usersCreateOrConnectWithoutEligibility_screeningInput
    connect?: usersWhereUniqueInput
  }

  export type potential_participantsCreateNestedOneWithoutEligibility_screeningInput = {
    create?: XOR<potential_participantsCreateWithoutEligibility_screeningInput, potential_participantsUncheckedCreateWithoutEligibility_screeningInput>
    connectOrCreate?: potential_participantsCreateOrConnectWithoutEligibility_screeningInput
    connect?: potential_participantsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneWithoutEligibility_screeningNestedInput = {
    create?: XOR<usersCreateWithoutEligibility_screeningInput, usersUncheckedCreateWithoutEligibility_screeningInput>
    connectOrCreate?: usersCreateOrConnectWithoutEligibility_screeningInput
    upsert?: usersUpsertWithoutEligibility_screeningInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEligibility_screeningInput, usersUpdateWithoutEligibility_screeningInput>, usersUncheckedUpdateWithoutEligibility_screeningInput>
  }

  export type potential_participantsUpdateOneWithoutEligibility_screeningNestedInput = {
    create?: XOR<potential_participantsCreateWithoutEligibility_screeningInput, potential_participantsUncheckedCreateWithoutEligibility_screeningInput>
    connectOrCreate?: potential_participantsCreateOrConnectWithoutEligibility_screeningInput
    upsert?: potential_participantsUpsertWithoutEligibility_screeningInput
    disconnect?: potential_participantsWhereInput | boolean
    delete?: potential_participantsWhereInput | boolean
    connect?: potential_participantsWhereUniqueInput
    update?: XOR<XOR<potential_participantsUpdateToOneWithWhereWithoutEligibility_screeningInput, potential_participantsUpdateWithoutEligibility_screeningInput>, potential_participantsUncheckedUpdateWithoutEligibility_screeningInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type eligibility_screeningCreateWithoutPotential_participantInput = {
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: usersCreateNestedOneWithoutEligibility_screeningInput
  }

  export type eligibility_screeningUncheckedCreateWithoutPotential_participantInput = {
    id?: number
    user_id?: number | null
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type eligibility_screeningCreateOrConnectWithoutPotential_participantInput = {
    where: eligibility_screeningWhereUniqueInput
    create: XOR<eligibility_screeningCreateWithoutPotential_participantInput, eligibility_screeningUncheckedCreateWithoutPotential_participantInput>
  }

  export type eligibility_screeningCreateManyPotential_participantInputEnvelope = {
    data: eligibility_screeningCreateManyPotential_participantInput | eligibility_screeningCreateManyPotential_participantInput[]
    skipDuplicates?: boolean
  }

  export type eligibility_screeningUpsertWithWhereUniqueWithoutPotential_participantInput = {
    where: eligibility_screeningWhereUniqueInput
    update: XOR<eligibility_screeningUpdateWithoutPotential_participantInput, eligibility_screeningUncheckedUpdateWithoutPotential_participantInput>
    create: XOR<eligibility_screeningCreateWithoutPotential_participantInput, eligibility_screeningUncheckedCreateWithoutPotential_participantInput>
  }

  export type eligibility_screeningUpdateWithWhereUniqueWithoutPotential_participantInput = {
    where: eligibility_screeningWhereUniqueInput
    data: XOR<eligibility_screeningUpdateWithoutPotential_participantInput, eligibility_screeningUncheckedUpdateWithoutPotential_participantInput>
  }

  export type eligibility_screeningUpdateManyWithWhereWithoutPotential_participantInput = {
    where: eligibility_screeningScalarWhereInput
    data: XOR<eligibility_screeningUpdateManyMutationInput, eligibility_screeningUncheckedUpdateManyWithoutPotential_participantInput>
  }

  export type eligibility_screeningScalarWhereInput = {
    AND?: eligibility_screeningScalarWhereInput | eligibility_screeningScalarWhereInput[]
    OR?: eligibility_screeningScalarWhereInput[]
    NOT?: eligibility_screeningScalarWhereInput | eligibility_screeningScalarWhereInput[]
    id?: IntFilter<"eligibility_screening"> | number
    user_id?: IntNullableFilter<"eligibility_screening"> | number | null
    potential_participant_id?: IntNullableFilter<"eligibility_screening"> | number | null
    chp_partner_business?: StringNullableFilter<"eligibility_screening"> | string | null
    contact_method?: StringNullableFilter<"eligibility_screening"> | string | null
    history_of_contact_attempts?: StringNullableFilter<"eligibility_screening"> | string | null
    mode_of_learning_about_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    source_of_learning_about_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_interest_in_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    disability_accompanied_by_long_covid?: StringNullableFilter<"eligibility_screening"> | string | null
    long_covid_syndrome?: StringNullableFilter<"eligibility_screening"> | string | null
    is_ms_resident?: StringNullableFilter<"eligibility_screening"> | string | null
    is_age_16_to_70?: StringNullableFilter<"eligibility_screening"> | string | null
    is_currently_employed?: StringNullableFilter<"eligibility_screening"> | string | null
    desire_to_continue_work?: StringNullableFilter<"eligibility_screening"> | string | null
    paid_subminimum_wage?: StringNullableFilter<"eligibility_screening"> | string | null
    working_leave_status?: StringNullableFilter<"eligibility_screening"> | string | null
    risk_of_losing_job?: StringNullableFilter<"eligibility_screening"> | string | null
    how_you_hope_to_benefit_from_chp?: StringNullableFilter<"eligibility_screening"> | string | null
    interest_in_returning_to_work?: StringNullableFilter<"eligibility_screening"> | string | null
    not_involving_other_off?: StringNullableFilter<"eligibility_screening"> | string | null
    confirmation_of_eligibility_questions?: BoolFilter<"eligibility_screening"> | boolean
    initial_contact_results?: StringNullableFilter<"eligibility_screening"> | string | null
    reason_for_not_eligible?: StringNullableFilter<"eligibility_screening"> | string | null
    statement_of_informed_consent?: StringNullableFilter<"eligibility_screening"> | string | null
    release_of_information_roi?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_provided_medical_information?: StringNullableFilter<"eligibility_screening"> | string | null
    status_of_receiving_medical_information?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_home_address?: StringNullableFilter<"eligibility_screening"> | string | null
    individual_birthdate?: StringNullableFilter<"eligibility_screening"> | string | null
    eligibility_for_participation?: StringFilter<"eligibility_screening"> | string
    service_region?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselor_assigned_first_name?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselor_assigned_last_name?: StringNullableFilter<"eligibility_screening"> | string | null
    vocational_counselors_caseload_or_waitlist?: StringNullableFilter<"eligibility_screening"> | string | null
    current_client_of_mdrs_or_no?: StringNullableFilter<"eligibility_screening"> | string | null
    submit_an_mdrs_referral?: StringNullableFilter<"eligibility_screening"> | string | null
    sharing_information_with_mdrs?: StringNullableFilter<"eligibility_screening"> | string | null
    created_at?: DateTimeFilter<"eligibility_screening"> | Date | string
    updated_at?: DateTimeFilter<"eligibility_screening"> | Date | string
  }

  export type eligibility_screeningCreateWithoutUserInput = {
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    potential_participant?: potential_participantsCreateNestedOneWithoutEligibility_screeningInput
  }

  export type eligibility_screeningUncheckedCreateWithoutUserInput = {
    id?: number
    potential_participant_id?: number | null
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type eligibility_screeningCreateOrConnectWithoutUserInput = {
    where: eligibility_screeningWhereUniqueInput
    create: XOR<eligibility_screeningCreateWithoutUserInput, eligibility_screeningUncheckedCreateWithoutUserInput>
  }

  export type eligibility_screeningCreateManyUserInputEnvelope = {
    data: eligibility_screeningCreateManyUserInput | eligibility_screeningCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type eligibility_screeningUpsertWithWhereUniqueWithoutUserInput = {
    where: eligibility_screeningWhereUniqueInput
    update: XOR<eligibility_screeningUpdateWithoutUserInput, eligibility_screeningUncheckedUpdateWithoutUserInput>
    create: XOR<eligibility_screeningCreateWithoutUserInput, eligibility_screeningUncheckedCreateWithoutUserInput>
  }

  export type eligibility_screeningUpdateWithWhereUniqueWithoutUserInput = {
    where: eligibility_screeningWhereUniqueInput
    data: XOR<eligibility_screeningUpdateWithoutUserInput, eligibility_screeningUncheckedUpdateWithoutUserInput>
  }

  export type eligibility_screeningUpdateManyWithWhereWithoutUserInput = {
    where: eligibility_screeningScalarWhereInput
    data: XOR<eligibility_screeningUpdateManyMutationInput, eligibility_screeningUncheckedUpdateManyWithoutUserInput>
  }

  export type usersCreateWithoutEligibility_screeningInput = {
    role?: string | null
    role_description?: string | null
    role_capabilities?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    organization?: string | null
    title?: string | null
    last_login?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutEligibility_screeningInput = {
    id?: number
    role?: string | null
    role_description?: string | null
    role_capabilities?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    organization?: string | null
    title?: string | null
    last_login?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutEligibility_screeningInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEligibility_screeningInput, usersUncheckedCreateWithoutEligibility_screeningInput>
  }

  export type potential_participantsCreateWithoutEligibility_screeningInput = {
    eligibility_criteria?: string | null
    first_name?: string | null
    last_name?: string | null
    phone_number?: string | null
    email?: string | null
    county?: string | null
    zip?: string | null
    referrer_first_name?: string | null
    referrer_last_name?: string | null
    referrer_phone?: string | null
    referrer_email?: string | null
    referral_source?: string | null
    referral_business_name?: string | null
    client_of_mdrrs?: string | null
    staff_submit_referral_to_mdrs?: string | null
    release_info_consent_mdrs?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    desire_to_continue_work?: string | null
    wants_to_work_if_unemployed?: string | null
    not_involving_other_off?: string | null
    submitted_at?: Date | string | null
  }

  export type potential_participantsUncheckedCreateWithoutEligibility_screeningInput = {
    id?: number
    eligibility_criteria?: string | null
    first_name?: string | null
    last_name?: string | null
    phone_number?: string | null
    email?: string | null
    county?: string | null
    zip?: string | null
    referrer_first_name?: string | null
    referrer_last_name?: string | null
    referrer_phone?: string | null
    referrer_email?: string | null
    referral_source?: string | null
    referral_business_name?: string | null
    client_of_mdrrs?: string | null
    staff_submit_referral_to_mdrs?: string | null
    release_info_consent_mdrs?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    desire_to_continue_work?: string | null
    wants_to_work_if_unemployed?: string | null
    not_involving_other_off?: string | null
    submitted_at?: Date | string | null
  }

  export type potential_participantsCreateOrConnectWithoutEligibility_screeningInput = {
    where: potential_participantsWhereUniqueInput
    create: XOR<potential_participantsCreateWithoutEligibility_screeningInput, potential_participantsUncheckedCreateWithoutEligibility_screeningInput>
  }

  export type usersUpsertWithoutEligibility_screeningInput = {
    update: XOR<usersUpdateWithoutEligibility_screeningInput, usersUncheckedUpdateWithoutEligibility_screeningInput>
    create: XOR<usersCreateWithoutEligibility_screeningInput, usersUncheckedCreateWithoutEligibility_screeningInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEligibility_screeningInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEligibility_screeningInput, usersUncheckedUpdateWithoutEligibility_screeningInput>
  }

  export type usersUpdateWithoutEligibility_screeningInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    role_capabilities?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutEligibility_screeningInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    role_capabilities?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type potential_participantsUpsertWithoutEligibility_screeningInput = {
    update: XOR<potential_participantsUpdateWithoutEligibility_screeningInput, potential_participantsUncheckedUpdateWithoutEligibility_screeningInput>
    create: XOR<potential_participantsCreateWithoutEligibility_screeningInput, potential_participantsUncheckedCreateWithoutEligibility_screeningInput>
    where?: potential_participantsWhereInput
  }

  export type potential_participantsUpdateToOneWithWhereWithoutEligibility_screeningInput = {
    where?: potential_participantsWhereInput
    data: XOR<potential_participantsUpdateWithoutEligibility_screeningInput, potential_participantsUncheckedUpdateWithoutEligibility_screeningInput>
  }

  export type potential_participantsUpdateWithoutEligibility_screeningInput = {
    eligibility_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_email?: NullableStringFieldUpdateOperationsInput | string | null
    referral_source?: NullableStringFieldUpdateOperationsInput | string | null
    referral_business_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_of_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    staff_submit_referral_to_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type potential_participantsUncheckedUpdateWithoutEligibility_screeningInput = {
    id?: IntFieldUpdateOperationsInput | number
    eligibility_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    referrer_email?: NullableStringFieldUpdateOperationsInput | string | null
    referral_source?: NullableStringFieldUpdateOperationsInput | string | null
    referral_business_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_of_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    staff_submit_referral_to_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eligibility_screeningCreateManyPotential_participantInput = {
    id?: number
    user_id?: number | null
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type eligibility_screeningUpdateWithoutPotential_participantInput = {
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutEligibility_screeningNestedInput
  }

  export type eligibility_screeningUncheckedUpdateWithoutPotential_participantInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eligibility_screeningUncheckedUpdateManyWithoutPotential_participantInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eligibility_screeningCreateManyUserInput = {
    id?: number
    potential_participant_id?: number | null
    chp_partner_business?: string | null
    contact_method?: string | null
    history_of_contact_attempts?: string | null
    mode_of_learning_about_chp?: string | null
    source_of_learning_about_chp?: string | null
    individual_interest_in_chp?: string | null
    disability_accompanied_by_long_covid?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    is_currently_employed?: string | null
    desire_to_continue_work?: string | null
    paid_subminimum_wage?: string | null
    working_leave_status?: string | null
    risk_of_losing_job?: string | null
    how_you_hope_to_benefit_from_chp?: string | null
    interest_in_returning_to_work?: string | null
    not_involving_other_off?: string | null
    confirmation_of_eligibility_questions: boolean
    initial_contact_results?: string | null
    reason_for_not_eligible?: string | null
    statement_of_informed_consent?: string | null
    release_of_information_roi?: string | null
    individual_provided_medical_information?: string | null
    status_of_receiving_medical_information?: string | null
    individual_home_address?: string | null
    individual_birthdate?: string | null
    eligibility_for_participation: string
    service_region?: string | null
    vocational_counselor_assigned_first_name?: string | null
    vocational_counselor_assigned_last_name?: string | null
    vocational_counselors_caseload_or_waitlist?: string | null
    current_client_of_mdrs_or_no?: string | null
    submit_an_mdrs_referral?: string | null
    sharing_information_with_mdrs?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type eligibility_screeningUpdateWithoutUserInput = {
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    potential_participant?: potential_participantsUpdateOneWithoutEligibility_screeningNestedInput
  }

  export type eligibility_screeningUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    potential_participant_id?: NullableIntFieldUpdateOperationsInput | number | null
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eligibility_screeningUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    potential_participant_id?: NullableIntFieldUpdateOperationsInput | number | null
    chp_partner_business?: NullableStringFieldUpdateOperationsInput | string | null
    contact_method?: NullableStringFieldUpdateOperationsInput | string | null
    history_of_contact_attempts?: NullableStringFieldUpdateOperationsInput | string | null
    mode_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_learning_about_chp?: NullableStringFieldUpdateOperationsInput | string | null
    individual_interest_in_chp?: NullableStringFieldUpdateOperationsInput | string | null
    disability_accompanied_by_long_covid?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    is_currently_employed?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    paid_subminimum_wage?: NullableStringFieldUpdateOperationsInput | string | null
    working_leave_status?: NullableStringFieldUpdateOperationsInput | string | null
    risk_of_losing_job?: NullableStringFieldUpdateOperationsInput | string | null
    how_you_hope_to_benefit_from_chp?: NullableStringFieldUpdateOperationsInput | string | null
    interest_in_returning_to_work?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_of_eligibility_questions?: BoolFieldUpdateOperationsInput | boolean
    initial_contact_results?: NullableStringFieldUpdateOperationsInput | string | null
    reason_for_not_eligible?: NullableStringFieldUpdateOperationsInput | string | null
    statement_of_informed_consent?: NullableStringFieldUpdateOperationsInput | string | null
    release_of_information_roi?: NullableStringFieldUpdateOperationsInput | string | null
    individual_provided_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    status_of_receiving_medical_information?: NullableStringFieldUpdateOperationsInput | string | null
    individual_home_address?: NullableStringFieldUpdateOperationsInput | string | null
    individual_birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_for_participation?: StringFieldUpdateOperationsInput | string
    service_region?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselor_assigned_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    vocational_counselors_caseload_or_waitlist?: NullableStringFieldUpdateOperationsInput | string | null
    current_client_of_mdrs_or_no?: NullableStringFieldUpdateOperationsInput | string | null
    submit_an_mdrs_referral?: NullableStringFieldUpdateOperationsInput | string | null
    sharing_information_with_mdrs?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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