  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - typing

Syntax

... dtype *|* data\_element  ...

Effect

Types elements or parameters of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). The following is typed:

-   Input parameters [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

-   Input parameters of the parameter list [parameter\_list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) in a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   Elements of the element list [element\_list](javascript:call_link\('abencds_f1_return_list.htm'\)) in a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   Input parameters of the parameter list [parameter\_list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) in an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

-   Elements of the element list [element\_list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

A typing can be specified either directly with dtype (using a [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary) or using the name of a data element data\_element. The table below shows the possible options for dtype and their meanings.

dtype

Built-In Data Type in ABAP Dictionary

abap.accp(6)

[ACCP](javascript:call_link\('abenddic_builtin_types.htm'\)), only in the element list of a table function

abap.char( len )

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

abap.clnt*\[*(3)*\]*

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.cuky(5)

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 5

abap.curr(len,dec)

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

abap.dats*\[*(8)*\]*

[DATS](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.dec(len,dec)

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

abap.fltp*\[*(16,16)*\]*

[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int1*\[*(3)*\]*

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int2*\[*(5)*\]*

[INT2](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int4*\[*(10)*\]*

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int8*\[*(19)*\]*

[INT8](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.lang*\[*(1)*\]*

[LANG](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.numc( len )

[NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

abap.quan(len,dec)

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and with dec decimal places

abap.raw(len)

[RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

abap.rawstring

[RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), only in an element list

abap.sstring(len)

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

abap.string

[STRING](javascript:call_link\('abenddic_builtin_types.htm'\)), only in an element list

abap.tims*\[*(6)*\]*

[TIMS](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.unit(3)

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 3

In len and dec, specific values must be specified for the length and decimal places (with respect to the relevant generic types). The values specified here in parentheses must be within the value ranges permitted by ABAP Dictionary. The predefined values can be specified for types with fixed lengths and decimal places, but this is not mandatory (except for abap.accp). For data\_element, every ABAP Dictionary [data element](javascript:call_link\('abenddic_data_elements.htm'\)) whose built-in type is listed in the table above can be specified.

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