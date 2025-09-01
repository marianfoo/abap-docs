  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - typing

Syntax

... dtype *|* data\_element  ...

Effect

Types elements or parameters of [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry"). The following is typed:

-   Elements of CDS entities:

-   Elements of the element list [element\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list.htm) in a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry").

-   Elements of the element list [element\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_element_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

-   Input parameters of CDS entities

-   Input parameters [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) in a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) in a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry").

-   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

-   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) in an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

A typing can be specified either directly with dtype (using a [built-in data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) in ABAP Dictionary) or using the name of a data element data\_element. The table below shows the possible options for dtype and their meanings. The last two columns indicate whether the typing is possible for elements or input parameters.

dtype

Built-In Data Type in ABAP Dictionary

Element

Parameter

abap.accp(6)

[ACCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) (only in a table function)

x

\-

abap.char( len )

[CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length len

x

x

abap.clnt*\[*(3)*\]*

[CLNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.cuky*\[*(5)*\]*

[CUKY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.curr(len,dec)

[CURR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length len and with dec decimal places

x

x

abap.d16n*\[*(16)*\]*

[DECFLOAT16](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.d34n*\[*(34)*\]*

[DECFLOAT34](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.datn*\[*(8)*\]*

[DATN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.dats*\[*(8)*\]*

[DATS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.dec(len,dec)

[DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length len and with dec decimal places

x

x

abap.fltp*\[*(16,16)*\]*

[FLTP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.geom\_ewkb

[GEOM\_EWKB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

\-

abap.int1*\[*(3)*\]*

[INT1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.int2*\[*(5)*\]*

[INT2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.int4*\[*(10)*\]*

[INT4](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.int8*\[*(19)*\]*

[INT8](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.lang*\[*(1)*\]*

[LANG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.numc( len )

[NUMC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length len

x

x

abap.quan(len,dec)

[QUAN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length len and with dec decimal places

x

x

abap.raw(len)

[RAW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length len

x

x

abap.rawstring

[RAWSTRING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

\-

abap.sstring(len)

[SSTRING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length len

x

x

abap.string

[STRING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

\-

abap.timn*\[*(6)*\]*

[TIMN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.tims*\[*(6)*\]*

[TIMS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

abap.unit*\[*(2*|*3)*\]*

[UNIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length 2 or 3 (standard length)

x

x

abap.utcl*\[*(27)*\]*

[UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

x

x

In len and dec, specific values must be specified for the length and decimal places (with respect to the relevant generic types). The values specified here in parentheses must be within the value ranges permitted by ABAP Dictionary. The predefined values can be specified for types with fixed lengths and decimal places, but this is not mandatory (except for abap.accp). For data\_element, every ABAP Dictionary [data element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_elements.htm) whose built-in type is listed in the table above can be specified.

Note

Currently no structured or tabular parameters are supported, only elementary data types.

Example

The following CDS view has two input parameters. p\_date is typed with data elementDEMODATE and p\_num is typed with the built-in data type DEC with a specified length and number of decimal places.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PTYPE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_parameter\_type
with parameters
p\_date :demodate,
p\_num :abap.dec( 10, 3 )
as select from
demo\_expressions
{
key id,
:p\_date as col\_date,
:p\_num + dec3 as col\_num
};    

The program DEMO\_CDS\_PARAMETER\_TYPE accesses the view using the following SELECT statement:

SELECT id, col\_date, col\_num
       FROM demo\_cds\_parameter\_type( p\_date = @sy-datlo,
                                     p\_num  = '1.234' )
       INTO TABLE @DATA(result).