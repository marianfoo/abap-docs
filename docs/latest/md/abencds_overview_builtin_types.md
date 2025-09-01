---
title: "ABAP CDS - Overview of Built-In DDIC Types That Can Be Used in ABAP CDS"
description: |
  The following table shows the built-in Dictionary types(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) that can be used in ABAP CDS and their notation in ABAP CDS. The third column indicates whether a data type can be used for typing(https://help.sap.
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_overview_builtin_types.htm"
abapFile: "abencds_overview_builtin_types.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "overview", "builtin"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_types.htm) →  [ABAP CDS - Using Built-In Data Types from ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Overview%20of%20Built-In%20DDIC%20Types%20That%20Can%20Be%20Used%20in%20ABAP%20CDS%2C%20ABENCDS_OVERVIEW_BUILTIN_TYPES%2C%20758%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Overview of Built-In DDIC Types That Can Be Used in ABAP CDS

The following table shows the [built-in Dictionary types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) that can be used in ABAP CDS and their notation in ABAP CDS. The third column indicates whether a data type can be used for [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) of a [CDS element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_glosry.htm "Glossary Entry"). The fourth column indicates whether a data type can be used for [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) of a [CDS parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_glosry.htm "Glossary Entry"). The fifth column indicates whether a data type can be used in a [cast expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm).

Notation

Built-In Data Type in ABAP Dictionary

Element Typing

Parameter Typing

Cast Target

abap.accp(6)

[ACCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) (only in a table function)

x

\-

\-

abap.char( len )

[CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len

x

x

x

abap.clnt*\[*(3)*\]*

[CLNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.cuky*\[*(5)*\]*

[CUKY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.curr(len,dec)

[CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len and with dec decimal places

x

x

x

abap.d16n*\[*(16)*\]*

[DECFLOAT16](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.d34n*\[*(34)*\]*

[DECFLOAT34](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.datn*\[*(8)*\]*

[DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.dats*\[*(8)*\]*

[DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.dec(len,dec)

[DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len and with dec decimal places

x

x

x

abap.fltp*\[*(16,16)*\]*

[FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.geom\_ewkb

[GEOM\_EWKB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

\-

\-

abap.int1*\[*(3)*\]*

[INT1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.int2*\[*(5)*\]*

[INT2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.int4*\[*(10)*\]*

[INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.int8*\[*(19)*\]*

[INT8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.lang*\[*(1)*\]*

[LANG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.numc( len )

[NUMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len

x

x

x

abap.quan(len,dec)

[QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len and with dec decimal places

x

x

x

abap.raw(len)

[RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len

x

x

\-

abap.rawstring

[RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

\-

\-

abap.sstring(len)

[SSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len

x

x

x

abap.string

[STRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

\-

\-

abap.timn*\[*(6)*\]*

[TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.tims*\[*(6)*\]*

[TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

abap.unit*\[*(2*|*3)*\]*

[UNIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length 2 or 3 (standard length)

x

x

x

abap.utcl*\[*(27)*\]*

[UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

x

x

x

len and dec must be used to specify values for the length and decimal places of the respective generic types. The values specified here in parentheses must be within the value ranges allowed by ABAP Dictionary. For data types with fixed lengths and decimal places, it is possible, but not mandatory to specify the predefined value for length and decimal places. The exception in this regard is abap.accp: this type has the predefined length of 6, which must always be specified in parentheses.

In [CDS simple types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry"), all of the data types listed above can be used for [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm) except for abap.accp and abap.fltp. The data type abap.accp is deprecated. Instead of abap.fltp, a [decimal floating point number type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecfloat_type_glosry.htm "Glossary Entry") can be used.