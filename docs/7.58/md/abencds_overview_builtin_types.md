  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Types](javascript:call_link\('abencds_data_types.htm'\)) →  [ABAP CDS - Using Built-In Data Types from ABAP Dictionary](javascript:call_link\('abencds_builtin_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Overview%20of%20Built-In%20DDIC%20Types%20That%20Can%20Be%20Used%20in%20ABAP%20CDS%2C%20ABENCDS_OVERVIEW_BUILTIN_TYPES%2C%20758%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Overview of Built-In DDIC Types That Can Be Used in ABAP CDS

The following table shows the [built-in Dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) that can be used in ABAP CDS and their notation in ABAP CDS. The third column indicates whether a data type can be used for [typing](javascript:call_link\('abencds_typing.htm'\)) of a [CDS element](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry"). The fourth column indicates whether a data type can be used for [typing](javascript:call_link\('abencds_typing.htm'\)) of a [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry"). The fifth column indicates whether a data type can be used in a [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)).

Notation

Built-In Data Type in ABAP Dictionary

Element Typing

Parameter Typing

Cast Target

abap.accp(6)

[ACCP](javascript:call_link\('abenddic_builtin_types.htm'\)) (only in a table function)

x

\-

\-

abap.char( len )

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

x

x

x

abap.clnt*\[*(3)*\]*

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.cuky*\[*(5)*\]*

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.curr(len,dec)

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

x

x

x

abap.d16n*\[*(16)*\]*

[DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.d34n*\[*(34)*\]*

[DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.datn*\[*(8)*\]*

[DATN](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.dats*\[*(8)*\]*

[DATS](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.dec(len,dec)

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

x

x

x

abap.fltp*\[*(16,16)*\]*

[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.geom\_ewkb

[GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\))

x

\-

\-

abap.int1*\[*(3)*\]*

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.int2*\[*(5)*\]*

[INT2](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.int4*\[*(10)*\]*

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.int8*\[*(19)*\]*

[INT8](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.lang*\[*(1)*\]*

[LANG](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.numc( len )

[NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

x

x

x

abap.quan(len,dec)

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

x

x

x

abap.raw(len)

[RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

x

x

\-

abap.rawstring

[RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\))

x

\-

\-

abap.sstring(len)

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

x

x

x

abap.string

[STRING](javascript:call_link\('abenddic_builtin_types.htm'\))

x

\-

\-

abap.timn*\[*(6)*\]*

[TIMN](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.tims*\[*(6)*\]*

[TIMS](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

abap.unit*\[*(2*|*3)*\]*

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 2 or 3 (standard length)

x

x

x

abap.utcl*\[*(27)*\]*

[UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

x

len and dec must be used to specify values for the length and decimal places of the respective generic types. The values specified here in parentheses must be within the value ranges allowed by ABAP Dictionary. For data types with fixed lengths and decimal places, it is possible, but not mandatory to specify the predefined value for length and decimal places. The exception in this regard is abap.accp: this type has the predefined length of 6, which must always be specified in parentheses.

In [CDS simple types](javascript:call_link\('abencds_simple_type_glosry.htm'\) "Glossary Entry"), all of the data types listed above can be used for [typing](javascript:call_link\('abencds_define_simple_type.htm'\)) except for abap.accp and abap.fltp. The data type abap.accp is deprecated. Instead of abap.fltp, a [decimal floating point number type](javascript:call_link\('abendecfloat_type_glosry.htm'\) "Glossary Entry") can be used.