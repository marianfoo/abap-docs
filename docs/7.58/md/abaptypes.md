  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20ABAPTYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_shortref.htm)

Syntax Forms

[Using Built-In Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_simple.htm)

1\. TYPES *{* *{*dtype*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
        *|* *{*dtype TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**}**}*.

[Reference to Existing Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_referring.htm)

2\. TYPES dtype *{* *{*TYPE *\[*LINE OF*\]* type*}*
              *|* *{*LIKE *\[*LINE OF*\]* dobj*}*  *}*.

[Reference Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_references.htm)

3\. TYPES ref\_type *{* *{*TYPE REF TO type*}*
                 *|* *{*LIKE REF TO dobj*}* *}*.

[Structured Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_struc.htm)

4\. TYPES BEGIN OF struc\_type.
     ...
     TYPES comp ...
     TYPES comp TYPE struc\_type BOXED.
     INCLUDE *{*TYPE*|*STRUCTURE*}* ...
     ...
  TYPES END OF struc\_type.

[Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)

5\. TYPES BEGIN OF ENUM enum\_type
                *\[*STRUCTURE struc*\]*
                *\[*BASE TYPE dtype*\]*.
    TYPES val1 *\[*VALUE IS INITIAL*\]*,
    TYPES val2 *\[*VALUE val*\]*,
    TYPES val3 *\[*VALUE val*\]*,
    ...
  TYPES END OF ENUM enum\_type
              *\[*STRUCTURE struc*\]*.

[Mesh Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_mesh.htm)

6\. TYPES BEGIN OF MESH mesh\_type.
     ...
     TYPES node TYPE *\[*REF TO*\]* table\_type [associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_mesh_association.htm)
     ...
  TYPES END OF MESH mesh\_type.

[Table Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_itab.htm)

7\. TYPES table\_type *{* *{*TYPE [tabkind](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_tabcat.htm) OF *\[*REF TO*\]* type*}*
                   *|* *{*LIKE [tabkind](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_tabcat.htm) OF dobj*}* *}*
                     *\[*[tabkeys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_keydef.htm)*\]**\[*INITIAL SIZE n*\]*.

[Ranges Table Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_ranges.htm)

8\. TYPES dtype *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
              *\[*INITIAL SIZE n*\]*.

[Indicators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_indicators.htm)

9\. TYPES dtype TYPE struct WITH INDICATORS ind
                         *\[*TYPE type*\]*.

[LOB Handle Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_lob_handle.htm)

10\. TYPES dtype TYPE dbtab*|*view
                   [lob\_handle\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_lob_handle_columns.htm)
                  *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_lob_handle_columns.htm)
                   ...                                   *\]*.

[BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm)

11\. TYPES dtype *{* *{*TYPE TABLE FOR*}*
               *|* *{*TYPE STRUCTURE FOR*}*
               *|* *{*TYPE REQUEST FOR*}*
               *|* *{*TYPE RESPONSE FOR*}* *}* ...

Effect

The statement TYPES defines a standalone data type. [Naming conventions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) apply to the names. The defined data type can be viewed within the current context from this position.

The syntax allows the definition of elementary data types, reference types, structured types, table types, and mesh types. In addition to the types that are completely self-constructed, special types such as ranges table types, indicators, or LOB handle structures can be derived from existing types.

For the definition of a structured type struc\_type, any type definitions of two TYPES statements are included with the additions BEGIN OF and END OF. A structured data type struc\_type is then defined that contains the enclosed data types as components struc\_type-.... Structure definitions can be nested. A mesh type is a special structure type whose components are tabular nodes for which mesh [associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_association_glosry.htm "Glossary Entry") can be defined.

Hints

-   Outside of classes, LIKE can also be used for an [obsolete type reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlike_obsolete.htm).
-   An obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_client_specified.htm) declares a special type for target areas for ABAP SQL queries for which [implicit client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) is disabled.

Continue
[TYPES, TYPE abap\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_simple.htm)
[TYPES, TYPE, LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_referring.htm)
[TYPES, REF TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_references.htm)
[TYPES, BEGIN OF struct\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_struc.htm)
[TYPES, BEGIN OF ENUM enum\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)
[TYPES, BEGIN OF MESH mesh\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_mesh.htm)
[TYPES, TABLE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_itab.htm)
[TYPES, RANGE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_ranges.htm)
[TYPES, INDICATORS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_indicators.htm)
[TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_lob_handle.htm)