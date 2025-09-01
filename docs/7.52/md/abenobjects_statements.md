  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) → 

Declaring Data Objects

A data object is an instance of a data type and occupies as much memory space as its type specifies. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly in their declaration as [named data objects](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") or explicitly as [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") using [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) or the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)).

-   The following are data objects not declared using keywords:

-   [Literals](javascript:call_link\('abenliteral.htm'\)) are data objects that are declared in operand positions using literal source code.

-   [Text symbols](javascript:call_link\('abentext_symbols.htm'\)) are character-like constant data objects that are declared outside the program.

-   Variables and constants are declared in every context using the following:

-   [DATA](javascript:call_link\('abapdata.htm'\))

-   [CONSTANTS](javascript:call_link\('abapconstants.htm'\))

-   Static attributes are declared in classes using the following:

-   [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\))

-   Static variables are declared in procedures using the following:

-   [STATICS](javascript:call_link\('abapstatics.htm'\))

-   Interface work areas are declared using the following:

-   [TABLES](javascript:call_link\('abaptables.htm'\))

-   [NODES](javascript:call_link\('abapnodes.htm'\)) (obsolete)

Continue
[Literals](javascript:call_link\('abenliteral.htm'\))
[Text Symbols](javascript:call_link\('abentext_symbols.htm'\))
[DATA](javascript:call_link\('abapdata.htm'\))
[CONSTANTS](javascript:call_link\('abapconstants.htm'\))
[STATICS](javascript:call_link\('abapstatics.htm'\))
[TABLES](javascript:call_link\('abaptables.htm'\))