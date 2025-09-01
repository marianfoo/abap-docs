  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) → 

DATA

[Quick Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax Forms

[Using Built-In Types](javascript:call_link\('abapdata_simple.htm'\))
1\. DATA *{* *{*var*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
       *|* *{*var TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**}* *}*
       *\[*VALUE val*|**{*IS INITIAL*}**\]*
       *\[*READ-ONLY*\]*.
[Reference to Existing Types](javascript:call_link\('abapdata_referring.htm'\))
2\. DATA var *{* *{*TYPE *\[*LINE OF*\]* type*}*
           *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*
           *\[*VALUE val*|**{*IS INITIAL*}**\]*
           *\[*READ-ONLY*\]*.
[Enumerated Variables](javascript:call_link\('abapdata_enum.htm'\))

3\. DATA enum\_var *{* *{*TYPE enum\_type*}*
                *|* *{*LIKE enum\_dobj*}* *}*
                *\[*VALUE val*|**{*IS INITIAL*}**\]*
                *\[*READ-ONLY*\]*.
[Reference Variables](javascript:call_link\('abapdata_references.htm'\))
4\. DATA ref *{* *{*TYPE REF TO type*}*
           *|* *{*LIKE REF TO dobj*}* *}*
           *\[*VALUE IS INITIAL*\]*
           *\[*READ-ONLY*\]*.
[Structures](javascript:call_link\('abapdata_struc.htm'\))
5\. DATA BEGIN OF struc *\[*READ-ONLY*\]*.
     ...
     DATA comp ...
     INCLUDE *{*TYPE*|*STRUCTURE*}* ...
     ...
  DATA END OF struc.
[Internal Tables](javascript:call_link\('abapdata_itab.htm'\))
6\. DATA itab *{* *{*TYPE [tabkind](javascript:call_link\('abapdata_itab.htm'\)) OF *\[*REF TO*\]* type*}*
            *|* *{*LIKE [tabkind](javascript:call_link\('abapdata_itab.htm'\)) OF dobj*}* *}*
            *\[* [tabkeys](javascript:call_link\('abapdata_keydef.htm'\))*\]* *\[*INITIAL SIZE n*\]*
            *\[*WITH HEADER LINE*\]*
            *\[*VALUE IS INITIAL*\]*
            *\[*READ-ONLY*\]*.

[Ranges Table](javascript:call_link\('abapdata_ranges.htm'\))
7\. DATA range\_tab *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
                 *\[*INITIAL SIZE n*\]*
                 *\[*WITH HEADER LINE*\]*
                 *\[*VALUE IS INITIAL*\]*
                 *\[*READ-ONLY*\]*.
[LOB Handle Structures](javascript:call_link\('abapdata_lob_handle.htm'\))
8\. DATA dtype TYPE dbtab*|*view *\[*READ-ONLY*\]*
                  [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                 *\[* [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                  ...                                   *\]*.

[Static Boxed Components](javascript:call_link\('abapdata_boxed.htm'\))
9\. DATA struc TYPE struc\_type BOXED.

Effect

The statement DATA declares a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") of any data type. The declared data object is visible within the current context as of this position. Within the declaration part of a class or an interface, DATA declares an instance attribute whose validity is bound to an instance of a class.

This statement has various syntax forms, which allow elementary data types, reference types, structured types, and table types to be defined. With the exception of two additions ([VALUE](javascript:call_link\('abapdata_options.htm'\)) and [READ-ONLY](javascript:call_link\('abapdata_options.htm'\))), these are the same syntax forms as in the statement [TYPES](javascript:call_link\('abaptypes.htm'\)). In this way, a new data type can be defined when declaring a data object. The most important difference compared with the statement TYPES is that a data type defined using DATA (and not derived from an existing type) is available only as a property of the declared data object and is not a standalone data type. This kind of data type is bound to its data object.

For the definition of a structure struc, any data declarations specified are enclosed in two DATA statements with the additions BEGIN OF and END OF. Here a structure struc is declared that contains the enclosed data objects comp as a struc-comp component. Structure definitions can be nested.

The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the names var, ref, struc, comp, itab, and range\_tab.

Notes

-   Data objects that are declared in a program, but cannot be accessed there statically, produce a warning message in the enhanced program check.
    
-   An [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of variables can be made using the declaration operator [DATA](javascript:call_link\('abendata_inline.htm'\)).
    
-   The obsolete variant [DATA ... COMMON PART](javascript:call_link\('abapdata_common.htm'\)) declares interface work areas.
    

Continue
[DATA - TYPE abap\_type](javascript:call_link\('abapdata_simple.htm'\))
[DATA - TYPE, LIKE](javascript:call_link\('abapdata_referring.htm'\))
[DATA - TYPE, LIKE enum](javascript:call_link\('abapdata_enum.htm'\))
[DATA - REF TO](javascript:call_link\('abapdata_references.htm'\))
[DATA - BEGIN OF struc](javascript:call_link\('abapdata_struc.htm'\))
[DATA - TABLE OF](javascript:call_link\('abapdata_itab.htm'\))
[DATA - RANGE OF](javascript:call_link\('abapdata_ranges.htm'\))
[DATA - LOB HANDLE](javascript:call_link\('abapdata_lob_handle.htm'\))
[DATA - BOXED](javascript:call_link\('abapdata_boxed.htm'\))
[DATA - data\_options](javascript:call_link\('abapdata_options.htm'\))