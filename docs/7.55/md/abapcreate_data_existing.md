  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) → 

CREATE DATA, TYPE, LIKE

[Short Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax

CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                 *{* *{*TYPE *\[*LINE OF*\]* *{*type*|*(name)*}**}*
                 *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*.

Effect

The type of the created data object is defined by a type or data object specification.

-   For type, any data type can be specified from the ABAP Dictionary, particularly the DDIC structure of a DDIC database table , a [DDIC view](javascript:call_link\('abendictionary_view_glosry.htm'\) "Glossary Entry"), or a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity, or a public data type of a global class, or any data type of the same program already defined using TYPES and that is either more specific than or identical to the static type of dref. Alternatively, a character-like data object name, which is not case-sensitive, can be specified in parentheses that contains the name of the existing data type when the statement is executed. The name in name can also be an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"). If a standard table type with a generic primary table key is specified after TYPE, a new [bound](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") table type with standard key is created and used.

-   A data object that is [visible](javascript:call_link\('abenlifetime_and_visibility.htm'\)) at this point can be [specified](javascript:call_link\('abendata_objects_usage_reading.htm'\)) for dobj. The generated data object inherits the current data type. If dobj is specified as a formal parameter or field symbol, it can be completely or partially generic. When the statement CREATE DATA is executed, a data object must be bound to a generically typed field symbol or parameter and its type is used. In the case of a completely typed field symbol or parameter, the declared type is used and no data object must be bound.

The optional addition LINE OF can be used if type or the name in name is a table type, or if dobj is an internal table. As a result, the generated data object inherits the properties of the line type of the internal table.

Hints

-   The data objects which can be referred to using LIKE include the public attributes of global classes.
    

-   If a type of another program is specified using an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") in name, this program is loaded into a new [additional program group](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry") or into the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"), depending on the program type, if it was not already loaded.
    

-   If an anonymous data object is created with an [enumerated type](javascript:call_link\('abaptypes_enum.htm'\)), the same rules apply to this object as to every other data object of this type.
    

-   If a data type type is used, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) acts like the statement CREATE DATA dref TYPE type and can be used in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The dynamic specification of name is not possible here.
    

Example

Creation of an anonymous data object of type SCARR. The static data type of the data reference variable is generic. It can only be dereferenced and used in operand positions by an assignment to a field symbol.

DATA dref TYPE REF TO data.
CREATE DATA dref TYPE scarr.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @<fs>.
ASSIGN COMPONENT 'CARRID'   OF STRUCTURE <fs> TO
FIELD-SYMBOL(<fs1>).
ASSIGN COMPONENT 'CARRNAME' OF STRUCTURE <fs> TO
FIELD-SYMBOL(<fs2>).
cl\_demo\_output=>display( |{ <fs1> }, { <fs2> }| ).

Executable Example

[Creating Structured Data Objects](javascript:call_link\('abencreate_structured_data_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Creating Structured Data Objects](javascript:call_link\('abencreate_structured_data_abexa.htm'\))