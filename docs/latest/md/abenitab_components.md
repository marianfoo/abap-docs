  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20comp1%20comp2%20...%2C%20ABENITAB_COMPONENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - comp1 comp2 ...

Addresses individual components of internal table lines in a range of statements for processing internal tables and in [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm). If not stated otherwise, the following syntax applies to comp1 comp2...:

Syntax

... *{* comp\_name*\[*\-sub\_comp*\]**\[**{*+off(len)*}**|**{*\->attr*}**\]* *}* *|* *{* (name) *}* ...

Effect

The following alternatives are available for specifying components:

-   Directly specifying the name comp\_name of a component.
    -   If the data type of the components is character-like and [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry"), an offset/length +off(len) can be appended to the name of the component, as in [substring access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm), to access subareas of the component. Only directly specified numbers or constants can be specified for off and len.
    -   If the component is structured, the structure component selector \- can be used to access the sub\_comp components of the substructure.
    -   If the component has a reference type, the object component selector \-> can be used to access all visible attributes attr of the referenced object. In this case, a table component can be specified more than once.
-   Specifying a parenthesized [character-like data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") name, which contains the name of the component when the statement is executed.
    -   The name of the component in name can contain an offset/length specification.
    -   The object component selector \-> can be specified in name to access attributes, but only those attributes can be addressed that are known statically.
    -   name is not case-sensitive. If name only contains blanks, this component specification is ignored when the statement is executed. If name contains a nonexistent component, an uncatchable exception is raised.
-   Specifying the [pseudo component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line to address the whole table line as a component.

Hints

-   A component can only be specified more than once if it has a reference type. Further components, however, can be specified alongside table\_line. This is necessary, for example, if the line type of the internal table is an object reference and the value of the reference and the value of an attribute of the object are to be specified at the same time.
-   If the table has a non-structured line type, the pseudo comment table\_line can be addressed as the only component.
-   The pseudo component table\_line is a reserved name. In ABAP and in the ABAP Dictionary, no structure components called table\_line can be declared.
-   If the line type of the internal table cannot be statically identified, the components can usually only be specified dynamically and not directly.
-   The components specified do not have to be elementary.
-   If the data type allows it (character-like and flat), an offset/length specification can also include adjacent components
-   A [customizing include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm "Glossary Entry") must not be specified as a component if it is empty.

Example

Sorting by a dynamically specified component. An incorrect name produces a runtime error.

DATA(column) = \`carrid\`.
cl\_demo\_input=>request( CHANGING field = column ).
DATA itab TYPE TABLE OF spfli WITH EMPTY KEY.
SELECT \*
       FROM spfli
       INTO TABLE @itab.
SORT itab BY (column).
cl\_demo\_output=>display( itab ).