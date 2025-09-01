  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) →  [METHOD - BY DATABASE PROCEDURE, FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\)) →  [AMDP - SQL Script for the SAP HANA Database](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\)) → 

AMDP - Mapping of ABAP Types to SQLScript

As shown in the following tables, the elementary ABAP types are mapped to the appropriate types in SQL Script. These include:

-   Interface parameters of a AMDP method

-   References to ABAP types via the [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [$ABAP.type](javascript:call_link\('abenamdp_abap_types.htm'\))

The tables distinguish parameters that reference a type defined in ABAP from those that reference a [predefined type in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types.htm'\)). No parameters or type references can be defined for SQL Script types that are not listed here.

-   [Mapping with Reference to Types Defined in ABAP](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_MAPPING_1)

-   [Mapping with Reference to Types Defined in ABAP Dictionary](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_MAPPING_2)

Mapping with Reference to Types Defined in ABAP

Numeric Types

ABAP Type

HANA Type

Note

b

SMALLINT

SMALLINT is a two byte integer with sign

s

SMALLINT

SMALLINT is a two byte integer with sign

i

INTEGER

\-

int8

BIGINT

\-

p, length leng with dec decimal places

DECIMAL, length 2len-1 with dec decimal places

\-

decfloat16

VARBINARY, length 8

Cannot be interpreted as a number in the database and no calculations can be performed

decfloat34

VARBINARY, length 16

Cannot be interpreted as a number in the database and no calculations can be performed

f

DOUBLE

\-

Character-Like Types

ABAP Type

HANA Type

Note

c, length len

NVARCHAR, length len

\-

string

NCLOB

Not permitted for input/output parameters

n, length len

NVARCHAR, length len

A suitable casting to a numeric database type must be performed before calculations can be made in the database. Numeric results must be transformed back to the ABAP format.

d

NVARCHAR, length 8

A casting to the DATE type of the database must be performed before date calculations can be made. SQL Script offers the predefined function to\_dats.

t

NVARCHAR, length 6

A casting to the TIME type of the database must be performed before time calculations can be made. SQL Script offers the predefined function to\_tims.

Byte-Like Types

ABAP Type

HANA Type

Note

x, length len

VARBINARY, length len

\-

xstring

BLOB

Not permitted for input/output parameters

Mapping with Reference to Types Defined in ABAP Dictionary

The [predefined types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types.htm'\)) are mapped like the associated ABAP types, with the following exceptions.

Dictionary Type

HANA Type

Note

DF16\_DEC, length leng with dec decimal places

DECIMAL, length 2len-1 with dec decimal places

Value range on the database is less than in ABAP

DF34\_DEC, length leng with dec decimal places

DECIMAL, length 2len-1 with dec decimal places

Value range on the database is less than in ABAP

DF16\_SCL

\-

Obsolete, not supported

DF34\_SCL

\-

Obsolete, not supported

SSTRING, length len

NVARCHAR, length len

\-