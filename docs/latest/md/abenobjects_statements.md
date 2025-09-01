  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Objects%2C%20ABENOBJECTS_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Objects

A data object is an instance of a data type and occupies as much memory space as is allowed by its type. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly in their declaration as [named data objects](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") or explicitly as [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") using [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) or the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)).

-   The following are data objects that are not declared using keywords:
    -   [Literals](javascript:call_link\('abenliteral.htm'\)) are data objects that are declared in operand positions using literal source code.
    -   [Text symbols](javascript:call_link\('abentext_symbols.htm'\)) are character-like constant data objects that are declared outside the program.
-   Declaration of variables and constants in every context:
    -   [DATA](javascript:call_link\('abapdata.htm'\))
    -   [CONSTANTS](javascript:call_link\('abapconstants.htm'\))
-   Declaration of static attributes in classes:
    -   [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\))
-   Declaration of static variables in procedures:
    -   [STATICS](javascript:call_link\('abapstatics.htm'\))
-   Declaration of interface work areas:
    -   [TABLES](javascript:call_link\('abaptables.htm'\))
    -   [NODES](javascript:call_link\('abapnodes.htm'\)) (obsolete)

Data objects can be declared by reference to a non-generic data type of the same ABAP program or from ABAP Dictionary. In this case, the data type determines the technical properties of the data object completely. A data object can also be constructed in the ABAP program without completely specified type definitions. The data type of a data object of this type is always complete, and does not exist independently, but rather as a property of the data object and is called a [bound data type](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry").

For more information about data objects, see [Data Objects](javascript:call_link\('abendata_objects.htm'\)).

Continue
[Literals](javascript:call_link\('abenliteral.htm'\))
[Text Symbols](javascript:call_link\('abentext_symbols.htm'\))
[DATA](javascript:call_link\('abapdata.htm'\))
[CONSTANTS](javascript:call_link\('abapconstants.htm'\))
[STATICS](javascript:call_link\('abapstatics.htm'\))
[TABLES](javascript:call_link\('abaptables.htm'\))