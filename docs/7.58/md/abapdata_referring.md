  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20TYPE%2C%20LIKE%2C%20ABAPDATA_REFERRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, TYPE, LIKE

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA var *{* *{*TYPE *\[*LINE OF*\]* type*}*
         *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*
         [*\[*VALUE  val*|**{*IS INITIAL*}**\]*](javascript:call_link\('abapdata_options.htm'\))
         [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

When a type data type or a dobj data object is specified, the data type of variable var is already fully defined before the declaration. The syntax and meaning of the additions TYPE and LIKE are exactly the same as the definition of the data types with [TYPES](javascript:call_link\('abaptypes_referring.htm'\)), with the following exceptions:

-   In the case of DATA, a standard table type with [generic primary table key](javascript:call_link\('abaptypes_keydef.htm'\)) can be specified after TYPE. This creates a bound table type with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry").
-   In the case of DATA, a table type can be specified after TYPE that is generic with respect to its [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") because of the explicit addition [WITH FURTHER SECONDARY KEYS](javascript:call_link\('abaptypes_keydef.htm'\)). This type property is not relevant for the declared data object.

If neither TYPE nor LIKE is specified, a data object with the bound data type c of length 1 is created.

Hints

-   For internal tables, the declaration of the primary table key as a [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) can be critical for various reasons. It is best to define the key fields explicitly instead. For this reason, in the case of the statement above, it must be ensured that a table with a standard key is not created by mistake if a generic standard table type is used.
-   If an [enumerated type](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry") is specified after TYPE or a data object with this type is specified after LIKE, an [enumerated variable](javascript:call_link\('abapdata_enum.htm'\)) is created.
-   When referring to data types defined in the ABAP Dictionary, the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") of elementary data types is not the initial value assigned to the [built-in dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) and is the initial value of the mapped [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) instead.

Example

Use of the TYPE addition to declare a work area for a [SELECT](javascript:call_link\('abapselect.htm'\)) statement. Use of the LIKE addition to declare a further data object of the same type.

DATA wa TYPE scarr.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'BA'
       INTO @wa.
DATA buffer LIKE wa.
buffer = wa.