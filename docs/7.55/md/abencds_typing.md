  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - Common DDL Elements](javascript:call_link\('abencds_ddl_common_elements.htm'\)) → 

CDS DDL - typing

Syntax

... dtype *|* data\_element  ...

Effect

Types elements or parameters of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). The following is typed:

-   Elements of CDS entities:

-   Elements of the element list [element\_list](javascript:call_link\('abencds_f1_return_list.htm'\)) in a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   Elements of the element list [element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) in a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").

-   Elements of the element list [element\_list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

-   Elements of the element list [element\_list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) in a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").

-   Input parameters of CDS entities

-   Input parameters of the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v2.htm'\)) in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")

-   Input parameters of the parameter list [parameter\_list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) in a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   Input parameters of the parameter list [parameter\_list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

-   Input parameters of the parameter list [parameter\_list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) in an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

-   Input parameters of the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v1.htm'\)) in a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

Typing can be specified either directly with dtype using a [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary, or using the name of a data element data\_element. The table below shows the possible options for dtype and their meanings. The last two columns indicate whether the typing is possible for elements or input parameters.

dtype

Built-In Data Type in ABAP Dictionary

Element

Parameter

abap.accp(6)

[ACCP](javascript:call_link\('abenddic_builtin_types.htm'\)) (only in a table function)

x

\-

abap.char( len )

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

x

x

abap.clnt*\[*(3)*\]*

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.cuky*\[*(5)*\]*

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.curr(len,dec)

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

x

x

abap.d16n*\[*(16)*\]*

[DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.d34n*\[*(34)*\]*

[DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.datn*\[*(8)*\]*

[DATN](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.dats*\[*(8)*\]*

[DATS](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.dec(len,dec)

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

x

x

abap.fltp*\[*(16,16)*\]*

[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.geom\_ewkb

[GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\))

x

\-

abap.int1*\[*(3)*\]*

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.int2*\[*(5)*\]*

[INT2](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.int4*\[*(10)*\]*

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.int8*\[*(19)*\]*

[INT8](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.lang*\[*(1)*\]*

[LANG](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.numc( len )

[NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

x

x

abap.quan(len,dec)

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

x

x

abap.raw(len)

[RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

x

x

abap.rawstring

[RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\))

x

\-

abap.sstring(len)

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

x

x

abap.string

[STRING](javascript:call_link\('abenddic_builtin_types.htm'\))

x

\-

abap.timn*\[*(6)*\]*

[TIMN](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.tims*\[*(6)*\]*

[TIMS](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

abap.unit*\[*(2*|*3)*\]*

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 2 or 3 (standard length)

x

x

abap.utcl*\[*(27)*\]*

[UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\))

x

x

With len and dec, values must be specified for the length and decimal places of the respective generic types. The values specified here in parentheses must be within the value ranges allowed by ABAP Dictionary. For data types with fixed lengths and decimal places, it is possible, but not mandatory to specify the predefined value for length and decimal places. The exception in this regard is abap.accp: this type has the predefined length of 6, which must always be specified in brackets. For data\_element, every ABAP Dictionary [data element](javascript:call_link\('abenddic_data_elements.htm'\)) whose built-in type is listed in the table above can be specified.

Hint

Currently, only elementary data types are supported, but no structured or tabular parameters.

Example

The following CDS view entity has two input parameters. p\_date is typed with data element DEMODATE and p\_num is typed with the built-in data type DEC with a specified length and number of decimal places.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_PARAMETER\_TYPE\_VE
  with parameters
    p\_date :demodate,
    p\_num  :abap.dec( 10, 3 )
  as select from
    demo\_expressions
    {
      key id,
          $parameters.p\_date       as col\_date,
          $parameters.p\_num + dec3 as col\_num
    };

The program DEMO\_CDS\_PARAMETER\_TYPE accesses the view using the following SELECT statement:

SELECT id, col\_date, col\_num
       FROM demo\_cds\_parameter\_type\_ve( p\_date = @sy-datlo,
                                        p\_num  = '1.234' )
       INTO TABLE @DATA(result).