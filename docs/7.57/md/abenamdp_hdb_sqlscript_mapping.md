---
title: "AMDP - Mapping of ABAP Types to SQLScript"
description: |
  As shown in the following tables, the elementary ABAP types are mapped to the appropriate types in SQLScript. These include: -   Interface parameters of an AMDP method -   References to ABAP types using the AMDP macro(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_macro_glosry
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_hdb_sqlscript_mapping.htm"
abapFile: "abenamdp_hdb_sqlscript_mapping.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenamdp", "hdb", "sqlscript", "mapping"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_methods.htm) →  [METHOD, BY DATABASE PROCEDURE, FUNCTION, GRAPH WORKSPACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod_by_db_proc.htm) →  [AMDP - SQLScript for the SAP HANA Database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_hdb_sqlscript.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Mapping of ABAP Types to SQLScript, ABENAMDP_HDB_SQLSCRIPT_MAPPING, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

AMDP - Mapping of ABAP Types to SQLScript

As shown in the following tables, the elementary ABAP types are mapped to the appropriate types in SQLScript. These include:

-   Interface parameters of an AMDP method
-   References to ABAP types using the [AMDP macro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_abap_types.htm)

The tables distinguish parameters that reference a type defined in ABAP from those that reference a [built-in type in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). No parameters or type references can be defined for SQLScript types that are not listed here.

-   [Mapping with Reference to Types Defined in ABAP](#abenamdp-hdb-sqlscript-mapping-1-------mapping-with-reference-to-types-defined-in-abap-dictionary---@ITOC@@ABENAMDP_HDB_SQLSCRIPT_MAPPING_2)

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

The [built-in types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) are mapped like the associated ABAP types, with the following exceptions.

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