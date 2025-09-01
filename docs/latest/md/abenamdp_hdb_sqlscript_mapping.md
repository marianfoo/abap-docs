  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm) →  [METHOD, BY DATABASE PROCEDURE, FUNCTION, GRAPH WORKSPACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm) →  [AMDP - SQLScript for the SAP HANA Database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_hdb_sqlscript.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Mapping%20of%20ABAP%20Types%20to%20SQLScript%2C%20ABENAMDP_HDB_SQLSCRIPT_MAPPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

AMDP - Mapping of ABAP Types to SQLScript

Elementary ABAP types are mapped to the appropriate types in SQLScript as shown in the following tables. The type mapping includes:

-   Interface parameters of an AMDP method
-   References to ABAP types using the [AMDP macro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abap_types.htm)

The tables distinguish parameters that reference a type defined in ABAP from those that reference a [built-in type in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). No parameters or type references can be defined for SQLScript types that are not listed here.

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

Not allowed for input/output parameters

n, length len

NVARCHAR, length len

A suitable casting to a numeric database type must be performed before calculations can be made in the database. Numeric results must be transformed back to the ABAP format.

Byte-Like Types

ABAP Type

HANA Type

Note

x, length len

VARBINARY, length len

\-

xstring

BLOB

Not allowed for input/output parameters

Date Types, Time Types, and Time Stamp Types

ABAP Type

HANA Type

Note

d

NVARCHAR, length 8

A casting to the DATE type of the database must be performed before date calculations can be made. SQLScript offers the built-in function to\_dats.

t

NVARCHAR, length 6

A casting to the TIME type of the database must be performed before time calculations can be made. SQLScript offers the built-in function to\_tims.

utclong

TIMESTAMP

\-

Mapping with Reference to Types Defined in ABAP Dictionary   

The [built-in types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) are mapped like the associated ABAP types, with the following exceptions.

Dictionary Type

HANA Type

Note

DECFLOAT16

SMALLDECIMAL

Recommended mapping

DECFLOAT34

DECIMAL

Recommended mapping

DF16\_DEC, length leng with dec decimal places

DECIMAL, length 2len-1 with dec decimal places

Value range on the database is smaller than in ABAP

DF34\_DEC, length leng with dec decimal places

DECIMAL, length 2len-1 with dec decimal places

Value range on the database is smaller than in ABAP

DF16\_SCL

\-

Obsolete, not supported

DF34\_SCL

\-

Obsolete, not supported

DATN

DATE

Recommended mapping

TIMN

TIME

Recommended mapping

GEOM\_EWKB

ST\_GEOMETRY

Recommended mapping

SSTRING, length len

NVARCHAR, length len

\-

Hint

In the recommended mappings, the ABAP type should be defined with reference to the built-in ABAP Dictionary type to define the more suitable HANA type.