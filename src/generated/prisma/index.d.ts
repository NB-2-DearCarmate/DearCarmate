
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
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model Manufacterers
 * 
 */
export type Manufacterers = $Result.DefaultSelection<Prisma.$ManufacterersPayload>
/**
 * Model Models
 * 
 */
export type Models = $Result.DefaultSelection<Prisma.$ModelsPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model Alarm
 * 
 */
export type Alarm = $Result.DefaultSelection<Prisma.$AlarmPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model ContractDocument
 * 
 */
export type ContractDocument = $Result.DefaultSelection<Prisma.$ContractDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Manufacturer: {
  KIA: 'KIA',
  CHEVROLET: 'CHEVROLET'
};

export type Manufacturer = (typeof Manufacturer)[keyof typeof Manufacturer]


export const CarModel: {
  K5: 'K5',
  SPARK: 'SPARK'
};

export type CarModel = (typeof CarModel)[keyof typeof CarModel]


export const CarType: {
  SEDAN: 'SEDAN',
  COMPACT: 'COMPACT',
  SUV: 'SUV'
};

export type CarType = (typeof CarType)[keyof typeof CarType]


export const GenderType: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type GenderType = (typeof GenderType)[keyof typeof GenderType]


export const AgeGroup: {
  AGE_10: 'AGE_10',
  AGE_20: 'AGE_20',
  AGE_30: 'AGE_30',
  AGE_40: 'AGE_40',
  AGE_50: 'AGE_50',
  AGE_60: 'AGE_60',
  AGE_70: 'AGE_70',
  AGE_80: 'AGE_80'
};

export type AgeGroup = (typeof AgeGroup)[keyof typeof AgeGroup]


export const Region: {
  SEOUL: 'SEOUL',
  GYEONGGI: 'GYEONGGI',
  INCHEON: 'INCHEON',
  GANGWON: 'GANGWON',
  CHUNGBUK: 'CHUNGBUK',
  CHUNGNAM: 'CHUNGNAM',
  SEJONG: 'SEJONG',
  DAEJEON: 'DAEJEON',
  JEONBUK: 'JEONBUK',
  JEONNAM: 'JEONNAM',
  GWANGJU: 'GWANGJU',
  GYEONGBUK: 'GYEONGBUK',
  GYEONGNAM: 'GYEONGNAM',
  DAEGU: 'DAEGU',
  ULSAN: 'ULSAN',
  BUSAN: 'BUSAN',
  JEJU: 'JEJU'
};

export type Region = (typeof Region)[keyof typeof Region]


export const VehicleStatus: {
  POSSESSION: 'POSSESSION',
  FOR_SALE: 'FOR_SALE'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const ContractStatus: {
  VEHICLE_CHECK: 'VEHICLE_CHECK',
  PRICE_NEGOTIATION: 'PRICE_NEGOTIATION',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};

export type ContractStatus = (typeof ContractStatus)[keyof typeof ContractStatus]

}

export type Manufacturer = $Enums.Manufacturer

export const Manufacturer: typeof $Enums.Manufacturer

export type CarModel = $Enums.CarModel

export const CarModel: typeof $Enums.CarModel

export type CarType = $Enums.CarType

export const CarType: typeof $Enums.CarType

export type GenderType = $Enums.GenderType

export const GenderType: typeof $Enums.GenderType

export type AgeGroup = $Enums.AgeGroup

export const AgeGroup: typeof $Enums.AgeGroup

export type Region = $Enums.Region

export const Region: typeof $Enums.Region

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type ContractStatus = $Enums.ContractStatus

export const ContractStatus: typeof $Enums.ContractStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.car.findMany()
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
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
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
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manufacterers`: Exposes CRUD operations for the **Manufacterers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manufacterers
    * const manufacterers = await prisma.manufacterers.findMany()
    * ```
    */
  get manufacterers(): Prisma.ManufacterersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.models`: Exposes CRUD operations for the **Models** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.models.findMany()
    * ```
    */
  get models(): Prisma.ModelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alarm`: Exposes CRUD operations for the **Alarm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alarms
    * const alarms = await prisma.alarm.findMany()
    * ```
    */
  get alarm(): Prisma.AlarmDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractDocument`: Exposes CRUD operations for the **ContractDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractDocuments
    * const contractDocuments = await prisma.contractDocument.findMany()
    * ```
    */
  get contractDocument(): Prisma.ContractDocumentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Car: 'Car',
    Manufacterers: 'Manufacterers',
    Models: 'Models',
    Customer: 'Customer',
    Contract: 'Contract',
    Meeting: 'Meeting',
    Alarm: 'Alarm',
    User: 'User',
    Company: 'Company',
    ContractDocument: 'ContractDocument'
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
      modelProps: "car" | "manufacterers" | "models" | "customer" | "contract" | "meeting" | "alarm" | "user" | "company" | "contractDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      Manufacterers: {
        payload: Prisma.$ManufacterersPayload<ExtArgs>
        fields: Prisma.ManufacterersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManufacterersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManufacterersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>
          }
          findFirst: {
            args: Prisma.ManufacterersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManufacterersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>
          }
          findMany: {
            args: Prisma.ManufacterersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>[]
          }
          create: {
            args: Prisma.ManufacterersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>
          }
          createMany: {
            args: Prisma.ManufacterersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManufacterersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>[]
          }
          delete: {
            args: Prisma.ManufacterersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>
          }
          update: {
            args: Prisma.ManufacterersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>
          }
          deleteMany: {
            args: Prisma.ManufacterersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManufacterersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManufacterersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>[]
          }
          upsert: {
            args: Prisma.ManufacterersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacterersPayload>
          }
          aggregate: {
            args: Prisma.ManufacterersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManufacterers>
          }
          groupBy: {
            args: Prisma.ManufacterersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManufacterersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManufacterersCountArgs<ExtArgs>
            result: $Utils.Optional<ManufacterersCountAggregateOutputType> | number
          }
        }
      }
      Models: {
        payload: Prisma.$ModelsPayload<ExtArgs>
        fields: Prisma.ModelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          findFirst: {
            args: Prisma.ModelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          findMany: {
            args: Prisma.ModelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          create: {
            args: Prisma.ModelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          createMany: {
            args: Prisma.ModelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          delete: {
            args: Prisma.ModelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          update: {
            args: Prisma.ModelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          deleteMany: {
            args: Prisma.ModelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          upsert: {
            args: Prisma.ModelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          aggregate: {
            args: Prisma.ModelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModels>
          }
          groupBy: {
            args: Prisma.ModelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelsCountArgs<ExtArgs>
            result: $Utils.Optional<ModelsCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      Alarm: {
        payload: Prisma.$AlarmPayload<ExtArgs>
        fields: Prisma.AlarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          findFirst: {
            args: Prisma.AlarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          findMany: {
            args: Prisma.AlarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>[]
          }
          create: {
            args: Prisma.AlarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          createMany: {
            args: Prisma.AlarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlarmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>[]
          }
          delete: {
            args: Prisma.AlarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          update: {
            args: Prisma.AlarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          deleteMany: {
            args: Prisma.AlarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlarmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>[]
          }
          upsert: {
            args: Prisma.AlarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          aggregate: {
            args: Prisma.AlarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlarm>
          }
          groupBy: {
            args: Prisma.AlarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlarmCountArgs<ExtArgs>
            result: $Utils.Optional<AlarmCountAggregateOutputType> | number
          }
        }
      }
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
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      ContractDocument: {
        payload: Prisma.$ContractDocumentPayload<ExtArgs>
        fields: Prisma.ContractDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          findFirst: {
            args: Prisma.ContractDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          findMany: {
            args: Prisma.ContractDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>[]
          }
          create: {
            args: Prisma.ContractDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          createMany: {
            args: Prisma.ContractDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>[]
          }
          delete: {
            args: Prisma.ContractDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          update: {
            args: Prisma.ContractDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ContractDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>[]
          }
          upsert: {
            args: Prisma.ContractDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          aggregate: {
            args: Prisma.ContractDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractDocument>
          }
          groupBy: {
            args: Prisma.ContractDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ContractDocumentCountAggregateOutputType> | number
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
    car?: CarOmit
    manufacterers?: ManufacterersOmit
    models?: ModelsOmit
    customer?: CustomerOmit
    contract?: ContractOmit
    meeting?: MeetingOmit
    alarm?: AlarmOmit
    user?: UserOmit
    company?: CompanyOmit
    contractDocument?: ContractDocumentOmit
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
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    contracts: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | CarCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type ManufacterersCountOutputType
   */

  export type ManufacterersCountOutputType = {
    cars: number
  }

  export type ManufacterersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | ManufacterersCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * ManufacterersCountOutputType without action
   */
  export type ManufacterersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacterersCountOutputType
     */
    select?: ManufacterersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManufacterersCountOutputType without action
   */
  export type ManufacterersCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type ModelsCountOutputType
   */

  export type ModelsCountOutputType = {
    cars: number
  }

  export type ModelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | ModelsCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelsCountOutputType
     */
    select?: ModelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    contracts: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | CustomerCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    meetings: number
    documents: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | ContractCountOutputTypeCountMeetingsArgs
    documents?: boolean | ContractCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractDocumentWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    alarms: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarms?: boolean | MeetingCountOutputTypeCountAlarmsArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountAlarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    customers: number
    users: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CompanyCountOutputTypeCountCustomersArgs
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    mileage: number | null
    price: number | null
    accidentCount: number | null
    modelId: number | null
    manufacturerId: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    mileage: number | null
    price: number | null
    accidentCount: number | null
    modelId: number | null
    manufacturerId: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    carNumber: string | null
    type: $Enums.CarType | null
    mileage: number | null
    price: number | null
    explanation: string | null
    accidentCount: number | null
    accidentDetails: string | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    modelId: number | null
    manufacturerId: number | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    carNumber: string | null
    type: $Enums.CarType | null
    mileage: number | null
    price: number | null
    explanation: string | null
    accidentCount: number | null
    accidentDetails: string | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    modelId: number | null
    manufacturerId: number | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    carNumber: number
    type: number
    mileage: number
    price: number
    explanation: number
    accidentCount: number
    accidentDetails: number
    status: number
    createdAt: number
    updatedAt: number
    modelId: number
    manufacturerId: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    mileage?: true
    price?: true
    accidentCount?: true
    modelId?: true
    manufacturerId?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    mileage?: true
    price?: true
    accidentCount?: true
    modelId?: true
    manufacturerId?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    carNumber?: true
    type?: true
    mileage?: true
    price?: true
    explanation?: true
    accidentCount?: true
    accidentDetails?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    modelId?: true
    manufacturerId?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    carNumber?: true
    type?: true
    mileage?: true
    price?: true
    explanation?: true
    accidentCount?: true
    accidentDetails?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    modelId?: true
    manufacturerId?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    carNumber?: true
    type?: true
    mileage?: true
    price?: true
    explanation?: true
    accidentCount?: true
    accidentDetails?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    modelId?: true
    manufacturerId?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation: string | null
    accidentCount: number | null
    accidentDetails: string | null
    status: $Enums.VehicleStatus
    createdAt: Date
    updatedAt: Date
    modelId: number
    manufacturerId: number
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carNumber?: boolean
    type?: boolean
    mileage?: boolean
    price?: boolean
    explanation?: boolean
    accidentCount?: boolean
    accidentDetails?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelId?: boolean
    manufacturerId?: boolean
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    manufacturers?: boolean | ManufacterersDefaultArgs<ExtArgs>
    contracts?: boolean | Car$contractsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carNumber?: boolean
    type?: boolean
    mileage?: boolean
    price?: boolean
    explanation?: boolean
    accidentCount?: boolean
    accidentDetails?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelId?: boolean
    manufacturerId?: boolean
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    manufacturers?: boolean | ManufacterersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carNumber?: boolean
    type?: boolean
    mileage?: boolean
    price?: boolean
    explanation?: boolean
    accidentCount?: boolean
    accidentDetails?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelId?: boolean
    manufacturerId?: boolean
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    manufacturers?: boolean | ManufacterersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    carNumber?: boolean
    type?: boolean
    mileage?: boolean
    price?: boolean
    explanation?: boolean
    accidentCount?: boolean
    accidentDetails?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelId?: boolean
    manufacturerId?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carNumber" | "type" | "mileage" | "price" | "explanation" | "accidentCount" | "accidentDetails" | "status" | "createdAt" | "updatedAt" | "modelId" | "manufacturerId", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    manufacturers?: boolean | ManufacterersDefaultArgs<ExtArgs>
    contracts?: boolean | Car$contractsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    manufacturers?: boolean | ManufacterersDefaultArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    manufacturers?: boolean | ManufacterersDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      model: Prisma.$ModelsPayload<ExtArgs>
      manufacturers: Prisma.$ManufacterersPayload<ExtArgs>
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carNumber: string
      type: $Enums.CarType
      mileage: number
      price: number
      explanation: string | null
      accidentCount: number | null
      accidentDetails: string | null
      status: $Enums.VehicleStatus
      createdAt: Date
      updatedAt: Date
      modelId: number
      manufacturerId: number
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ModelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelsDefaultArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manufacturers<T extends ManufacterersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManufacterersDefaultArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contracts<T extends Car$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Car$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly carNumber: FieldRef<"Car", 'String'>
    readonly type: FieldRef<"Car", 'CarType'>
    readonly mileage: FieldRef<"Car", 'Int'>
    readonly price: FieldRef<"Car", 'Int'>
    readonly explanation: FieldRef<"Car", 'String'>
    readonly accidentCount: FieldRef<"Car", 'Int'>
    readonly accidentDetails: FieldRef<"Car", 'String'>
    readonly status: FieldRef<"Car", 'VehicleStatus'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
    readonly modelId: FieldRef<"Car", 'Int'>
    readonly manufacturerId: FieldRef<"Car", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.contracts
   */
  export type Car$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model Manufacterers
   */

  export type AggregateManufacterers = {
    _count: ManufacterersCountAggregateOutputType | null
    _avg: ManufacterersAvgAggregateOutputType | null
    _sum: ManufacterersSumAggregateOutputType | null
    _min: ManufacterersMinAggregateOutputType | null
    _max: ManufacterersMaxAggregateOutputType | null
  }

  export type ManufacterersAvgAggregateOutputType = {
    id: number | null
  }

  export type ManufacterersSumAggregateOutputType = {
    id: number | null
  }

  export type ManufacterersMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManufacterersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManufacterersCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ManufacterersAvgAggregateInputType = {
    id?: true
  }

  export type ManufacterersSumAggregateInputType = {
    id?: true
  }

  export type ManufacterersMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManufacterersMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManufacterersCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ManufacterersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacterers to aggregate.
     */
    where?: ManufacterersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacterers to fetch.
     */
    orderBy?: ManufacterersOrderByWithRelationInput | ManufacterersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManufacterersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacterers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacterers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manufacterers
    **/
    _count?: true | ManufacterersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManufacterersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManufacterersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacterersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacterersMaxAggregateInputType
  }

  export type GetManufacterersAggregateType<T extends ManufacterersAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacterers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacterers[P]>
      : GetScalarType<T[P], AggregateManufacterers[P]>
  }




  export type ManufacterersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacterersWhereInput
    orderBy?: ManufacterersOrderByWithAggregationInput | ManufacterersOrderByWithAggregationInput[]
    by: ManufacterersScalarFieldEnum[] | ManufacterersScalarFieldEnum
    having?: ManufacterersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacterersCountAggregateInputType | true
    _avg?: ManufacterersAvgAggregateInputType
    _sum?: ManufacterersSumAggregateInputType
    _min?: ManufacterersMinAggregateInputType
    _max?: ManufacterersMaxAggregateInputType
  }

  export type ManufacterersGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ManufacterersCountAggregateOutputType | null
    _avg: ManufacterersAvgAggregateOutputType | null
    _sum: ManufacterersSumAggregateOutputType | null
    _min: ManufacterersMinAggregateOutputType | null
    _max: ManufacterersMaxAggregateOutputType | null
  }

  type GetManufacterersGroupByPayload<T extends ManufacterersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacterersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacterersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacterersGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacterersGroupByOutputType[P]>
        }
      >
    >


  export type ManufacterersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cars?: boolean | Manufacterers$carsArgs<ExtArgs>
    _count?: boolean | ManufacterersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manufacterers"]>

  export type ManufacterersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manufacterers"]>

  export type ManufacterersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manufacterers"]>

  export type ManufacterersSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ManufacterersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["manufacterers"]>
  export type ManufacterersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | Manufacterers$carsArgs<ExtArgs>
    _count?: boolean | ManufacterersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManufacterersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ManufacterersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ManufacterersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manufacterers"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["manufacterers"]>
    composites: {}
  }

  type ManufacterersGetPayload<S extends boolean | null | undefined | ManufacterersDefaultArgs> = $Result.GetResult<Prisma.$ManufacterersPayload, S>

  type ManufacterersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManufacterersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManufacterersCountAggregateInputType | true
    }

  export interface ManufacterersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manufacterers'], meta: { name: 'Manufacterers' } }
    /**
     * Find zero or one Manufacterers that matches the filter.
     * @param {ManufacterersFindUniqueArgs} args - Arguments to find a Manufacterers
     * @example
     * // Get one Manufacterers
     * const manufacterers = await prisma.manufacterers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManufacterersFindUniqueArgs>(args: SelectSubset<T, ManufacterersFindUniqueArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manufacterers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManufacterersFindUniqueOrThrowArgs} args - Arguments to find a Manufacterers
     * @example
     * // Get one Manufacterers
     * const manufacterers = await prisma.manufacterers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManufacterersFindUniqueOrThrowArgs>(args: SelectSubset<T, ManufacterersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manufacterers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacterersFindFirstArgs} args - Arguments to find a Manufacterers
     * @example
     * // Get one Manufacterers
     * const manufacterers = await prisma.manufacterers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManufacterersFindFirstArgs>(args?: SelectSubset<T, ManufacterersFindFirstArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manufacterers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacterersFindFirstOrThrowArgs} args - Arguments to find a Manufacterers
     * @example
     * // Get one Manufacterers
     * const manufacterers = await prisma.manufacterers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManufacterersFindFirstOrThrowArgs>(args?: SelectSubset<T, ManufacterersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manufacterers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacterersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manufacterers
     * const manufacterers = await prisma.manufacterers.findMany()
     * 
     * // Get first 10 Manufacterers
     * const manufacterers = await prisma.manufacterers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manufacterersWithIdOnly = await prisma.manufacterers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManufacterersFindManyArgs>(args?: SelectSubset<T, ManufacterersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manufacterers.
     * @param {ManufacterersCreateArgs} args - Arguments to create a Manufacterers.
     * @example
     * // Create one Manufacterers
     * const Manufacterers = await prisma.manufacterers.create({
     *   data: {
     *     // ... data to create a Manufacterers
     *   }
     * })
     * 
     */
    create<T extends ManufacterersCreateArgs>(args: SelectSubset<T, ManufacterersCreateArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manufacterers.
     * @param {ManufacterersCreateManyArgs} args - Arguments to create many Manufacterers.
     * @example
     * // Create many Manufacterers
     * const manufacterers = await prisma.manufacterers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManufacterersCreateManyArgs>(args?: SelectSubset<T, ManufacterersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Manufacterers and returns the data saved in the database.
     * @param {ManufacterersCreateManyAndReturnArgs} args - Arguments to create many Manufacterers.
     * @example
     * // Create many Manufacterers
     * const manufacterers = await prisma.manufacterers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Manufacterers and only return the `id`
     * const manufacterersWithIdOnly = await prisma.manufacterers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManufacterersCreateManyAndReturnArgs>(args?: SelectSubset<T, ManufacterersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manufacterers.
     * @param {ManufacterersDeleteArgs} args - Arguments to delete one Manufacterers.
     * @example
     * // Delete one Manufacterers
     * const Manufacterers = await prisma.manufacterers.delete({
     *   where: {
     *     // ... filter to delete one Manufacterers
     *   }
     * })
     * 
     */
    delete<T extends ManufacterersDeleteArgs>(args: SelectSubset<T, ManufacterersDeleteArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manufacterers.
     * @param {ManufacterersUpdateArgs} args - Arguments to update one Manufacterers.
     * @example
     * // Update one Manufacterers
     * const manufacterers = await prisma.manufacterers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManufacterersUpdateArgs>(args: SelectSubset<T, ManufacterersUpdateArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manufacterers.
     * @param {ManufacterersDeleteManyArgs} args - Arguments to filter Manufacterers to delete.
     * @example
     * // Delete a few Manufacterers
     * const { count } = await prisma.manufacterers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManufacterersDeleteManyArgs>(args?: SelectSubset<T, ManufacterersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacterers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacterersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manufacterers
     * const manufacterers = await prisma.manufacterers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManufacterersUpdateManyArgs>(args: SelectSubset<T, ManufacterersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacterers and returns the data updated in the database.
     * @param {ManufacterersUpdateManyAndReturnArgs} args - Arguments to update many Manufacterers.
     * @example
     * // Update many Manufacterers
     * const manufacterers = await prisma.manufacterers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Manufacterers and only return the `id`
     * const manufacterersWithIdOnly = await prisma.manufacterers.updateManyAndReturn({
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
    updateManyAndReturn<T extends ManufacterersUpdateManyAndReturnArgs>(args: SelectSubset<T, ManufacterersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manufacterers.
     * @param {ManufacterersUpsertArgs} args - Arguments to update or create a Manufacterers.
     * @example
     * // Update or create a Manufacterers
     * const manufacterers = await prisma.manufacterers.upsert({
     *   create: {
     *     // ... data to create a Manufacterers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manufacterers we want to update
     *   }
     * })
     */
    upsert<T extends ManufacterersUpsertArgs>(args: SelectSubset<T, ManufacterersUpsertArgs<ExtArgs>>): Prisma__ManufacterersClient<$Result.GetResult<Prisma.$ManufacterersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manufacterers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacterersCountArgs} args - Arguments to filter Manufacterers to count.
     * @example
     * // Count the number of Manufacterers
     * const count = await prisma.manufacterers.count({
     *   where: {
     *     // ... the filter for the Manufacterers we want to count
     *   }
     * })
    **/
    count<T extends ManufacterersCountArgs>(
      args?: Subset<T, ManufacterersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacterersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manufacterers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacterersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManufacterersAggregateArgs>(args: Subset<T, ManufacterersAggregateArgs>): Prisma.PrismaPromise<GetManufacterersAggregateType<T>>

    /**
     * Group by Manufacterers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacterersGroupByArgs} args - Group by arguments.
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
      T extends ManufacterersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManufacterersGroupByArgs['orderBy'] }
        : { orderBy?: ManufacterersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManufacterersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacterersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manufacterers model
   */
  readonly fields: ManufacterersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manufacterers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManufacterersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends Manufacterers$carsArgs<ExtArgs> = {}>(args?: Subset<T, Manufacterers$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Manufacterers model
   */
  interface ManufacterersFieldRefs {
    readonly id: FieldRef<"Manufacterers", 'Int'>
    readonly name: FieldRef<"Manufacterers", 'String'>
    readonly createdAt: FieldRef<"Manufacterers", 'DateTime'>
    readonly updatedAt: FieldRef<"Manufacterers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Manufacterers findUnique
   */
  export type ManufacterersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacterers to fetch.
     */
    where: ManufacterersWhereUniqueInput
  }

  /**
   * Manufacterers findUniqueOrThrow
   */
  export type ManufacterersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacterers to fetch.
     */
    where: ManufacterersWhereUniqueInput
  }

  /**
   * Manufacterers findFirst
   */
  export type ManufacterersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacterers to fetch.
     */
    where?: ManufacterersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacterers to fetch.
     */
    orderBy?: ManufacterersOrderByWithRelationInput | ManufacterersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacterers.
     */
    cursor?: ManufacterersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacterers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacterers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacterers.
     */
    distinct?: ManufacterersScalarFieldEnum | ManufacterersScalarFieldEnum[]
  }

  /**
   * Manufacterers findFirstOrThrow
   */
  export type ManufacterersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacterers to fetch.
     */
    where?: ManufacterersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacterers to fetch.
     */
    orderBy?: ManufacterersOrderByWithRelationInput | ManufacterersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacterers.
     */
    cursor?: ManufacterersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacterers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacterers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacterers.
     */
    distinct?: ManufacterersScalarFieldEnum | ManufacterersScalarFieldEnum[]
  }

  /**
   * Manufacterers findMany
   */
  export type ManufacterersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacterers to fetch.
     */
    where?: ManufacterersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacterers to fetch.
     */
    orderBy?: ManufacterersOrderByWithRelationInput | ManufacterersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manufacterers.
     */
    cursor?: ManufacterersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacterers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacterers.
     */
    skip?: number
    distinct?: ManufacterersScalarFieldEnum | ManufacterersScalarFieldEnum[]
  }

  /**
   * Manufacterers create
   */
  export type ManufacterersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * The data needed to create a Manufacterers.
     */
    data: XOR<ManufacterersCreateInput, ManufacterersUncheckedCreateInput>
  }

  /**
   * Manufacterers createMany
   */
  export type ManufacterersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manufacterers.
     */
    data: ManufacterersCreateManyInput | ManufacterersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manufacterers createManyAndReturn
   */
  export type ManufacterersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * The data used to create many Manufacterers.
     */
    data: ManufacterersCreateManyInput | ManufacterersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manufacterers update
   */
  export type ManufacterersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * The data needed to update a Manufacterers.
     */
    data: XOR<ManufacterersUpdateInput, ManufacterersUncheckedUpdateInput>
    /**
     * Choose, which Manufacterers to update.
     */
    where: ManufacterersWhereUniqueInput
  }

  /**
   * Manufacterers updateMany
   */
  export type ManufacterersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manufacterers.
     */
    data: XOR<ManufacterersUpdateManyMutationInput, ManufacterersUncheckedUpdateManyInput>
    /**
     * Filter which Manufacterers to update
     */
    where?: ManufacterersWhereInput
    /**
     * Limit how many Manufacterers to update.
     */
    limit?: number
  }

  /**
   * Manufacterers updateManyAndReturn
   */
  export type ManufacterersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * The data used to update Manufacterers.
     */
    data: XOR<ManufacterersUpdateManyMutationInput, ManufacterersUncheckedUpdateManyInput>
    /**
     * Filter which Manufacterers to update
     */
    where?: ManufacterersWhereInput
    /**
     * Limit how many Manufacterers to update.
     */
    limit?: number
  }

  /**
   * Manufacterers upsert
   */
  export type ManufacterersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * The filter to search for the Manufacterers to update in case it exists.
     */
    where: ManufacterersWhereUniqueInput
    /**
     * In case the Manufacterers found by the `where` argument doesn't exist, create a new Manufacterers with this data.
     */
    create: XOR<ManufacterersCreateInput, ManufacterersUncheckedCreateInput>
    /**
     * In case the Manufacterers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManufacterersUpdateInput, ManufacterersUncheckedUpdateInput>
  }

  /**
   * Manufacterers delete
   */
  export type ManufacterersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
    /**
     * Filter which Manufacterers to delete.
     */
    where: ManufacterersWhereUniqueInput
  }

  /**
   * Manufacterers deleteMany
   */
  export type ManufacterersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacterers to delete
     */
    where?: ManufacterersWhereInput
    /**
     * Limit how many Manufacterers to delete.
     */
    limit?: number
  }

  /**
   * Manufacterers.cars
   */
  export type Manufacterers$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Manufacterers without action
   */
  export type ManufacterersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacterers
     */
    select?: ManufacterersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacterers
     */
    omit?: ManufacterersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacterersInclude<ExtArgs> | null
  }


  /**
   * Model Models
   */

  export type AggregateModels = {
    _count: ModelsCountAggregateOutputType | null
    _avg: ModelsAvgAggregateOutputType | null
    _sum: ModelsSumAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  export type ModelsAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type ModelsSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type ModelsMinAggregateOutputType = {
    id: number | null
    year: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelsMaxAggregateOutputType = {
    id: number | null
    year: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelsCountAggregateOutputType = {
    id: number
    year: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelsAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type ModelsSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type ModelsMinAggregateInputType = {
    id?: true
    year?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelsMaxAggregateInputType = {
    id?: true
    year?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelsCountAggregateInputType = {
    id?: true
    year?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to aggregate.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelsMaxAggregateInputType
  }

  export type GetModelsAggregateType<T extends ModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModels[P]>
      : GetScalarType<T[P], AggregateModels[P]>
  }




  export type ModelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelsWhereInput
    orderBy?: ModelsOrderByWithAggregationInput | ModelsOrderByWithAggregationInput[]
    by: ModelsScalarFieldEnum[] | ModelsScalarFieldEnum
    having?: ModelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelsCountAggregateInputType | true
    _avg?: ModelsAvgAggregateInputType
    _sum?: ModelsSumAggregateInputType
    _min?: ModelsMinAggregateInputType
    _max?: ModelsMaxAggregateInputType
  }

  export type ModelsGroupByOutputType = {
    id: number
    year: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ModelsCountAggregateOutputType | null
    _avg: ModelsAvgAggregateOutputType | null
    _sum: ModelsSumAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  type GetModelsGroupByPayload<T extends ModelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelsGroupByOutputType[P]>
            : GetScalarType<T[P], ModelsGroupByOutputType[P]>
        }
      >
    >


  export type ModelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cars?: boolean | Models$carsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectScalar = {
    id?: boolean
    year?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["models"]>
  export type ModelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | Models$carsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Models"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["models"]>
    composites: {}
  }

  type ModelsGetPayload<S extends boolean | null | undefined | ModelsDefaultArgs> = $Result.GetResult<Prisma.$ModelsPayload, S>

  type ModelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelsCountAggregateInputType | true
    }

  export interface ModelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Models'], meta: { name: 'Models' } }
    /**
     * Find zero or one Models that matches the filter.
     * @param {ModelsFindUniqueArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelsFindUniqueArgs>(args: SelectSubset<T, ModelsFindUniqueArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Models that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelsFindUniqueOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelsFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindFirstArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelsFindFirstArgs>(args?: SelectSubset<T, ModelsFindFirstArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindFirstOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelsFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.models.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.models.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelsWithIdOnly = await prisma.models.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelsFindManyArgs>(args?: SelectSubset<T, ModelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Models.
     * @param {ModelsCreateArgs} args - Arguments to create a Models.
     * @example
     * // Create one Models
     * const Models = await prisma.models.create({
     *   data: {
     *     // ... data to create a Models
     *   }
     * })
     * 
     */
    create<T extends ModelsCreateArgs>(args: SelectSubset<T, ModelsCreateArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelsCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelsCreateManyArgs>(args?: SelectSubset<T, ModelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelsCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelsWithIdOnly = await prisma.models.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelsCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Models.
     * @param {ModelsDeleteArgs} args - Arguments to delete one Models.
     * @example
     * // Delete one Models
     * const Models = await prisma.models.delete({
     *   where: {
     *     // ... filter to delete one Models
     *   }
     * })
     * 
     */
    delete<T extends ModelsDeleteArgs>(args: SelectSubset<T, ModelsDeleteArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Models.
     * @param {ModelsUpdateArgs} args - Arguments to update one Models.
     * @example
     * // Update one Models
     * const models = await prisma.models.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelsUpdateArgs>(args: SelectSubset<T, ModelsUpdateArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelsDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.models.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelsDeleteManyArgs>(args?: SelectSubset<T, ModelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelsUpdateManyArgs>(args: SelectSubset<T, ModelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelsUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelsWithIdOnly = await prisma.models.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModelsUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Models.
     * @param {ModelsUpsertArgs} args - Arguments to update or create a Models.
     * @example
     * // Update or create a Models
     * const models = await prisma.models.upsert({
     *   create: {
     *     // ... data to create a Models
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Models we want to update
     *   }
     * })
     */
    upsert<T extends ModelsUpsertArgs>(args: SelectSubset<T, ModelsUpsertArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.models.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelsCountArgs>(
      args?: Subset<T, ModelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelsAggregateArgs>(args: Subset<T, ModelsAggregateArgs>): Prisma.PrismaPromise<GetModelsAggregateType<T>>

    /**
     * Group by Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsGroupByArgs} args - Group by arguments.
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
      T extends ModelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelsGroupByArgs['orderBy'] }
        : { orderBy?: ModelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Models model
   */
  readonly fields: ModelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Models.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends Models$carsArgs<ExtArgs> = {}>(args?: Subset<T, Models$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Models model
   */
  interface ModelsFieldRefs {
    readonly id: FieldRef<"Models", 'Int'>
    readonly year: FieldRef<"Models", 'Int'>
    readonly name: FieldRef<"Models", 'String'>
    readonly createdAt: FieldRef<"Models", 'DateTime'>
    readonly updatedAt: FieldRef<"Models", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Models findUnique
   */
  export type ModelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models findUniqueOrThrow
   */
  export type ModelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models findFirst
   */
  export type ModelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models findFirstOrThrow
   */
  export type ModelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models findMany
   */
  export type ModelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models create
   */
  export type ModelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The data needed to create a Models.
     */
    data: XOR<ModelsCreateInput, ModelsUncheckedCreateInput>
  }

  /**
   * Models createMany
   */
  export type ModelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelsCreateManyInput | ModelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Models createManyAndReturn
   */
  export type ModelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelsCreateManyInput | ModelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Models update
   */
  export type ModelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The data needed to update a Models.
     */
    data: XOR<ModelsUpdateInput, ModelsUncheckedUpdateInput>
    /**
     * Choose, which Models to update.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models updateMany
   */
  export type ModelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Models updateManyAndReturn
   */
  export type ModelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Models upsert
   */
  export type ModelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The filter to search for the Models to update in case it exists.
     */
    where: ModelsWhereUniqueInput
    /**
     * In case the Models found by the `where` argument doesn't exist, create a new Models with this data.
     */
    create: XOR<ModelsCreateInput, ModelsUncheckedCreateInput>
    /**
     * In case the Models was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelsUpdateInput, ModelsUncheckedUpdateInput>
  }

  /**
   * Models delete
   */
  export type ModelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter which Models to delete.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models deleteMany
   */
  export type ModelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Models.cars
   */
  export type Models$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Models without action
   */
  export type ModelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    contractCount: number | null
    companyId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    contractCount: number | null
    companyId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: $Enums.GenderType | null
    phoneNumber: string | null
    ageGroup: $Enums.AgeGroup | null
    region: $Enums.Region | null
    memo: string | null
    contractCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: $Enums.GenderType | null
    phoneNumber: string | null
    ageGroup: $Enums.AgeGroup | null
    region: $Enums.Region | null
    memo: string | null
    contractCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    gender: number
    phoneNumber: number
    ageGroup: number
    region: number
    memo: number
    contractCount: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    contractCount?: true
    companyId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    contractCount?: true
    companyId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    phoneNumber?: true
    ageGroup?: true
    region?: true
    memo?: true
    contractCount?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    phoneNumber?: true
    ageGroup?: true
    region?: true
    memo?: true
    contractCount?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    phoneNumber?: true
    ageGroup?: true
    region?: true
    memo?: true
    contractCount?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo: string | null
    contractCount: number
    createdAt: Date
    updatedAt: Date
    companyId: number | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    phoneNumber?: boolean
    ageGroup?: boolean
    region?: boolean
    memo?: boolean
    contractCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    contracts?: boolean | Customer$contractsArgs<ExtArgs>
    Company?: boolean | Customer$CompanyArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    phoneNumber?: boolean
    ageGroup?: boolean
    region?: boolean
    memo?: boolean
    contractCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    Company?: boolean | Customer$CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    phoneNumber?: boolean
    ageGroup?: boolean
    region?: boolean
    memo?: boolean
    contractCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    Company?: boolean | Customer$CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    phoneNumber?: boolean
    ageGroup?: boolean
    region?: boolean
    memo?: boolean
    contractCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "gender" | "phoneNumber" | "ageGroup" | "region" | "memo" | "contractCount" | "createdAt" | "updatedAt" | "companyId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | Customer$contractsArgs<ExtArgs>
    Company?: boolean | Customer$CompanyArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | Customer$CompanyArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | Customer$CompanyArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      Company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      gender: $Enums.GenderType
      phoneNumber: string
      ageGroup: $Enums.AgeGroup
      region: $Enums.Region
      memo: string | null
      contractCount: number
      createdAt: Date
      updatedAt: Date
      companyId: number | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contracts<T extends Customer$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Company<T extends Customer$CompanyArgs<ExtArgs> = {}>(args?: Subset<T, Customer$CompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly gender: FieldRef<"Customer", 'GenderType'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
    readonly ageGroup: FieldRef<"Customer", 'AgeGroup'>
    readonly region: FieldRef<"Customer", 'Region'>
    readonly memo: FieldRef<"Customer", 'String'>
    readonly contractCount: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly companyId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.contracts
   */
  export type Customer$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Customer.Company
   */
  export type Customer$CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    customerId: number | null
    contractPrice: number | null
  }

  export type ContractSumAggregateOutputType = {
    id: number | null
    carId: number | null
    customerId: number | null
    contractPrice: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: number | null
    carId: number | null
    customerId: number | null
    status: $Enums.ContractStatus | null
    resolutionDate: Date | null
    contractPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    customerId: number | null
    status: $Enums.ContractStatus | null
    resolutionDate: Date | null
    contractPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    carId: number
    customerId: number
    status: number
    resolutionDate: number
    contractPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    id?: true
    carId?: true
    customerId?: true
    contractPrice?: true
  }

  export type ContractSumAggregateInputType = {
    id?: true
    carId?: true
    customerId?: true
    contractPrice?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    carId?: true
    customerId?: true
    status?: true
    resolutionDate?: true
    contractPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    carId?: true
    customerId?: true
    status?: true
    resolutionDate?: true
    contractPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    carId?: true
    customerId?: true
    status?: true
    resolutionDate?: true
    contractPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: number
    carId: number
    customerId: number
    status: $Enums.ContractStatus
    resolutionDate: Date | null
    contractPrice: number
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    customerId?: boolean
    status?: boolean
    resolutionDate?: boolean
    contractPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    meetings?: boolean | Contract$meetingsArgs<ExtArgs>
    documents?: boolean | Contract$documentsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    customerId?: boolean
    status?: boolean
    resolutionDate?: boolean
    contractPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    customerId?: boolean
    status?: boolean
    resolutionDate?: boolean
    contractPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    carId?: boolean
    customerId?: boolean
    status?: boolean
    resolutionDate?: boolean
    contractPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "customerId" | "status" | "resolutionDate" | "contractPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    meetings?: boolean | Contract$meetingsArgs<ExtArgs>
    documents?: boolean | Contract$documentsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
      documents: Prisma.$ContractDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      customerId: number
      status: $Enums.ContractStatus
      resolutionDate: Date | null
      contractPrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meetings<T extends Contract$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Contract$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'Int'>
    readonly carId: FieldRef<"Contract", 'Int'>
    readonly customerId: FieldRef<"Contract", 'Int'>
    readonly status: FieldRef<"Contract", 'ContractStatus'>
    readonly resolutionDate: FieldRef<"Contract", 'DateTime'>
    readonly contractPrice: FieldRef<"Contract", 'Int'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.meetings
   */
  export type Contract$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Contract.documents
   */
  export type Contract$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    where?: ContractDocumentWhereInput
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    cursor?: ContractDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type MeetingSumAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type MeetingMinAggregateOutputType = {
    id: number | null
    date: Date | null
    contractId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    contractId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    date: number
    contractId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingAvgAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type MeetingSumAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type MeetingMinAggregateInputType = {
    id?: true
    date?: true
    contractId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    date?: true
    contractId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    date?: true
    contractId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _avg?: MeetingAvgAggregateInputType
    _sum?: MeetingSumAggregateInputType
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: number
    date: Date
    contractId: number
    createdAt: Date
    updatedAt: Date
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    contractId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    alarms?: boolean | Meeting$alarmsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    contractId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    contractId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    date?: boolean
    contractId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "contractId" | "createdAt" | "updatedAt", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    alarms?: boolean | Meeting$alarmsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
      alarms: Prisma.$AlarmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      contractId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
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
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alarms<T extends Meeting$alarmsArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$alarmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'Int'>
    readonly date: FieldRef<"Meeting", 'DateTime'>
    readonly contractId: FieldRef<"Meeting", 'Int'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting.alarms
   */
  export type Meeting$alarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    where?: AlarmWhereInput
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    cursor?: AlarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model Alarm
   */

  export type AggregateAlarm = {
    _count: AlarmCountAggregateOutputType | null
    _avg: AlarmAvgAggregateOutputType | null
    _sum: AlarmSumAggregateOutputType | null
    _min: AlarmMinAggregateOutputType | null
    _max: AlarmMaxAggregateOutputType | null
  }

  export type AlarmAvgAggregateOutputType = {
    id: number | null
    meetingId: number | null
  }

  export type AlarmSumAggregateOutputType = {
    id: number | null
    meetingId: number | null
  }

  export type AlarmMinAggregateOutputType = {
    id: number | null
    meetingId: number | null
    alarmAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlarmMaxAggregateOutputType = {
    id: number | null
    meetingId: number | null
    alarmAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlarmCountAggregateOutputType = {
    id: number
    meetingId: number
    alarmAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlarmAvgAggregateInputType = {
    id?: true
    meetingId?: true
  }

  export type AlarmSumAggregateInputType = {
    id?: true
    meetingId?: true
  }

  export type AlarmMinAggregateInputType = {
    id?: true
    meetingId?: true
    alarmAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlarmMaxAggregateInputType = {
    id?: true
    meetingId?: true
    alarmAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlarmCountAggregateInputType = {
    id?: true
    meetingId?: true
    alarmAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alarm to aggregate.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alarms
    **/
    _count?: true | AlarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlarmMaxAggregateInputType
  }

  export type GetAlarmAggregateType<T extends AlarmAggregateArgs> = {
        [P in keyof T & keyof AggregateAlarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlarm[P]>
      : GetScalarType<T[P], AggregateAlarm[P]>
  }




  export type AlarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmWhereInput
    orderBy?: AlarmOrderByWithAggregationInput | AlarmOrderByWithAggregationInput[]
    by: AlarmScalarFieldEnum[] | AlarmScalarFieldEnum
    having?: AlarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlarmCountAggregateInputType | true
    _avg?: AlarmAvgAggregateInputType
    _sum?: AlarmSumAggregateInputType
    _min?: AlarmMinAggregateInputType
    _max?: AlarmMaxAggregateInputType
  }

  export type AlarmGroupByOutputType = {
    id: number
    meetingId: number
    alarmAt: Date
    createdAt: Date
    updatedAt: Date
    _count: AlarmCountAggregateOutputType | null
    _avg: AlarmAvgAggregateOutputType | null
    _sum: AlarmSumAggregateOutputType | null
    _min: AlarmMinAggregateOutputType | null
    _max: AlarmMaxAggregateOutputType | null
  }

  type GetAlarmGroupByPayload<T extends AlarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlarmGroupByOutputType[P]>
            : GetScalarType<T[P], AlarmGroupByOutputType[P]>
        }
      >
    >


  export type AlarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    alarmAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    alarmAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    alarmAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectScalar = {
    id?: boolean
    meetingId?: boolean
    alarmAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meetingId" | "alarmAt" | "createdAt" | "updatedAt", ExtArgs["result"]["alarm"]>
  export type AlarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }
  export type AlarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }
  export type AlarmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }

  export type $AlarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alarm"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meetingId: number
      alarmAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alarm"]>
    composites: {}
  }

  type AlarmGetPayload<S extends boolean | null | undefined | AlarmDefaultArgs> = $Result.GetResult<Prisma.$AlarmPayload, S>

  type AlarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlarmCountAggregateInputType | true
    }

  export interface AlarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alarm'], meta: { name: 'Alarm' } }
    /**
     * Find zero or one Alarm that matches the filter.
     * @param {AlarmFindUniqueArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlarmFindUniqueArgs>(args: SelectSubset<T, AlarmFindUniqueArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alarm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlarmFindUniqueOrThrowArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlarmFindUniqueOrThrowArgs>(args: SelectSubset<T, AlarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alarm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindFirstArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlarmFindFirstArgs>(args?: SelectSubset<T, AlarmFindFirstArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alarm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindFirstOrThrowArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlarmFindFirstOrThrowArgs>(args?: SelectSubset<T, AlarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alarms
     * const alarms = await prisma.alarm.findMany()
     * 
     * // Get first 10 Alarms
     * const alarms = await prisma.alarm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alarmWithIdOnly = await prisma.alarm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlarmFindManyArgs>(args?: SelectSubset<T, AlarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alarm.
     * @param {AlarmCreateArgs} args - Arguments to create a Alarm.
     * @example
     * // Create one Alarm
     * const Alarm = await prisma.alarm.create({
     *   data: {
     *     // ... data to create a Alarm
     *   }
     * })
     * 
     */
    create<T extends AlarmCreateArgs>(args: SelectSubset<T, AlarmCreateArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alarms.
     * @param {AlarmCreateManyArgs} args - Arguments to create many Alarms.
     * @example
     * // Create many Alarms
     * const alarm = await prisma.alarm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlarmCreateManyArgs>(args?: SelectSubset<T, AlarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alarms and returns the data saved in the database.
     * @param {AlarmCreateManyAndReturnArgs} args - Arguments to create many Alarms.
     * @example
     * // Create many Alarms
     * const alarm = await prisma.alarm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alarms and only return the `id`
     * const alarmWithIdOnly = await prisma.alarm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlarmCreateManyAndReturnArgs>(args?: SelectSubset<T, AlarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alarm.
     * @param {AlarmDeleteArgs} args - Arguments to delete one Alarm.
     * @example
     * // Delete one Alarm
     * const Alarm = await prisma.alarm.delete({
     *   where: {
     *     // ... filter to delete one Alarm
     *   }
     * })
     * 
     */
    delete<T extends AlarmDeleteArgs>(args: SelectSubset<T, AlarmDeleteArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alarm.
     * @param {AlarmUpdateArgs} args - Arguments to update one Alarm.
     * @example
     * // Update one Alarm
     * const alarm = await prisma.alarm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlarmUpdateArgs>(args: SelectSubset<T, AlarmUpdateArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alarms.
     * @param {AlarmDeleteManyArgs} args - Arguments to filter Alarms to delete.
     * @example
     * // Delete a few Alarms
     * const { count } = await prisma.alarm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlarmDeleteManyArgs>(args?: SelectSubset<T, AlarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alarms
     * const alarm = await prisma.alarm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlarmUpdateManyArgs>(args: SelectSubset<T, AlarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alarms and returns the data updated in the database.
     * @param {AlarmUpdateManyAndReturnArgs} args - Arguments to update many Alarms.
     * @example
     * // Update many Alarms
     * const alarm = await prisma.alarm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alarms and only return the `id`
     * const alarmWithIdOnly = await prisma.alarm.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlarmUpdateManyAndReturnArgs>(args: SelectSubset<T, AlarmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alarm.
     * @param {AlarmUpsertArgs} args - Arguments to update or create a Alarm.
     * @example
     * // Update or create a Alarm
     * const alarm = await prisma.alarm.upsert({
     *   create: {
     *     // ... data to create a Alarm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alarm we want to update
     *   }
     * })
     */
    upsert<T extends AlarmUpsertArgs>(args: SelectSubset<T, AlarmUpsertArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmCountArgs} args - Arguments to filter Alarms to count.
     * @example
     * // Count the number of Alarms
     * const count = await prisma.alarm.count({
     *   where: {
     *     // ... the filter for the Alarms we want to count
     *   }
     * })
    **/
    count<T extends AlarmCountArgs>(
      args?: Subset<T, AlarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlarmAggregateArgs>(args: Subset<T, AlarmAggregateArgs>): Prisma.PrismaPromise<GetAlarmAggregateType<T>>

    /**
     * Group by Alarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmGroupByArgs} args - Group by arguments.
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
      T extends AlarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlarmGroupByArgs['orderBy'] }
        : { orderBy?: AlarmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alarm model
   */
  readonly fields: AlarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alarm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alarm model
   */
  interface AlarmFieldRefs {
    readonly id: FieldRef<"Alarm", 'Int'>
    readonly meetingId: FieldRef<"Alarm", 'Int'>
    readonly alarmAt: FieldRef<"Alarm", 'DateTime'>
    readonly createdAt: FieldRef<"Alarm", 'DateTime'>
    readonly updatedAt: FieldRef<"Alarm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alarm findUnique
   */
  export type AlarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm findUniqueOrThrow
   */
  export type AlarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm findFirst
   */
  export type AlarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alarms.
     */
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm findFirstOrThrow
   */
  export type AlarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alarms.
     */
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm findMany
   */
  export type AlarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarms to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm create
   */
  export type AlarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Alarm.
     */
    data: XOR<AlarmCreateInput, AlarmUncheckedCreateInput>
  }

  /**
   * Alarm createMany
   */
  export type AlarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alarms.
     */
    data: AlarmCreateManyInput | AlarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alarm createManyAndReturn
   */
  export type AlarmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * The data used to create many Alarms.
     */
    data: AlarmCreateManyInput | AlarmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alarm update
   */
  export type AlarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Alarm.
     */
    data: XOR<AlarmUpdateInput, AlarmUncheckedUpdateInput>
    /**
     * Choose, which Alarm to update.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm updateMany
   */
  export type AlarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alarms.
     */
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyInput>
    /**
     * Filter which Alarms to update
     */
    where?: AlarmWhereInput
    /**
     * Limit how many Alarms to update.
     */
    limit?: number
  }

  /**
   * Alarm updateManyAndReturn
   */
  export type AlarmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * The data used to update Alarms.
     */
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyInput>
    /**
     * Filter which Alarms to update
     */
    where?: AlarmWhereInput
    /**
     * Limit how many Alarms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alarm upsert
   */
  export type AlarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Alarm to update in case it exists.
     */
    where: AlarmWhereUniqueInput
    /**
     * In case the Alarm found by the `where` argument doesn't exist, create a new Alarm with this data.
     */
    create: XOR<AlarmCreateInput, AlarmUncheckedCreateInput>
    /**
     * In case the Alarm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlarmUpdateInput, AlarmUncheckedUpdateInput>
  }

  /**
   * Alarm delete
   */
  export type AlarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter which Alarm to delete.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm deleteMany
   */
  export type AlarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alarms to delete
     */
    where?: AlarmWhereInput
    /**
     * Limit how many Alarms to delete.
     */
    limit?: number
  }

  /**
   * Alarm without action
   */
  export type AlarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    employeeNumber: string | null
    companyId: number | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    employeeNumber: string | null
    companyId: number | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    employeeNumber: number
    companyId: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    employeeNumber?: true
    companyId?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    employeeNumber?: true
    companyId?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    employeeNumber?: true
    companyId?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    employeeNumber: string
    companyId: number
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    employeeNumber?: boolean
    companyId?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    employeeNumber?: boolean
    companyId?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    employeeNumber?: boolean
    companyId?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    employeeNumber?: boolean
    companyId?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "employeeNumber" | "companyId" | "isAdmin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      employeeNumber: string
      companyId: number
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly employeeNumber: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'Int'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    companyCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    companyCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    companyCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    companyCode: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customers?: boolean | Company$customersArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    companyCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyCode" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Company$customersArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      companyCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Company$customersArgs<ExtArgs> = {}>(args?: Subset<T, Company$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly companyCode: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.customers
   */
  export type Company$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model ContractDocument
   */

  export type AggregateContractDocument = {
    _count: ContractDocumentCountAggregateOutputType | null
    _avg: ContractDocumentAvgAggregateOutputType | null
    _sum: ContractDocumentSumAggregateOutputType | null
    _min: ContractDocumentMinAggregateOutputType | null
    _max: ContractDocumentMaxAggregateOutputType | null
  }

  export type ContractDocumentAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
    fileSize: number | null
  }

  export type ContractDocumentSumAggregateOutputType = {
    id: number | null
    contractId: number | null
    fileSize: number | null
  }

  export type ContractDocumentMinAggregateOutputType = {
    id: number | null
    contractId: number | null
    fileName: string | null
    filePath: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractDocumentMaxAggregateOutputType = {
    id: number | null
    contractId: number | null
    fileName: string | null
    filePath: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractDocumentCountAggregateOutputType = {
    id: number
    contractId: number
    fileName: number
    filePath: number
    fileSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractDocumentAvgAggregateInputType = {
    id?: true
    contractId?: true
    fileSize?: true
  }

  export type ContractDocumentSumAggregateInputType = {
    id?: true
    contractId?: true
    fileSize?: true
  }

  export type ContractDocumentMinAggregateInputType = {
    id?: true
    contractId?: true
    fileName?: true
    filePath?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractDocumentMaxAggregateInputType = {
    id?: true
    contractId?: true
    fileName?: true
    filePath?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractDocumentCountAggregateInputType = {
    id?: true
    contractId?: true
    fileName?: true
    filePath?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractDocument to aggregate.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractDocuments
    **/
    _count?: true | ContractDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractDocumentMaxAggregateInputType
  }

  export type GetContractDocumentAggregateType<T extends ContractDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateContractDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractDocument[P]>
      : GetScalarType<T[P], AggregateContractDocument[P]>
  }




  export type ContractDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractDocumentWhereInput
    orderBy?: ContractDocumentOrderByWithAggregationInput | ContractDocumentOrderByWithAggregationInput[]
    by: ContractDocumentScalarFieldEnum[] | ContractDocumentScalarFieldEnum
    having?: ContractDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractDocumentCountAggregateInputType | true
    _avg?: ContractDocumentAvgAggregateInputType
    _sum?: ContractDocumentSumAggregateInputType
    _min?: ContractDocumentMinAggregateInputType
    _max?: ContractDocumentMaxAggregateInputType
  }

  export type ContractDocumentGroupByOutputType = {
    id: number
    contractId: number
    fileName: string
    filePath: string
    fileSize: number
    createdAt: Date
    updatedAt: Date
    _count: ContractDocumentCountAggregateOutputType | null
    _avg: ContractDocumentAvgAggregateOutputType | null
    _sum: ContractDocumentSumAggregateOutputType | null
    _min: ContractDocumentMinAggregateOutputType | null
    _max: ContractDocumentMaxAggregateOutputType | null
  }

  type GetContractDocumentGroupByPayload<T extends ContractDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ContractDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ContractDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    fileName?: boolean
    filePath?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractDocument"]>

  export type ContractDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    fileName?: boolean
    filePath?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractDocument"]>

  export type ContractDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    fileName?: boolean
    filePath?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractDocument"]>

  export type ContractDocumentSelectScalar = {
    id?: boolean
    contractId?: boolean
    fileName?: boolean
    filePath?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "fileName" | "filePath" | "fileSize" | "createdAt" | "updatedAt", ExtArgs["result"]["contractDocument"]>
  export type ContractDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type ContractDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type ContractDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $ContractDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractDocument"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contractId: number
      fileName: string
      filePath: string
      fileSize: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contractDocument"]>
    composites: {}
  }

  type ContractDocumentGetPayload<S extends boolean | null | undefined | ContractDocumentDefaultArgs> = $Result.GetResult<Prisma.$ContractDocumentPayload, S>

  type ContractDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractDocumentCountAggregateInputType | true
    }

  export interface ContractDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractDocument'], meta: { name: 'ContractDocument' } }
    /**
     * Find zero or one ContractDocument that matches the filter.
     * @param {ContractDocumentFindUniqueArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractDocumentFindUniqueArgs>(args: SelectSubset<T, ContractDocumentFindUniqueArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractDocumentFindUniqueOrThrowArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindFirstArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractDocumentFindFirstArgs>(args?: SelectSubset<T, ContractDocumentFindFirstArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindFirstOrThrowArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractDocuments
     * const contractDocuments = await prisma.contractDocument.findMany()
     * 
     * // Get first 10 ContractDocuments
     * const contractDocuments = await prisma.contractDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractDocumentWithIdOnly = await prisma.contractDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractDocumentFindManyArgs>(args?: SelectSubset<T, ContractDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractDocument.
     * @param {ContractDocumentCreateArgs} args - Arguments to create a ContractDocument.
     * @example
     * // Create one ContractDocument
     * const ContractDocument = await prisma.contractDocument.create({
     *   data: {
     *     // ... data to create a ContractDocument
     *   }
     * })
     * 
     */
    create<T extends ContractDocumentCreateArgs>(args: SelectSubset<T, ContractDocumentCreateArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractDocuments.
     * @param {ContractDocumentCreateManyArgs} args - Arguments to create many ContractDocuments.
     * @example
     * // Create many ContractDocuments
     * const contractDocument = await prisma.contractDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractDocumentCreateManyArgs>(args?: SelectSubset<T, ContractDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractDocuments and returns the data saved in the database.
     * @param {ContractDocumentCreateManyAndReturnArgs} args - Arguments to create many ContractDocuments.
     * @example
     * // Create many ContractDocuments
     * const contractDocument = await prisma.contractDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractDocuments and only return the `id`
     * const contractDocumentWithIdOnly = await prisma.contractDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractDocument.
     * @param {ContractDocumentDeleteArgs} args - Arguments to delete one ContractDocument.
     * @example
     * // Delete one ContractDocument
     * const ContractDocument = await prisma.contractDocument.delete({
     *   where: {
     *     // ... filter to delete one ContractDocument
     *   }
     * })
     * 
     */
    delete<T extends ContractDocumentDeleteArgs>(args: SelectSubset<T, ContractDocumentDeleteArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractDocument.
     * @param {ContractDocumentUpdateArgs} args - Arguments to update one ContractDocument.
     * @example
     * // Update one ContractDocument
     * const contractDocument = await prisma.contractDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractDocumentUpdateArgs>(args: SelectSubset<T, ContractDocumentUpdateArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractDocuments.
     * @param {ContractDocumentDeleteManyArgs} args - Arguments to filter ContractDocuments to delete.
     * @example
     * // Delete a few ContractDocuments
     * const { count } = await prisma.contractDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDocumentDeleteManyArgs>(args?: SelectSubset<T, ContractDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractDocuments
     * const contractDocument = await prisma.contractDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractDocumentUpdateManyArgs>(args: SelectSubset<T, ContractDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractDocuments and returns the data updated in the database.
     * @param {ContractDocumentUpdateManyAndReturnArgs} args - Arguments to update many ContractDocuments.
     * @example
     * // Update many ContractDocuments
     * const contractDocument = await prisma.contractDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractDocuments and only return the `id`
     * const contractDocumentWithIdOnly = await prisma.contractDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContractDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractDocument.
     * @param {ContractDocumentUpsertArgs} args - Arguments to update or create a ContractDocument.
     * @example
     * // Update or create a ContractDocument
     * const contractDocument = await prisma.contractDocument.upsert({
     *   create: {
     *     // ... data to create a ContractDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractDocument we want to update
     *   }
     * })
     */
    upsert<T extends ContractDocumentUpsertArgs>(args: SelectSubset<T, ContractDocumentUpsertArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentCountArgs} args - Arguments to filter ContractDocuments to count.
     * @example
     * // Count the number of ContractDocuments
     * const count = await prisma.contractDocument.count({
     *   where: {
     *     // ... the filter for the ContractDocuments we want to count
     *   }
     * })
    **/
    count<T extends ContractDocumentCountArgs>(
      args?: Subset<T, ContractDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractDocumentAggregateArgs>(args: Subset<T, ContractDocumentAggregateArgs>): Prisma.PrismaPromise<GetContractDocumentAggregateType<T>>

    /**
     * Group by ContractDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentGroupByArgs} args - Group by arguments.
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
      T extends ContractDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ContractDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractDocument model
   */
  readonly fields: ContractDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContractDocument model
   */
  interface ContractDocumentFieldRefs {
    readonly id: FieldRef<"ContractDocument", 'Int'>
    readonly contractId: FieldRef<"ContractDocument", 'Int'>
    readonly fileName: FieldRef<"ContractDocument", 'String'>
    readonly filePath: FieldRef<"ContractDocument", 'String'>
    readonly fileSize: FieldRef<"ContractDocument", 'Int'>
    readonly createdAt: FieldRef<"ContractDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"ContractDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractDocument findUnique
   */
  export type ContractDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument findUniqueOrThrow
   */
  export type ContractDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument findFirst
   */
  export type ContractDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractDocuments.
     */
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument findFirstOrThrow
   */
  export type ContractDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractDocuments.
     */
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument findMany
   */
  export type ContractDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocuments to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument create
   */
  export type ContractDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractDocument.
     */
    data: XOR<ContractDocumentCreateInput, ContractDocumentUncheckedCreateInput>
  }

  /**
   * ContractDocument createMany
   */
  export type ContractDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractDocuments.
     */
    data: ContractDocumentCreateManyInput | ContractDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractDocument createManyAndReturn
   */
  export type ContractDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many ContractDocuments.
     */
    data: ContractDocumentCreateManyInput | ContractDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractDocument update
   */
  export type ContractDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractDocument.
     */
    data: XOR<ContractDocumentUpdateInput, ContractDocumentUncheckedUpdateInput>
    /**
     * Choose, which ContractDocument to update.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument updateMany
   */
  export type ContractDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractDocuments.
     */
    data: XOR<ContractDocumentUpdateManyMutationInput, ContractDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ContractDocuments to update
     */
    where?: ContractDocumentWhereInput
    /**
     * Limit how many ContractDocuments to update.
     */
    limit?: number
  }

  /**
   * ContractDocument updateManyAndReturn
   */
  export type ContractDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * The data used to update ContractDocuments.
     */
    data: XOR<ContractDocumentUpdateManyMutationInput, ContractDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ContractDocuments to update
     */
    where?: ContractDocumentWhereInput
    /**
     * Limit how many ContractDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractDocument upsert
   */
  export type ContractDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractDocument to update in case it exists.
     */
    where: ContractDocumentWhereUniqueInput
    /**
     * In case the ContractDocument found by the `where` argument doesn't exist, create a new ContractDocument with this data.
     */
    create: XOR<ContractDocumentCreateInput, ContractDocumentUncheckedCreateInput>
    /**
     * In case the ContractDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractDocumentUpdateInput, ContractDocumentUncheckedUpdateInput>
  }

  /**
   * ContractDocument delete
   */
  export type ContractDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter which ContractDocument to delete.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument deleteMany
   */
  export type ContractDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractDocuments to delete
     */
    where?: ContractDocumentWhereInput
    /**
     * Limit how many ContractDocuments to delete.
     */
    limit?: number
  }

  /**
   * ContractDocument without action
   */
  export type ContractDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
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


  export const CarScalarFieldEnum: {
    id: 'id',
    carNumber: 'carNumber',
    type: 'type',
    mileage: 'mileage',
    price: 'price',
    explanation: 'explanation',
    accidentCount: 'accidentCount',
    accidentDetails: 'accidentDetails',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    modelId: 'modelId',
    manufacturerId: 'manufacturerId'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const ManufacterersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ManufacterersScalarFieldEnum = (typeof ManufacterersScalarFieldEnum)[keyof typeof ManufacterersScalarFieldEnum]


  export const ModelsScalarFieldEnum: {
    id: 'id',
    year: 'year',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelsScalarFieldEnum = (typeof ModelsScalarFieldEnum)[keyof typeof ModelsScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    ageGroup: 'ageGroup',
    region: 'region',
    memo: 'memo',
    contractCount: 'contractCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    customerId: 'customerId',
    status: 'status',
    resolutionDate: 'resolutionDate',
    contractPrice: 'contractPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    date: 'date',
    contractId: 'contractId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const AlarmScalarFieldEnum: {
    id: 'id',
    meetingId: 'meetingId',
    alarmAt: 'alarmAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlarmScalarFieldEnum = (typeof AlarmScalarFieldEnum)[keyof typeof AlarmScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    employeeNumber: 'employeeNumber',
    companyId: 'companyId',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyCode: 'companyCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ContractDocumentScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    fileName: 'fileName',
    filePath: 'filePath',
    fileSize: 'fileSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractDocumentScalarFieldEnum = (typeof ContractDocumentScalarFieldEnum)[keyof typeof ContractDocumentScalarFieldEnum]


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
   * Reference to a field of type 'CarType'
   */
  export type EnumCarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarType'>
    


  /**
   * Reference to a field of type 'CarType[]'
   */
  export type ListEnumCarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarType[]'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'VehicleStatus[]'
   */
  export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GenderType'
   */
  export type EnumGenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderType'>
    


  /**
   * Reference to a field of type 'GenderType[]'
   */
  export type ListEnumGenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderType[]'>
    


  /**
   * Reference to a field of type 'AgeGroup'
   */
  export type EnumAgeGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeGroup'>
    


  /**
   * Reference to a field of type 'AgeGroup[]'
   */
  export type ListEnumAgeGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeGroup[]'>
    


  /**
   * Reference to a field of type 'Region'
   */
  export type EnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region'>
    


  /**
   * Reference to a field of type 'Region[]'
   */
  export type ListEnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region[]'>
    


  /**
   * Reference to a field of type 'ContractStatus'
   */
  export type EnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus'>
    


  /**
   * Reference to a field of type 'ContractStatus[]'
   */
  export type ListEnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus[]'>
    


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


  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    carNumber?: StringFilter<"Car"> | string
    type?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    mileage?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    explanation?: StringNullableFilter<"Car"> | string | null
    accidentCount?: IntNullableFilter<"Car"> | number | null
    accidentDetails?: StringNullableFilter<"Car"> | string | null
    status?: EnumVehicleStatusFilter<"Car"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    modelId?: IntFilter<"Car"> | number
    manufacturerId?: IntFilter<"Car"> | number
    model?: XOR<ModelsScalarRelationFilter, ModelsWhereInput>
    manufacturers?: XOR<ManufacterersScalarRelationFilter, ManufacterersWhereInput>
    contracts?: ContractListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    carNumber?: SortOrder
    type?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    explanation?: SortOrderInput | SortOrder
    accidentCount?: SortOrderInput | SortOrder
    accidentDetails?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    manufacturerId?: SortOrder
    model?: ModelsOrderByWithRelationInput
    manufacturers?: ManufacterersOrderByWithRelationInput
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    carNumber?: StringFilter<"Car"> | string
    type?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    mileage?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    explanation?: StringNullableFilter<"Car"> | string | null
    accidentCount?: IntNullableFilter<"Car"> | number | null
    accidentDetails?: StringNullableFilter<"Car"> | string | null
    status?: EnumVehicleStatusFilter<"Car"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    modelId?: IntFilter<"Car"> | number
    manufacturerId?: IntFilter<"Car"> | number
    model?: XOR<ModelsScalarRelationFilter, ModelsWhereInput>
    manufacturers?: XOR<ManufacterersScalarRelationFilter, ManufacterersWhereInput>
    contracts?: ContractListRelationFilter
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    carNumber?: SortOrder
    type?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    explanation?: SortOrderInput | SortOrder
    accidentCount?: SortOrderInput | SortOrder
    accidentDetails?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    manufacturerId?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    carNumber?: StringWithAggregatesFilter<"Car"> | string
    type?: EnumCarTypeWithAggregatesFilter<"Car"> | $Enums.CarType
    mileage?: IntWithAggregatesFilter<"Car"> | number
    price?: IntWithAggregatesFilter<"Car"> | number
    explanation?: StringNullableWithAggregatesFilter<"Car"> | string | null
    accidentCount?: IntNullableWithAggregatesFilter<"Car"> | number | null
    accidentDetails?: StringNullableWithAggregatesFilter<"Car"> | string | null
    status?: EnumVehicleStatusWithAggregatesFilter<"Car"> | $Enums.VehicleStatus
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    modelId?: IntWithAggregatesFilter<"Car"> | number
    manufacturerId?: IntWithAggregatesFilter<"Car"> | number
  }

  export type ManufacterersWhereInput = {
    AND?: ManufacterersWhereInput | ManufacterersWhereInput[]
    OR?: ManufacterersWhereInput[]
    NOT?: ManufacterersWhereInput | ManufacterersWhereInput[]
    id?: IntFilter<"Manufacterers"> | number
    name?: StringFilter<"Manufacterers"> | string
    createdAt?: DateTimeFilter<"Manufacterers"> | Date | string
    updatedAt?: DateTimeFilter<"Manufacterers"> | Date | string
    cars?: CarListRelationFilter
  }

  export type ManufacterersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cars?: CarOrderByRelationAggregateInput
  }

  export type ManufacterersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ManufacterersWhereInput | ManufacterersWhereInput[]
    OR?: ManufacterersWhereInput[]
    NOT?: ManufacterersWhereInput | ManufacterersWhereInput[]
    name?: StringFilter<"Manufacterers"> | string
    createdAt?: DateTimeFilter<"Manufacterers"> | Date | string
    updatedAt?: DateTimeFilter<"Manufacterers"> | Date | string
    cars?: CarListRelationFilter
  }, "id">

  export type ManufacterersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ManufacterersCountOrderByAggregateInput
    _avg?: ManufacterersAvgOrderByAggregateInput
    _max?: ManufacterersMaxOrderByAggregateInput
    _min?: ManufacterersMinOrderByAggregateInput
    _sum?: ManufacterersSumOrderByAggregateInput
  }

  export type ManufacterersScalarWhereWithAggregatesInput = {
    AND?: ManufacterersScalarWhereWithAggregatesInput | ManufacterersScalarWhereWithAggregatesInput[]
    OR?: ManufacterersScalarWhereWithAggregatesInput[]
    NOT?: ManufacterersScalarWhereWithAggregatesInput | ManufacterersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manufacterers"> | number
    name?: StringWithAggregatesFilter<"Manufacterers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Manufacterers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Manufacterers"> | Date | string
  }

  export type ModelsWhereInput = {
    AND?: ModelsWhereInput | ModelsWhereInput[]
    OR?: ModelsWhereInput[]
    NOT?: ModelsWhereInput | ModelsWhereInput[]
    id?: IntFilter<"Models"> | number
    year?: IntFilter<"Models"> | number
    name?: StringFilter<"Models"> | string
    createdAt?: DateTimeFilter<"Models"> | Date | string
    updatedAt?: DateTimeFilter<"Models"> | Date | string
    cars?: CarListRelationFilter
  }

  export type ModelsOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cars?: CarOrderByRelationAggregateInput
  }

  export type ModelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModelsWhereInput | ModelsWhereInput[]
    OR?: ModelsWhereInput[]
    NOT?: ModelsWhereInput | ModelsWhereInput[]
    year?: IntFilter<"Models"> | number
    name?: StringFilter<"Models"> | string
    createdAt?: DateTimeFilter<"Models"> | Date | string
    updatedAt?: DateTimeFilter<"Models"> | Date | string
    cars?: CarListRelationFilter
  }, "id">

  export type ModelsOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelsCountOrderByAggregateInput
    _avg?: ModelsAvgOrderByAggregateInput
    _max?: ModelsMaxOrderByAggregateInput
    _min?: ModelsMinOrderByAggregateInput
    _sum?: ModelsSumOrderByAggregateInput
  }

  export type ModelsScalarWhereWithAggregatesInput = {
    AND?: ModelsScalarWhereWithAggregatesInput | ModelsScalarWhereWithAggregatesInput[]
    OR?: ModelsScalarWhereWithAggregatesInput[]
    NOT?: ModelsScalarWhereWithAggregatesInput | ModelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Models"> | number
    year?: IntWithAggregatesFilter<"Models"> | number
    name?: StringWithAggregatesFilter<"Models"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Models"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Models"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    gender?: EnumGenderTypeFilter<"Customer"> | $Enums.GenderType
    phoneNumber?: StringFilter<"Customer"> | string
    ageGroup?: EnumAgeGroupFilter<"Customer"> | $Enums.AgeGroup
    region?: EnumRegionFilter<"Customer"> | $Enums.Region
    memo?: StringNullableFilter<"Customer"> | string | null
    contractCount?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    companyId?: IntNullableFilter<"Customer"> | number | null
    contracts?: ContractListRelationFilter
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrder
    region?: SortOrder
    memo?: SortOrderInput | SortOrder
    contractCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrderInput | SortOrder
    contracts?: ContractOrderByRelationAggregateInput
    Company?: CompanyOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    gender?: EnumGenderTypeFilter<"Customer"> | $Enums.GenderType
    phoneNumber?: StringFilter<"Customer"> | string
    ageGroup?: EnumAgeGroupFilter<"Customer"> | $Enums.AgeGroup
    region?: EnumRegionFilter<"Customer"> | $Enums.Region
    memo?: StringNullableFilter<"Customer"> | string | null
    contractCount?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    companyId?: IntNullableFilter<"Customer"> | number | null
    contracts?: ContractListRelationFilter
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrder
    region?: SortOrder
    memo?: SortOrderInput | SortOrder
    contractCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    gender?: EnumGenderTypeWithAggregatesFilter<"Customer"> | $Enums.GenderType
    phoneNumber?: StringWithAggregatesFilter<"Customer"> | string
    ageGroup?: EnumAgeGroupWithAggregatesFilter<"Customer"> | $Enums.AgeGroup
    region?: EnumRegionWithAggregatesFilter<"Customer"> | $Enums.Region
    memo?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    contractCount?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    companyId?: IntNullableWithAggregatesFilter<"Customer"> | number | null
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: IntFilter<"Contract"> | number
    carId?: IntFilter<"Contract"> | number
    customerId?: IntFilter<"Contract"> | number
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    resolutionDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    contractPrice?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    meetings?: MeetingListRelationFilter
    documents?: ContractDocumentListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrderInput | SortOrder
    contractPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    meetings?: MeetingOrderByRelationAggregateInput
    documents?: ContractDocumentOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    carId?: IntFilter<"Contract"> | number
    customerId?: IntFilter<"Contract"> | number
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    resolutionDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    contractPrice?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    meetings?: MeetingListRelationFilter
    documents?: ContractDocumentListRelationFilter
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrderInput | SortOrder
    contractPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contract"> | number
    carId?: IntWithAggregatesFilter<"Contract"> | number
    customerId?: IntWithAggregatesFilter<"Contract"> | number
    status?: EnumContractStatusWithAggregatesFilter<"Contract"> | $Enums.ContractStatus
    resolutionDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    contractPrice?: IntWithAggregatesFilter<"Contract"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: IntFilter<"Meeting"> | number
    date?: DateTimeFilter<"Meeting"> | Date | string
    contractId?: IntFilter<"Meeting"> | number
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    alarms?: AlarmListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
    alarms?: AlarmOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    date?: DateTimeFilter<"Meeting"> | Date | string
    contractId?: IntFilter<"Meeting"> | number
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    alarms?: AlarmListRelationFilter
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _avg?: MeetingAvgOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
    _sum?: MeetingSumOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meeting"> | number
    date?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    contractId?: IntWithAggregatesFilter<"Meeting"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
  }

  export type AlarmWhereInput = {
    AND?: AlarmWhereInput | AlarmWhereInput[]
    OR?: AlarmWhereInput[]
    NOT?: AlarmWhereInput | AlarmWhereInput[]
    id?: IntFilter<"Alarm"> | number
    meetingId?: IntFilter<"Alarm"> | number
    alarmAt?: DateTimeFilter<"Alarm"> | Date | string
    createdAt?: DateTimeFilter<"Alarm"> | Date | string
    updatedAt?: DateTimeFilter<"Alarm"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
  }

  export type AlarmOrderByWithRelationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    alarmAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
  }

  export type AlarmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlarmWhereInput | AlarmWhereInput[]
    OR?: AlarmWhereInput[]
    NOT?: AlarmWhereInput | AlarmWhereInput[]
    meetingId?: IntFilter<"Alarm"> | number
    alarmAt?: DateTimeFilter<"Alarm"> | Date | string
    createdAt?: DateTimeFilter<"Alarm"> | Date | string
    updatedAt?: DateTimeFilter<"Alarm"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
  }, "id">

  export type AlarmOrderByWithAggregationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    alarmAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlarmCountOrderByAggregateInput
    _avg?: AlarmAvgOrderByAggregateInput
    _max?: AlarmMaxOrderByAggregateInput
    _min?: AlarmMinOrderByAggregateInput
    _sum?: AlarmSumOrderByAggregateInput
  }

  export type AlarmScalarWhereWithAggregatesInput = {
    AND?: AlarmScalarWhereWithAggregatesInput | AlarmScalarWhereWithAggregatesInput[]
    OR?: AlarmScalarWhereWithAggregatesInput[]
    NOT?: AlarmScalarWhereWithAggregatesInput | AlarmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alarm"> | number
    meetingId?: IntWithAggregatesFilter<"Alarm"> | number
    alarmAt?: DateTimeWithAggregatesFilter<"Alarm"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Alarm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alarm"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    employeeNumber?: StringFilter<"User"> | string
    companyId?: IntFilter<"User"> | number
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    employeeNumber?: SortOrder
    companyId?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    employeeNumber?: StringFilter<"User"> | string
    companyId?: IntFilter<"User"> | number
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    employeeNumber?: SortOrder
    companyId?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    employeeNumber?: StringWithAggregatesFilter<"User"> | string
    companyId?: IntWithAggregatesFilter<"User"> | number
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    companyCode?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    customers?: CustomerListRelationFilter
    users?: UserListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    companyCode?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    customers?: CustomerListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "companyCode">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    companyCode?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ContractDocumentWhereInput = {
    AND?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    OR?: ContractDocumentWhereInput[]
    NOT?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    id?: IntFilter<"ContractDocument"> | number
    contractId?: IntFilter<"ContractDocument"> | number
    fileName?: StringFilter<"ContractDocument"> | string
    filePath?: StringFilter<"ContractDocument"> | string
    fileSize?: IntFilter<"ContractDocument"> | number
    createdAt?: DateTimeFilter<"ContractDocument"> | Date | string
    updatedAt?: DateTimeFilter<"ContractDocument"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type ContractDocumentOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type ContractDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    OR?: ContractDocumentWhereInput[]
    NOT?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    contractId?: IntFilter<"ContractDocument"> | number
    fileName?: StringFilter<"ContractDocument"> | string
    filePath?: StringFilter<"ContractDocument"> | string
    fileSize?: IntFilter<"ContractDocument"> | number
    createdAt?: DateTimeFilter<"ContractDocument"> | Date | string
    updatedAt?: DateTimeFilter<"ContractDocument"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id">

  export type ContractDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractDocumentCountOrderByAggregateInput
    _avg?: ContractDocumentAvgOrderByAggregateInput
    _max?: ContractDocumentMaxOrderByAggregateInput
    _min?: ContractDocumentMinOrderByAggregateInput
    _sum?: ContractDocumentSumOrderByAggregateInput
  }

  export type ContractDocumentScalarWhereWithAggregatesInput = {
    AND?: ContractDocumentScalarWhereWithAggregatesInput | ContractDocumentScalarWhereWithAggregatesInput[]
    OR?: ContractDocumentScalarWhereWithAggregatesInput[]
    NOT?: ContractDocumentScalarWhereWithAggregatesInput | ContractDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContractDocument"> | number
    contractId?: IntWithAggregatesFilter<"ContractDocument"> | number
    fileName?: StringWithAggregatesFilter<"ContractDocument"> | string
    filePath?: StringWithAggregatesFilter<"ContractDocument"> | string
    fileSize?: IntWithAggregatesFilter<"ContractDocument"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContractDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContractDocument"> | Date | string
  }

  export type CarCreateInput = {
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    model: ModelsCreateNestedOneWithoutCarsInput
    manufacturers: ManufacterersCreateNestedOneWithoutCarsInput
    contracts?: ContractCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: number
    manufacturerId: number
    contracts?: ContractUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ModelsUpdateOneRequiredWithoutCarsNestedInput
    manufacturers?: ManufacterersUpdateOneRequiredWithoutCarsNestedInput
    contracts?: ContractUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: IntFieldUpdateOperationsInput | number
    manufacturerId?: IntFieldUpdateOperationsInput | number
    contracts?: ContractUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: number
    manufacturerId: number
  }

  export type CarUpdateManyMutationInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: IntFieldUpdateOperationsInput | number
    manufacturerId?: IntFieldUpdateOperationsInput | number
  }

  export type ManufacterersCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarCreateNestedManyWithoutManufacturersInput
  }

  export type ManufacterersUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutManufacturersInput
  }

  export type ManufacterersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutManufacturersNestedInput
  }

  export type ManufacterersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutManufacturersNestedInput
  }

  export type ManufacterersCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManufacterersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacterersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelsCreateInput = {
    year: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarCreateNestedManyWithoutModelInput
  }

  export type ModelsUncheckedCreateInput = {
    id?: number
    year: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelsUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutModelNestedInput
  }

  export type ModelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelsCreateManyInput = {
    id?: number
    year: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelsUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo?: string | null
    contractCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractCreateNestedManyWithoutCustomerInput
    Company?: CompanyCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo?: string | null
    contractCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: number | null
    contracts?: ContractUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUpdateManyWithoutCustomerNestedInput
    Company?: CompanyUpdateOneWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    contracts?: ContractUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo?: string | null
    contractCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: number | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContractCreateInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractsInput
    customer: CustomerCreateNestedOneWithoutContractsInput
    meetings?: MeetingCreateNestedManyWithoutContractInput
    documents?: ContractDocumentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: number
    carId: number
    customerId: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutContractInput
    documents?: ContractDocumentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    meetings?: MeetingUpdateManyWithoutContractNestedInput
    documents?: ContractDocumentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutContractNestedInput
    documents?: ContractDocumentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: number
    carId: number
    customerId: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateInput = {
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractCreateNestedOneWithoutMeetingsInput
    alarms?: AlarmCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: number
    date: Date | string
    contractId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    alarms?: AlarmUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutMeetingsNestedInput
    alarms?: AlarmUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: AlarmUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: number
    date: Date | string
    contractId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmCreateInput = {
    alarmAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutAlarmsInput
  }

  export type AlarmUncheckedCreateInput = {
    id?: number
    meetingId: number
    alarmAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmUpdateInput = {
    alarmAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutAlarmsNestedInput
  }

  export type AlarmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingId?: IntFieldUpdateOperationsInput | number
    alarmAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmCreateManyInput = {
    id?: number
    meetingId: number
    alarmAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmUpdateManyMutationInput = {
    alarmAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingId?: IntFieldUpdateOperationsInput | number
    alarmAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    employeeNumber: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    employeeNumber: string
    companyId: number
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    employeeNumber: string
    companyId: number
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentCreateInput = {
    fileName: string
    filePath: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractCreateNestedOneWithoutDocumentsInput
  }

  export type ContractDocumentUncheckedCreateInput = {
    id?: number
    contractId: number
    fileName: string
    filePath: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractDocumentUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ContractDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentCreateManyInput = {
    id?: number
    contractId: number
    fileName: string
    filePath: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractDocumentUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumCarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeFilter<$PrismaModel> | $Enums.CarType
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

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
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

  export type ModelsScalarRelationFilter = {
    is?: ModelsWhereInput
    isNot?: ModelsWhereInput
  }

  export type ManufacterersScalarRelationFilter = {
    is?: ManufacterersWhereInput
    isNot?: ManufacterersWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    carNumber?: SortOrder
    type?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    explanation?: SortOrder
    accidentCount?: SortOrder
    accidentDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    modelId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    carNumber?: SortOrder
    type?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    explanation?: SortOrder
    accidentCount?: SortOrder
    accidentDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    carNumber?: SortOrder
    type?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    explanation?: SortOrder
    accidentCount?: SortOrder
    accidentDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    modelId?: SortOrder
    manufacturerId?: SortOrder
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

  export type EnumCarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeWithAggregatesFilter<$PrismaModel> | $Enums.CarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarTypeFilter<$PrismaModel>
    _max?: NestedEnumCarTypeFilter<$PrismaModel>
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

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
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

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManufacterersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManufacterersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManufacterersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManufacterersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManufacterersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModelsCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelsAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type ModelsMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelsMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelsSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type EnumGenderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderType | EnumGenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderTypeFilter<$PrismaModel> | $Enums.GenderType
  }

  export type EnumAgeGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeGroup | EnumAgeGroupFieldRefInput<$PrismaModel>
    in?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeGroupFilter<$PrismaModel> | $Enums.AgeGroup
  }

  export type EnumRegionFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel>
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    not?: NestedEnumRegionFilter<$PrismaModel> | $Enums.Region
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrder
    region?: SortOrder
    memo?: SortOrder
    contractCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    contractCount?: SortOrder
    companyId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrder
    region?: SortOrder
    memo?: SortOrder
    contractCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrder
    region?: SortOrder
    memo?: SortOrder
    contractCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    contractCount?: SortOrder
    companyId?: SortOrder
  }

  export type EnumGenderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderType | EnumGenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderTypeWithAggregatesFilter<$PrismaModel> | $Enums.GenderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderTypeFilter<$PrismaModel>
    _max?: NestedEnumGenderTypeFilter<$PrismaModel>
  }

  export type EnumAgeGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeGroup | EnumAgeGroupFieldRefInput<$PrismaModel>
    in?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeGroupWithAggregatesFilter<$PrismaModel> | $Enums.AgeGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeGroupFilter<$PrismaModel>
    _max?: NestedEnumAgeGroupFilter<$PrismaModel>
  }

  export type EnumRegionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel>
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    not?: NestedEnumRegionWithAggregatesFilter<$PrismaModel> | $Enums.Region
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegionFilter<$PrismaModel>
    _max?: NestedEnumRegionFilter<$PrismaModel>
  }

  export type EnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
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

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type ContractDocumentListRelationFilter = {
    every?: ContractDocumentWhereInput
    some?: ContractDocumentWhereInput
    none?: ContractDocumentWhereInput
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrder
    contractPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    contractPrice?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrder
    contractPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrder
    contractPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    contractPrice?: SortOrder
  }

  export type EnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
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

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type AlarmListRelationFilter = {
    every?: AlarmWhereInput
    some?: AlarmWhereInput
    none?: AlarmWhereInput
  }

  export type AlarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type MeetingScalarRelationFilter = {
    is?: MeetingWhereInput
    isNot?: MeetingWhereInput
  }

  export type AlarmCountOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    alarmAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlarmAvgOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
  }

  export type AlarmMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    alarmAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlarmMinOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    alarmAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlarmSumOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    employeeNumber?: SortOrder
    companyId?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    employeeNumber?: SortOrder
    companyId?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    employeeNumber?: SortOrder
    companyId?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContractDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    fileSize?: SortOrder
  }

  export type ContractDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    fileSize?: SortOrder
  }

  export type ModelsCreateNestedOneWithoutCarsInput = {
    create?: XOR<ModelsCreateWithoutCarsInput, ModelsUncheckedCreateWithoutCarsInput>
    connectOrCreate?: ModelsCreateOrConnectWithoutCarsInput
    connect?: ModelsWhereUniqueInput
  }

  export type ManufacterersCreateNestedOneWithoutCarsInput = {
    create?: XOR<ManufacterersCreateWithoutCarsInput, ManufacterersUncheckedCreateWithoutCarsInput>
    connectOrCreate?: ManufacterersCreateOrConnectWithoutCarsInput
    connect?: ManufacterersWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutCarInput = {
    create?: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput> | ContractCreateWithoutCarInput[] | ContractUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCarInput | ContractCreateOrConnectWithoutCarInput[]
    createMany?: ContractCreateManyCarInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput> | ContractCreateWithoutCarInput[] | ContractUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCarInput | ContractCreateOrConnectWithoutCarInput[]
    createMany?: ContractCreateManyCarInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCarTypeFieldUpdateOperationsInput = {
    set?: $Enums.CarType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ModelsUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<ModelsCreateWithoutCarsInput, ModelsUncheckedCreateWithoutCarsInput>
    connectOrCreate?: ModelsCreateOrConnectWithoutCarsInput
    upsert?: ModelsUpsertWithoutCarsInput
    connect?: ModelsWhereUniqueInput
    update?: XOR<XOR<ModelsUpdateToOneWithWhereWithoutCarsInput, ModelsUpdateWithoutCarsInput>, ModelsUncheckedUpdateWithoutCarsInput>
  }

  export type ManufacterersUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<ManufacterersCreateWithoutCarsInput, ManufacterersUncheckedCreateWithoutCarsInput>
    connectOrCreate?: ManufacterersCreateOrConnectWithoutCarsInput
    upsert?: ManufacterersUpsertWithoutCarsInput
    connect?: ManufacterersWhereUniqueInput
    update?: XOR<XOR<ManufacterersUpdateToOneWithWhereWithoutCarsInput, ManufacterersUpdateWithoutCarsInput>, ManufacterersUncheckedUpdateWithoutCarsInput>
  }

  export type ContractUpdateManyWithoutCarNestedInput = {
    create?: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput> | ContractCreateWithoutCarInput[] | ContractUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCarInput | ContractCreateOrConnectWithoutCarInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCarInput | ContractUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ContractCreateManyCarInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCarInput | ContractUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCarInput | ContractUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput> | ContractCreateWithoutCarInput[] | ContractUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCarInput | ContractCreateOrConnectWithoutCarInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCarInput | ContractUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ContractCreateManyCarInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCarInput | ContractUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCarInput | ContractUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CarCreateNestedManyWithoutManufacturersInput = {
    create?: XOR<CarCreateWithoutManufacturersInput, CarUncheckedCreateWithoutManufacturersInput> | CarCreateWithoutManufacturersInput[] | CarUncheckedCreateWithoutManufacturersInput[]
    connectOrCreate?: CarCreateOrConnectWithoutManufacturersInput | CarCreateOrConnectWithoutManufacturersInput[]
    createMany?: CarCreateManyManufacturersInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutManufacturersInput = {
    create?: XOR<CarCreateWithoutManufacturersInput, CarUncheckedCreateWithoutManufacturersInput> | CarCreateWithoutManufacturersInput[] | CarUncheckedCreateWithoutManufacturersInput[]
    connectOrCreate?: CarCreateOrConnectWithoutManufacturersInput | CarCreateOrConnectWithoutManufacturersInput[]
    createMany?: CarCreateManyManufacturersInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutManufacturersNestedInput = {
    create?: XOR<CarCreateWithoutManufacturersInput, CarUncheckedCreateWithoutManufacturersInput> | CarCreateWithoutManufacturersInput[] | CarUncheckedCreateWithoutManufacturersInput[]
    connectOrCreate?: CarCreateOrConnectWithoutManufacturersInput | CarCreateOrConnectWithoutManufacturersInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutManufacturersInput | CarUpsertWithWhereUniqueWithoutManufacturersInput[]
    createMany?: CarCreateManyManufacturersInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutManufacturersInput | CarUpdateWithWhereUniqueWithoutManufacturersInput[]
    updateMany?: CarUpdateManyWithWhereWithoutManufacturersInput | CarUpdateManyWithWhereWithoutManufacturersInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutManufacturersNestedInput = {
    create?: XOR<CarCreateWithoutManufacturersInput, CarUncheckedCreateWithoutManufacturersInput> | CarCreateWithoutManufacturersInput[] | CarUncheckedCreateWithoutManufacturersInput[]
    connectOrCreate?: CarCreateOrConnectWithoutManufacturersInput | CarCreateOrConnectWithoutManufacturersInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutManufacturersInput | CarUpsertWithWhereUniqueWithoutManufacturersInput[]
    createMany?: CarCreateManyManufacturersInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutManufacturersInput | CarUpdateWithWhereUniqueWithoutManufacturersInput[]
    updateMany?: CarUpdateManyWithWhereWithoutManufacturersInput | CarUpdateManyWithWhereWithoutManufacturersInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarCreateNestedManyWithoutModelInput = {
    create?: XOR<CarCreateWithoutModelInput, CarUncheckedCreateWithoutModelInput> | CarCreateWithoutModelInput[] | CarUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CarCreateOrConnectWithoutModelInput | CarCreateOrConnectWithoutModelInput[]
    createMany?: CarCreateManyModelInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<CarCreateWithoutModelInput, CarUncheckedCreateWithoutModelInput> | CarCreateWithoutModelInput[] | CarUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CarCreateOrConnectWithoutModelInput | CarCreateOrConnectWithoutModelInput[]
    createMany?: CarCreateManyModelInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutModelNestedInput = {
    create?: XOR<CarCreateWithoutModelInput, CarUncheckedCreateWithoutModelInput> | CarCreateWithoutModelInput[] | CarUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CarCreateOrConnectWithoutModelInput | CarCreateOrConnectWithoutModelInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutModelInput | CarUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: CarCreateManyModelInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutModelInput | CarUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: CarUpdateManyWithWhereWithoutModelInput | CarUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<CarCreateWithoutModelInput, CarUncheckedCreateWithoutModelInput> | CarCreateWithoutModelInput[] | CarUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CarCreateOrConnectWithoutModelInput | CarCreateOrConnectWithoutModelInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutModelInput | CarUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: CarCreateManyModelInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutModelInput | CarUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: CarUpdateManyWithWhereWithoutModelInput | CarUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type ContractCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutCustomersInput = {
    create?: XOR<CompanyCreateWithoutCustomersInput, CompanyUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ContractUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type EnumGenderTypeFieldUpdateOperationsInput = {
    set?: $Enums.GenderType
  }

  export type EnumAgeGroupFieldUpdateOperationsInput = {
    set?: $Enums.AgeGroup
  }

  export type EnumRegionFieldUpdateOperationsInput = {
    set?: $Enums.Region
  }

  export type ContractUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCustomerInput | ContractUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCustomerInput | ContractUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCustomerInput | ContractUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CompanyUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<CompanyCreateWithoutCustomersInput, CompanyUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomersInput
    upsert?: CompanyUpsertWithoutCustomersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCustomersInput, CompanyUpdateWithoutCustomersInput>, CompanyUncheckedUpdateWithoutCustomersInput>
  }

  export type ContractUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCustomerInput | ContractUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCustomerInput | ContractUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCustomerInput | ContractUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutContractsInput = {
    create?: XOR<CarCreateWithoutContractsInput, CarUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CarCreateOrConnectWithoutContractsInput
    connect?: CarWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutContractsInput = {
    create?: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContractsInput
    connect?: CustomerWhereUniqueInput
  }

  export type MeetingCreateNestedManyWithoutContractInput = {
    create?: XOR<MeetingCreateWithoutContractInput, MeetingUncheckedCreateWithoutContractInput> | MeetingCreateWithoutContractInput[] | MeetingUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutContractInput | MeetingCreateOrConnectWithoutContractInput[]
    createMany?: MeetingCreateManyContractInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type ContractDocumentCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput> | ContractDocumentCreateWithoutContractInput[] | ContractDocumentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractInput | ContractDocumentCreateOrConnectWithoutContractInput[]
    createMany?: ContractDocumentCreateManyContractInputEnvelope
    connect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<MeetingCreateWithoutContractInput, MeetingUncheckedCreateWithoutContractInput> | MeetingCreateWithoutContractInput[] | MeetingUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutContractInput | MeetingCreateOrConnectWithoutContractInput[]
    createMany?: MeetingCreateManyContractInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type ContractDocumentUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput> | ContractDocumentCreateWithoutContractInput[] | ContractDocumentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractInput | ContractDocumentCreateOrConnectWithoutContractInput[]
    createMany?: ContractDocumentCreateManyContractInputEnvelope
    connect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
  }

  export type EnumContractStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContractStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CarUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<CarCreateWithoutContractsInput, CarUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CarCreateOrConnectWithoutContractsInput
    upsert?: CarUpsertWithoutContractsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutContractsInput, CarUpdateWithoutContractsInput>, CarUncheckedUpdateWithoutContractsInput>
  }

  export type CustomerUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContractsInput
    upsert?: CustomerUpsertWithoutContractsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutContractsInput, CustomerUpdateWithoutContractsInput>, CustomerUncheckedUpdateWithoutContractsInput>
  }

  export type MeetingUpdateManyWithoutContractNestedInput = {
    create?: XOR<MeetingCreateWithoutContractInput, MeetingUncheckedCreateWithoutContractInput> | MeetingCreateWithoutContractInput[] | MeetingUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutContractInput | MeetingCreateOrConnectWithoutContractInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutContractInput | MeetingUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: MeetingCreateManyContractInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutContractInput | MeetingUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutContractInput | MeetingUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type ContractDocumentUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput> | ContractDocumentCreateWithoutContractInput[] | ContractDocumentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractInput | ContractDocumentCreateOrConnectWithoutContractInput[]
    upsert?: ContractDocumentUpsertWithWhereUniqueWithoutContractInput | ContractDocumentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractDocumentCreateManyContractInputEnvelope
    set?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    disconnect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    delete?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    connect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    update?: ContractDocumentUpdateWithWhereUniqueWithoutContractInput | ContractDocumentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractDocumentUpdateManyWithWhereWithoutContractInput | ContractDocumentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractDocumentScalarWhereInput | ContractDocumentScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<MeetingCreateWithoutContractInput, MeetingUncheckedCreateWithoutContractInput> | MeetingCreateWithoutContractInput[] | MeetingUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutContractInput | MeetingCreateOrConnectWithoutContractInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutContractInput | MeetingUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: MeetingCreateManyContractInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutContractInput | MeetingUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutContractInput | MeetingUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type ContractDocumentUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput> | ContractDocumentCreateWithoutContractInput[] | ContractDocumentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractInput | ContractDocumentCreateOrConnectWithoutContractInput[]
    upsert?: ContractDocumentUpsertWithWhereUniqueWithoutContractInput | ContractDocumentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractDocumentCreateManyContractInputEnvelope
    set?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    disconnect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    delete?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    connect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    update?: ContractDocumentUpdateWithWhereUniqueWithoutContractInput | ContractDocumentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractDocumentUpdateManyWithWhereWithoutContractInput | ContractDocumentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractDocumentScalarWhereInput | ContractDocumentScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<ContractCreateWithoutMeetingsInput, ContractUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutMeetingsInput
    connect?: ContractWhereUniqueInput
  }

  export type AlarmCreateNestedManyWithoutMeetingInput = {
    create?: XOR<AlarmCreateWithoutMeetingInput, AlarmUncheckedCreateWithoutMeetingInput> | AlarmCreateWithoutMeetingInput[] | AlarmUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutMeetingInput | AlarmCreateOrConnectWithoutMeetingInput[]
    createMany?: AlarmCreateManyMeetingInputEnvelope
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
  }

  export type AlarmUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<AlarmCreateWithoutMeetingInput, AlarmUncheckedCreateWithoutMeetingInput> | AlarmCreateWithoutMeetingInput[] | AlarmUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutMeetingInput | AlarmCreateOrConnectWithoutMeetingInput[]
    createMany?: AlarmCreateManyMeetingInputEnvelope
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
  }

  export type ContractUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<ContractCreateWithoutMeetingsInput, ContractUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutMeetingsInput
    upsert?: ContractUpsertWithoutMeetingsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutMeetingsInput, ContractUpdateWithoutMeetingsInput>, ContractUncheckedUpdateWithoutMeetingsInput>
  }

  export type AlarmUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<AlarmCreateWithoutMeetingInput, AlarmUncheckedCreateWithoutMeetingInput> | AlarmCreateWithoutMeetingInput[] | AlarmUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutMeetingInput | AlarmCreateOrConnectWithoutMeetingInput[]
    upsert?: AlarmUpsertWithWhereUniqueWithoutMeetingInput | AlarmUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: AlarmCreateManyMeetingInputEnvelope
    set?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    disconnect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    delete?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    update?: AlarmUpdateWithWhereUniqueWithoutMeetingInput | AlarmUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: AlarmUpdateManyWithWhereWithoutMeetingInput | AlarmUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
  }

  export type AlarmUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<AlarmCreateWithoutMeetingInput, AlarmUncheckedCreateWithoutMeetingInput> | AlarmCreateWithoutMeetingInput[] | AlarmUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutMeetingInput | AlarmCreateOrConnectWithoutMeetingInput[]
    upsert?: AlarmUpsertWithWhereUniqueWithoutMeetingInput | AlarmUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: AlarmCreateManyMeetingInputEnvelope
    set?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    disconnect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    delete?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    update?: AlarmUpdateWithWhereUniqueWithoutMeetingInput | AlarmUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: AlarmUpdateManyWithWhereWithoutMeetingInput | AlarmUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
  }

  export type MeetingCreateNestedOneWithoutAlarmsInput = {
    create?: XOR<MeetingCreateWithoutAlarmsInput, MeetingUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutAlarmsInput
    connect?: MeetingWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutAlarmsNestedInput = {
    create?: XOR<MeetingCreateWithoutAlarmsInput, MeetingUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutAlarmsInput
    upsert?: MeetingUpsertWithoutAlarmsInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutAlarmsInput, MeetingUpdateWithoutAlarmsInput>, MeetingUncheckedUpdateWithoutAlarmsInput>
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CustomerCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutCompanyInput | CustomerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutCompanyInput | CustomerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutCompanyInput | CustomerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutCompanyInput | CustomerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutCompanyInput | CustomerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutCompanyInput | CustomerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ContractCreateWithoutDocumentsInput, ContractUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ContractCreateWithoutDocumentsInput, ContractUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput
    upsert?: ContractUpsertWithoutDocumentsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutDocumentsInput, ContractUpdateWithoutDocumentsInput>, ContractUncheckedUpdateWithoutDocumentsInput>
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

  export type NestedEnumCarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeFilter<$PrismaModel> | $Enums.CarType
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

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
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

  export type NestedEnumCarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeWithAggregatesFilter<$PrismaModel> | $Enums.CarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarTypeFilter<$PrismaModel>
    _max?: NestedEnumCarTypeFilter<$PrismaModel>
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

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
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

  export type NestedEnumGenderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderType | EnumGenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderTypeFilter<$PrismaModel> | $Enums.GenderType
  }

  export type NestedEnumAgeGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeGroup | EnumAgeGroupFieldRefInput<$PrismaModel>
    in?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeGroupFilter<$PrismaModel> | $Enums.AgeGroup
  }

  export type NestedEnumRegionFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel>
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    not?: NestedEnumRegionFilter<$PrismaModel> | $Enums.Region
  }

  export type NestedEnumGenderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderType | EnumGenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderTypeWithAggregatesFilter<$PrismaModel> | $Enums.GenderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderTypeFilter<$PrismaModel>
    _max?: NestedEnumGenderTypeFilter<$PrismaModel>
  }

  export type NestedEnumAgeGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeGroup | EnumAgeGroupFieldRefInput<$PrismaModel>
    in?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeGroupWithAggregatesFilter<$PrismaModel> | $Enums.AgeGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeGroupFilter<$PrismaModel>
    _max?: NestedEnumAgeGroupFilter<$PrismaModel>
  }

  export type NestedEnumRegionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel>
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    not?: NestedEnumRegionWithAggregatesFilter<$PrismaModel> | $Enums.Region
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegionFilter<$PrismaModel>
    _max?: NestedEnumRegionFilter<$PrismaModel>
  }

  export type NestedEnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
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

  export type NestedEnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ModelsCreateWithoutCarsInput = {
    year: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelsUncheckedCreateWithoutCarsInput = {
    id?: number
    year: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelsCreateOrConnectWithoutCarsInput = {
    where: ModelsWhereUniqueInput
    create: XOR<ModelsCreateWithoutCarsInput, ModelsUncheckedCreateWithoutCarsInput>
  }

  export type ManufacterersCreateWithoutCarsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManufacterersUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManufacterersCreateOrConnectWithoutCarsInput = {
    where: ManufacterersWhereUniqueInput
    create: XOR<ManufacterersCreateWithoutCarsInput, ManufacterersUncheckedCreateWithoutCarsInput>
  }

  export type ContractCreateWithoutCarInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutContractsInput
    meetings?: MeetingCreateNestedManyWithoutContractInput
    documents?: ContractDocumentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCarInput = {
    id?: number
    customerId: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutContractInput
    documents?: ContractDocumentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCarInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput>
  }

  export type ContractCreateManyCarInputEnvelope = {
    data: ContractCreateManyCarInput | ContractCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type ModelsUpsertWithoutCarsInput = {
    update: XOR<ModelsUpdateWithoutCarsInput, ModelsUncheckedUpdateWithoutCarsInput>
    create: XOR<ModelsCreateWithoutCarsInput, ModelsUncheckedCreateWithoutCarsInput>
    where?: ModelsWhereInput
  }

  export type ModelsUpdateToOneWithWhereWithoutCarsInput = {
    where?: ModelsWhereInput
    data: XOR<ModelsUpdateWithoutCarsInput, ModelsUncheckedUpdateWithoutCarsInput>
  }

  export type ModelsUpdateWithoutCarsInput = {
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelsUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacterersUpsertWithoutCarsInput = {
    update: XOR<ManufacterersUpdateWithoutCarsInput, ManufacterersUncheckedUpdateWithoutCarsInput>
    create: XOR<ManufacterersCreateWithoutCarsInput, ManufacterersUncheckedCreateWithoutCarsInput>
    where?: ManufacterersWhereInput
  }

  export type ManufacterersUpdateToOneWithWhereWithoutCarsInput = {
    where?: ManufacterersWhereInput
    data: XOR<ManufacterersUpdateWithoutCarsInput, ManufacterersUncheckedUpdateWithoutCarsInput>
  }

  export type ManufacterersUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacterersUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutCarInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCarInput, ContractUncheckedUpdateWithoutCarInput>
    create: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCarInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCarInput, ContractUncheckedUpdateWithoutCarInput>
  }

  export type ContractUpdateManyWithWhereWithoutCarInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutCarInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: IntFilter<"Contract"> | number
    carId?: IntFilter<"Contract"> | number
    customerId?: IntFilter<"Contract"> | number
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    resolutionDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    contractPrice?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type CarCreateWithoutManufacturersInput = {
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    model: ModelsCreateNestedOneWithoutCarsInput
    contracts?: ContractCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutManufacturersInput = {
    id?: number
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: number
    contracts?: ContractUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutManufacturersInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutManufacturersInput, CarUncheckedCreateWithoutManufacturersInput>
  }

  export type CarCreateManyManufacturersInputEnvelope = {
    data: CarCreateManyManufacturersInput | CarCreateManyManufacturersInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutManufacturersInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutManufacturersInput, CarUncheckedUpdateWithoutManufacturersInput>
    create: XOR<CarCreateWithoutManufacturersInput, CarUncheckedCreateWithoutManufacturersInput>
  }

  export type CarUpdateWithWhereUniqueWithoutManufacturersInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutManufacturersInput, CarUncheckedUpdateWithoutManufacturersInput>
  }

  export type CarUpdateManyWithWhereWithoutManufacturersInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutManufacturersInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: IntFilter<"Car"> | number
    carNumber?: StringFilter<"Car"> | string
    type?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    mileage?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    explanation?: StringNullableFilter<"Car"> | string | null
    accidentCount?: IntNullableFilter<"Car"> | number | null
    accidentDetails?: StringNullableFilter<"Car"> | string | null
    status?: EnumVehicleStatusFilter<"Car"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    modelId?: IntFilter<"Car"> | number
    manufacturerId?: IntFilter<"Car"> | number
  }

  export type CarCreateWithoutModelInput = {
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    manufacturers: ManufacterersCreateNestedOneWithoutCarsInput
    contracts?: ContractCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutModelInput = {
    id?: number
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    manufacturerId: number
    contracts?: ContractUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutModelInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutModelInput, CarUncheckedCreateWithoutModelInput>
  }

  export type CarCreateManyModelInputEnvelope = {
    data: CarCreateManyModelInput | CarCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutModelInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutModelInput, CarUncheckedUpdateWithoutModelInput>
    create: XOR<CarCreateWithoutModelInput, CarUncheckedCreateWithoutModelInput>
  }

  export type CarUpdateWithWhereUniqueWithoutModelInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutModelInput, CarUncheckedUpdateWithoutModelInput>
  }

  export type CarUpdateManyWithWhereWithoutModelInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutModelInput>
  }

  export type ContractCreateWithoutCustomerInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractsInput
    meetings?: MeetingCreateNestedManyWithoutContractInput
    documents?: ContractDocumentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCustomerInput = {
    id?: number
    carId: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutContractInput
    documents?: ContractDocumentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput>
  }

  export type ContractCreateManyCustomerInputEnvelope = {
    data: ContractCreateManyCustomerInput | ContractCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutCustomersInput = {
    name: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCustomersInput = {
    id?: number
    name: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCustomersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCustomersInput, CompanyUncheckedCreateWithoutCustomersInput>
  }

  export type ContractUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCustomerInput, ContractUncheckedUpdateWithoutCustomerInput>
    create: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCustomerInput, ContractUncheckedUpdateWithoutCustomerInput>
  }

  export type ContractUpdateManyWithWhereWithoutCustomerInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CompanyUpsertWithoutCustomersInput = {
    update: XOR<CompanyUpdateWithoutCustomersInput, CompanyUncheckedUpdateWithoutCustomersInput>
    create: XOR<CompanyCreateWithoutCustomersInput, CompanyUncheckedCreateWithoutCustomersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCustomersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCustomersInput, CompanyUncheckedUpdateWithoutCustomersInput>
  }

  export type CompanyUpdateWithoutCustomersInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CarCreateWithoutContractsInput = {
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    model: ModelsCreateNestedOneWithoutCarsInput
    manufacturers: ManufacterersCreateNestedOneWithoutCarsInput
  }

  export type CarUncheckedCreateWithoutContractsInput = {
    id?: number
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: number
    manufacturerId: number
  }

  export type CarCreateOrConnectWithoutContractsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutContractsInput, CarUncheckedCreateWithoutContractsInput>
  }

  export type CustomerCreateWithoutContractsInput = {
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo?: string | null
    contractCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Company?: CompanyCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutContractsInput = {
    id?: number
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo?: string | null
    contractCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: number | null
  }

  export type CustomerCreateOrConnectWithoutContractsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
  }

  export type MeetingCreateWithoutContractInput = {
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    alarms?: AlarmCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutContractInput = {
    id?: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    alarms?: AlarmUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutContractInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutContractInput, MeetingUncheckedCreateWithoutContractInput>
  }

  export type MeetingCreateManyContractInputEnvelope = {
    data: MeetingCreateManyContractInput | MeetingCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ContractDocumentCreateWithoutContractInput = {
    fileName: string
    filePath: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractDocumentUncheckedCreateWithoutContractInput = {
    id?: number
    fileName: string
    filePath: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractDocumentCreateOrConnectWithoutContractInput = {
    where: ContractDocumentWhereUniqueInput
    create: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput>
  }

  export type ContractDocumentCreateManyContractInputEnvelope = {
    data: ContractDocumentCreateManyContractInput | ContractDocumentCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithoutContractsInput = {
    update: XOR<CarUpdateWithoutContractsInput, CarUncheckedUpdateWithoutContractsInput>
    create: XOR<CarCreateWithoutContractsInput, CarUncheckedCreateWithoutContractsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutContractsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutContractsInput, CarUncheckedUpdateWithoutContractsInput>
  }

  export type CarUpdateWithoutContractsInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ModelsUpdateOneRequiredWithoutCarsNestedInput
    manufacturers?: ManufacterersUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: IntFieldUpdateOperationsInput | number
    manufacturerId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerUpsertWithoutContractsInput = {
    update: XOR<CustomerUpdateWithoutContractsInput, CustomerUncheckedUpdateWithoutContractsInput>
    create: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutContractsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutContractsInput, CustomerUncheckedUpdateWithoutContractsInput>
  }

  export type CustomerUpdateWithoutContractsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Company?: CompanyUpdateOneWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MeetingUpsertWithWhereUniqueWithoutContractInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutContractInput, MeetingUncheckedUpdateWithoutContractInput>
    create: XOR<MeetingCreateWithoutContractInput, MeetingUncheckedCreateWithoutContractInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutContractInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutContractInput, MeetingUncheckedUpdateWithoutContractInput>
  }

  export type MeetingUpdateManyWithWhereWithoutContractInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutContractInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: IntFilter<"Meeting"> | number
    date?: DateTimeFilter<"Meeting"> | Date | string
    contractId?: IntFilter<"Meeting"> | number
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
  }

  export type ContractDocumentUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractDocumentWhereUniqueInput
    update: XOR<ContractDocumentUpdateWithoutContractInput, ContractDocumentUncheckedUpdateWithoutContractInput>
    create: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput>
  }

  export type ContractDocumentUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractDocumentWhereUniqueInput
    data: XOR<ContractDocumentUpdateWithoutContractInput, ContractDocumentUncheckedUpdateWithoutContractInput>
  }

  export type ContractDocumentUpdateManyWithWhereWithoutContractInput = {
    where: ContractDocumentScalarWhereInput
    data: XOR<ContractDocumentUpdateManyMutationInput, ContractDocumentUncheckedUpdateManyWithoutContractInput>
  }

  export type ContractDocumentScalarWhereInput = {
    AND?: ContractDocumentScalarWhereInput | ContractDocumentScalarWhereInput[]
    OR?: ContractDocumentScalarWhereInput[]
    NOT?: ContractDocumentScalarWhereInput | ContractDocumentScalarWhereInput[]
    id?: IntFilter<"ContractDocument"> | number
    contractId?: IntFilter<"ContractDocument"> | number
    fileName?: StringFilter<"ContractDocument"> | string
    filePath?: StringFilter<"ContractDocument"> | string
    fileSize?: IntFilter<"ContractDocument"> | number
    createdAt?: DateTimeFilter<"ContractDocument"> | Date | string
    updatedAt?: DateTimeFilter<"ContractDocument"> | Date | string
  }

  export type ContractCreateWithoutMeetingsInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractsInput
    customer: CustomerCreateNestedOneWithoutContractsInput
    documents?: ContractDocumentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutMeetingsInput = {
    id?: number
    carId: number
    customerId: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ContractDocumentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutMeetingsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutMeetingsInput, ContractUncheckedCreateWithoutMeetingsInput>
  }

  export type AlarmCreateWithoutMeetingInput = {
    alarmAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmUncheckedCreateWithoutMeetingInput = {
    id?: number
    alarmAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmCreateOrConnectWithoutMeetingInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutMeetingInput, AlarmUncheckedCreateWithoutMeetingInput>
  }

  export type AlarmCreateManyMeetingInputEnvelope = {
    data: AlarmCreateManyMeetingInput | AlarmCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type ContractUpsertWithoutMeetingsInput = {
    update: XOR<ContractUpdateWithoutMeetingsInput, ContractUncheckedUpdateWithoutMeetingsInput>
    create: XOR<ContractCreateWithoutMeetingsInput, ContractUncheckedCreateWithoutMeetingsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutMeetingsInput, ContractUncheckedUpdateWithoutMeetingsInput>
  }

  export type ContractUpdateWithoutMeetingsInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    documents?: ContractDocumentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ContractDocumentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type AlarmUpsertWithWhereUniqueWithoutMeetingInput = {
    where: AlarmWhereUniqueInput
    update: XOR<AlarmUpdateWithoutMeetingInput, AlarmUncheckedUpdateWithoutMeetingInput>
    create: XOR<AlarmCreateWithoutMeetingInput, AlarmUncheckedCreateWithoutMeetingInput>
  }

  export type AlarmUpdateWithWhereUniqueWithoutMeetingInput = {
    where: AlarmWhereUniqueInput
    data: XOR<AlarmUpdateWithoutMeetingInput, AlarmUncheckedUpdateWithoutMeetingInput>
  }

  export type AlarmUpdateManyWithWhereWithoutMeetingInput = {
    where: AlarmScalarWhereInput
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyWithoutMeetingInput>
  }

  export type AlarmScalarWhereInput = {
    AND?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
    OR?: AlarmScalarWhereInput[]
    NOT?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
    id?: IntFilter<"Alarm"> | number
    meetingId?: IntFilter<"Alarm"> | number
    alarmAt?: DateTimeFilter<"Alarm"> | Date | string
    createdAt?: DateTimeFilter<"Alarm"> | Date | string
    updatedAt?: DateTimeFilter<"Alarm"> | Date | string
  }

  export type MeetingCreateWithoutAlarmsInput = {
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutAlarmsInput = {
    id?: number
    date: Date | string
    contractId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutAlarmsInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutAlarmsInput, MeetingUncheckedCreateWithoutAlarmsInput>
  }

  export type MeetingUpsertWithoutAlarmsInput = {
    update: XOR<MeetingUpdateWithoutAlarmsInput, MeetingUncheckedUpdateWithoutAlarmsInput>
    create: XOR<MeetingCreateWithoutAlarmsInput, MeetingUncheckedCreateWithoutAlarmsInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutAlarmsInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutAlarmsInput, MeetingUncheckedUpdateWithoutAlarmsInput>
  }

  export type MeetingUpdateWithoutAlarmsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutAlarmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutUsersInput = {
    name: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CustomerCreateWithoutCompanyInput = {
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo?: string | null
    contractCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo?: string | null
    contractCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput>
  }

  export type CustomerCreateManyCompanyInputEnvelope = {
    data: CustomerCreateManyCompanyInput | CustomerCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCompanyInput = {
    name: string
    email: string
    password: string
    employeeNumber: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    email: string
    password: string
    employeeNumber: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutCompanyInput, CustomerUncheckedUpdateWithoutCompanyInput>
    create: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutCompanyInput, CustomerUncheckedUpdateWithoutCompanyInput>
  }

  export type CustomerUpdateManyWithWhereWithoutCompanyInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    gender?: EnumGenderTypeFilter<"Customer"> | $Enums.GenderType
    phoneNumber?: StringFilter<"Customer"> | string
    ageGroup?: EnumAgeGroupFilter<"Customer"> | $Enums.AgeGroup
    region?: EnumRegionFilter<"Customer"> | $Enums.Region
    memo?: StringNullableFilter<"Customer"> | string | null
    contractCount?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    companyId?: IntNullableFilter<"Customer"> | number | null
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    employeeNumber?: StringFilter<"User"> | string
    companyId?: IntFilter<"User"> | number
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ContractCreateWithoutDocumentsInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractsInput
    customer: CustomerCreateNestedOneWithoutContractsInput
    meetings?: MeetingCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutDocumentsInput = {
    id?: number
    carId: number
    customerId: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutDocumentsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutDocumentsInput, ContractUncheckedCreateWithoutDocumentsInput>
  }

  export type ContractUpsertWithoutDocumentsInput = {
    update: XOR<ContractUpdateWithoutDocumentsInput, ContractUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ContractCreateWithoutDocumentsInput, ContractUncheckedCreateWithoutDocumentsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutDocumentsInput, ContractUncheckedUpdateWithoutDocumentsInput>
  }

  export type ContractUpdateWithoutDocumentsInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    meetings?: MeetingUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyCarInput = {
    id?: number
    customerId: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutCarInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    meetings?: MeetingUpdateManyWithoutContractNestedInput
    documents?: ContractDocumentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutContractNestedInput
    documents?: ContractDocumentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyManufacturersInput = {
    id?: number
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: number
  }

  export type CarUpdateWithoutManufacturersInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ModelsUpdateOneRequiredWithoutCarsNestedInput
    contracts?: ContractUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutManufacturersInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: IntFieldUpdateOperationsInput | number
    contracts?: ContractUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutManufacturersInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type CarCreateManyModelInput = {
    id?: number
    carNumber: string
    type: $Enums.CarType
    mileage: number
    price: number
    explanation?: string | null
    accidentCount?: number | null
    accidentDetails?: string | null
    status: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    manufacturerId: number
  }

  export type CarUpdateWithoutModelInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturers?: ManufacterersUpdateOneRequiredWithoutCarsNestedInput
    contracts?: ContractUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturerId?: IntFieldUpdateOperationsInput | number
    contracts?: ContractUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentCount?: NullableIntFieldUpdateOperationsInput | number | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturerId?: IntFieldUpdateOperationsInput | number
  }

  export type ContractCreateManyCustomerInput = {
    id?: number
    carId: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutCustomerInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractsNestedInput
    meetings?: MeetingUpdateManyWithoutContractNestedInput
    documents?: ContractDocumentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutContractNestedInput
    documents?: ContractDocumentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateManyContractInput = {
    id?: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractDocumentCreateManyContractInput = {
    id?: number
    fileName: string
    filePath: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateWithoutContractInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: AlarmUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: AlarmUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUpdateWithoutContractInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmCreateManyMeetingInput = {
    id?: number
    alarmAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmUpdateWithoutMeetingInput = {
    alarmAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    alarmAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmUncheckedUpdateManyWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    alarmAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyCompanyInput = {
    id?: number
    name: string
    email: string
    gender: $Enums.GenderType
    phoneNumber: string
    ageGroup: $Enums.AgeGroup
    region: $Enums.Region
    memo?: string | null
    contractCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: number
    name: string
    email: string
    password: string
    employeeNumber: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderTypeFieldUpdateOperationsInput | $Enums.GenderType
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: EnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup
    region?: EnumRegionFieldUpdateOperationsInput | $Enums.Region
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    contractCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
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