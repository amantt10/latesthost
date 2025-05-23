
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    potential_participants: 'potential_participants'
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
      modelProps: "potential_participants"
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
    staff_submit_referral_to_mdrrs: string | null
    release_info_consent_mdrrs: string | null
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
    staff_submit_referral_to_mdrrs: string | null
    release_info_consent_mdrrs: string | null
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
    staff_submit_referral_to_mdrrs: number
    release_info_consent_mdrrs: number
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
    staff_submit_referral_to_mdrrs?: true
    release_info_consent_mdrrs?: true
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
    staff_submit_referral_to_mdrrs?: true
    release_info_consent_mdrrs?: true
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
    staff_submit_referral_to_mdrrs?: true
    release_info_consent_mdrrs?: true
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
    staff_submit_referral_to_mdrrs: string | null
    release_info_consent_mdrrs: string | null
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
    staff_submit_referral_to_mdrrs?: boolean
    release_info_consent_mdrrs?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    desire_to_continue_work?: boolean
    wants_to_work_if_unemployed?: boolean
    not_involving_other_off?: boolean
    submitted_at?: boolean
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
    staff_submit_referral_to_mdrrs?: boolean
    release_info_consent_mdrrs?: boolean
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
    staff_submit_referral_to_mdrrs?: boolean
    release_info_consent_mdrrs?: boolean
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
    staff_submit_referral_to_mdrrs?: boolean
    release_info_consent_mdrrs?: boolean
    long_covid_syndrome?: boolean
    is_ms_resident?: boolean
    is_age_16_to_70?: boolean
    desire_to_continue_work?: boolean
    wants_to_work_if_unemployed?: boolean
    not_involving_other_off?: boolean
    submitted_at?: boolean
  }

  export type potential_participantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eligibility_criteria" | "first_name" | "last_name" | "phone_number" | "email" | "county" | "zip" | "referrer_first_name" | "referrer_last_name" | "referrer_phone" | "referrer_email" | "referral_source" | "referral_business_name" | "client_of_mdrrs" | "staff_submit_referral_to_mdrrs" | "release_info_consent_mdrrs" | "long_covid_syndrome" | "is_ms_resident" | "is_age_16_to_70" | "desire_to_continue_work" | "wants_to_work_if_unemployed" | "not_involving_other_off" | "submitted_at", ExtArgs["result"]["potential_participants"]>

  export type $potential_participantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "potential_participants"
    objects: {}
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
      staff_submit_referral_to_mdrrs: string | null
      release_info_consent_mdrrs: string | null
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
    readonly staff_submit_referral_to_mdrrs: FieldRef<"potential_participants", 'String'>
    readonly release_info_consent_mdrrs: FieldRef<"potential_participants", 'String'>
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
    staff_submit_referral_to_mdrrs: 'staff_submit_referral_to_mdrrs',
    release_info_consent_mdrrs: 'release_info_consent_mdrrs',
    long_covid_syndrome: 'long_covid_syndrome',
    is_ms_resident: 'is_ms_resident',
    is_age_16_to_70: 'is_age_16_to_70',
    desire_to_continue_work: 'desire_to_continue_work',
    wants_to_work_if_unemployed: 'wants_to_work_if_unemployed',
    not_involving_other_off: 'not_involving_other_off',
    submitted_at: 'submitted_at'
  };

  export type Potential_participantsScalarFieldEnum = (typeof Potential_participantsScalarFieldEnum)[keyof typeof Potential_participantsScalarFieldEnum]


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
    staff_submit_referral_to_mdrrs?: StringNullableFilter<"potential_participants"> | string | null
    release_info_consent_mdrrs?: StringNullableFilter<"potential_participants"> | string | null
    long_covid_syndrome?: StringNullableFilter<"potential_participants"> | string | null
    is_ms_resident?: StringNullableFilter<"potential_participants"> | string | null
    is_age_16_to_70?: StringNullableFilter<"potential_participants"> | string | null
    desire_to_continue_work?: StringNullableFilter<"potential_participants"> | string | null
    wants_to_work_if_unemployed?: StringNullableFilter<"potential_participants"> | string | null
    not_involving_other_off?: StringNullableFilter<"potential_participants"> | string | null
    submitted_at?: DateTimeNullableFilter<"potential_participants"> | Date | string | null
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
    staff_submit_referral_to_mdrrs?: SortOrderInput | SortOrder
    release_info_consent_mdrrs?: SortOrderInput | SortOrder
    long_covid_syndrome?: SortOrderInput | SortOrder
    is_ms_resident?: SortOrderInput | SortOrder
    is_age_16_to_70?: SortOrderInput | SortOrder
    desire_to_continue_work?: SortOrderInput | SortOrder
    wants_to_work_if_unemployed?: SortOrderInput | SortOrder
    not_involving_other_off?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
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
    staff_submit_referral_to_mdrrs?: StringNullableFilter<"potential_participants"> | string | null
    release_info_consent_mdrrs?: StringNullableFilter<"potential_participants"> | string | null
    long_covid_syndrome?: StringNullableFilter<"potential_participants"> | string | null
    is_ms_resident?: StringNullableFilter<"potential_participants"> | string | null
    is_age_16_to_70?: StringNullableFilter<"potential_participants"> | string | null
    desire_to_continue_work?: StringNullableFilter<"potential_participants"> | string | null
    wants_to_work_if_unemployed?: StringNullableFilter<"potential_participants"> | string | null
    not_involving_other_off?: StringNullableFilter<"potential_participants"> | string | null
    submitted_at?: DateTimeNullableFilter<"potential_participants"> | Date | string | null
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
    staff_submit_referral_to_mdrrs?: SortOrderInput | SortOrder
    release_info_consent_mdrrs?: SortOrderInput | SortOrder
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
    staff_submit_referral_to_mdrrs?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    release_info_consent_mdrrs?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    long_covid_syndrome?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    is_ms_resident?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    is_age_16_to_70?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    desire_to_continue_work?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    wants_to_work_if_unemployed?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    not_involving_other_off?: StringNullableWithAggregatesFilter<"potential_participants"> | string | null
    submitted_at?: DateTimeNullableWithAggregatesFilter<"potential_participants"> | Date | string | null
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
    staff_submit_referral_to_mdrrs?: string | null
    release_info_consent_mdrrs?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    desire_to_continue_work?: string | null
    wants_to_work_if_unemployed?: string | null
    not_involving_other_off?: string | null
    submitted_at?: Date | string | null
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
    staff_submit_referral_to_mdrrs?: string | null
    release_info_consent_mdrrs?: string | null
    long_covid_syndrome?: string | null
    is_ms_resident?: string | null
    is_age_16_to_70?: string | null
    desire_to_continue_work?: string | null
    wants_to_work_if_unemployed?: string | null
    not_involving_other_off?: string | null
    submitted_at?: Date | string | null
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
    staff_submit_referral_to_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    staff_submit_referral_to_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    staff_submit_referral_to_mdrrs?: string | null
    release_info_consent_mdrrs?: string | null
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
    staff_submit_referral_to_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
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
    staff_submit_referral_to_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    release_info_consent_mdrrs?: NullableStringFieldUpdateOperationsInput | string | null
    long_covid_syndrome?: NullableStringFieldUpdateOperationsInput | string | null
    is_ms_resident?: NullableStringFieldUpdateOperationsInput | string | null
    is_age_16_to_70?: NullableStringFieldUpdateOperationsInput | string | null
    desire_to_continue_work?: NullableStringFieldUpdateOperationsInput | string | null
    wants_to_work_if_unemployed?: NullableStringFieldUpdateOperationsInput | string | null
    not_involving_other_off?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    staff_submit_referral_to_mdrrs?: SortOrder
    release_info_consent_mdrrs?: SortOrder
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
    staff_submit_referral_to_mdrrs?: SortOrder
    release_info_consent_mdrrs?: SortOrder
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
    staff_submit_referral_to_mdrrs?: SortOrder
    release_info_consent_mdrrs?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
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