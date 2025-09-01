  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) → 

TYPES

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax Forms

[Using built-in types](javascript:call_link\('abaptypes_simple.htm'\))
1\. TYPES *{* *{*dtype*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
        *|* *{*dtype TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**}**}*.
[Reference to existing types](javascript:call_link\('abaptypes_referring.htm'\))
2\. TYPES dtype *{* *{*TYPE *\[*LINE OF*\]* type*}*
              *|* *{*LIKE *\[*LINE OF*\]* dobj*}*  *}*.
[Reference types](javascript:call_link\('abaptypes_references.htm'\))
3\. TYPES ref\_type *{* *{*TYPE REF TO type*}*
                 *|* *{*LIKE REF TO dobj*}* *}*.
[Structured types](javascript:call_link\('abaptypes_struc.htm'\))
4\. TYPES BEGIN OF struc\_type.
     ...
     TYPES comp ...
     TYPES comp TYPE struc\_type BOXED.
     INCLUDE *{*TYPE*|*STRUCTURE*}* ...
     ...
  TYPES END OF struc\_type.
[Enumerated types](javascript:call_link\('abaptypes_enum.htm'\))
5\. TYPES BEGIN OF ENUM enum\_type
                *\[*STRUCTURE struc*\]*
                *\[*BASE TYPE dtype*\]*.
    TYPES val1 *\[*VALUE IS INITIAL*\]*,
    TYPES val2 *\[*VALUE val*\]*,
    TYPES val3 *\[*VALUE val*\]*,
    ...
  TYPES END OF ENUM enum\_type
              *\[*STRUCTURE struc*\]*.
[Mesh types](javascript:call_link\('abaptypes_mesh.htm'\))
6\. TYPES BEGIN OF MESH mesh\_type.
     ...
     TYPES node TYPE *\[*REF TO*\]* table\_type [associations](javascript:call_link\('abaptypes_mesh_association.htm'\))
     ...
  TYPES END OF MESH mesh\_type.
[Table types](javascript:call_link\('abaptypes_itab.htm'\))
7\. TYPES table\_type *{* *{*TYPE [tabkind](javascript:call_link\('abaptypes_tabkind.htm'\)) OF *\[*REF TO*\]* type*}*
                   *|* *{*LIKE [tabkind](javascript:call_link\('abaptypes_tabkind.htm'\)) OF dobj*}* *}*
                     *\[*[tabkeys](javascript:call_link\('abaptypes_keydef.htm'\))*\]**\[*INITIAL SIZE n*\]*.
[Ranges table types](javascript:call_link\('abaptypes_ranges.htm'\))
8\. TYPES dtype *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
              *\[*INITIAL SIZE n*\]*.
[Client field for CDS views](javascript:call_link\('abaptypes_client_specified.htm'\))
9\. TYPES dtype TYPE cds\_entity CLIENT SPECIFIED clnt.
[LOB handle structures](javascript:call_link\('abaptypes_lob_handle.htm'\))
10\. TYPES dtype TYPE dbtab*|*view
                   [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                  *\[* [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                   ...                                   *\]*.

Effect

The statement TYPES defines a standalone data type. [Naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the names. The defined data type can be viewed within the current context from this position.

The syntax makes it possible to define elementary data types, reference types, structured types, table types, and mesh types. As well as the types that are completely self-constructed, special types such as ranges table types or LOB handle structures can be derived from existing types.

For the definition of a structured type struc\_type, any type definitions of two TYPES statements are enclosed by using the additions BEGIN OF and END OF. Here, a structured data type struc\_type is defined that contains the enclosed data types as components struc\_type-.... Structure definitions can be nested. A mesh type is a special structure type whose components are tabular nodes for which associations can be defined.

Note

Outside classes, LIKE can also be used for an [obsolete type reference](javascript:call_link\('abenlike_obsolete.htm'\)).

Continue
[TYPES - TYPE abap\_type](javascript:call_link\('abaptypes_simple.htm'\))
[TYPES - TYPE, LIKE](javascript:call_link\('abaptypes_referring.htm'\))
[TYPES - REF TO](javascript:call_link\('abaptypes_references.htm'\))
[TYPES - BEGIN OF struct\_type](javascript:call_link\('abaptypes_struc.htm'\))
[TYPES - BEGIN OF ENUM enum\_type](javascript:call_link\('abaptypes_enum.htm'\))
[TYPES - BEGIN OF MESH mesh\_type](javascript:call_link\('abaptypes_mesh.htm'\))
[TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\))
[TYPES - RANGE OF](javascript:call_link\('abaptypes_ranges.htm'\))
[TYPES - CLIENT SPECIFIED](javascript:call_link\('abaptypes_client_specified.htm'\))
[TYPES - LOB HANDLE](javascript:call_link\('abaptypes_lob_handle.htm'\))