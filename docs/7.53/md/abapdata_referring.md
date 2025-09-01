  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

DATA - TYPE, LIKE

[Quick Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA var *{* *{*TYPE *\[*LINE OF*\]* type*}*
         *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*
         [*\[*VALUE  val*|**{*IS INITIAL*}**\]*](javascript:call_link\('abapdata_options.htm'\))
         [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

When a type data type or a dobj data object is specified, the data type of variable var is already fully defined before the declaration. The syntax and meaning of the additions TYPE and LIKE are exactly the same as the definition of the data types with [TYPES](javascript:call_link\('abaptypes_referring.htm'\)), except for the following:

-   In the case of DATA, a standard table type with [generic primary table key](javascript:call_link\('abaptypes_keydef.htm'\)) can be specified after TYPE. This creates a bound table type with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry").

-   In the case of DATA, a table type can be specified after TYPE that is generic with respect to its [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") (thanks to the addition [WITH FURTHER SECONDARY KEYS](javascript:call_link\('abaptypes_keydef.htm'\))). This type attribute is not relevant for the declared data object.

If TYPE and LIKE are not specified, a data object with the bound data type c of length 1 is created.

Notes

-   For internal tables, the declaration of the primary table key as a [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) can be critical for various reasons. It is best to define the key fields explicitly instead. In the statement above, therefore, check whether a table with standard key is created by mistake if using a generic standard table type.
    
-   If an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") is specified after TYPE or a data object with this type is specified after LIKE, an [enumerated variable](javascript:call_link\('abapdata_enum.htm'\)) is created.
    

Example

Uses the TYPE addition to declare a work area for a [SELECT](javascript:call_link\('abapselect.htm'\)) statement. Uses the LIKE addition to declare a further data objects of the same type.

DATA wa TYPE scarr.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'BA'
       INTO @wa.
DATA buffer LIKE wa.
buffer = wa.