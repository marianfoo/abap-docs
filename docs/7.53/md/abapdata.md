  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) → 

DATA

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_shortref.htm)

Syntax Forms

[Using built-in types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_simple.htm)
1\. DATA *{* *{*var*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
       *|* *{*var TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**}* *}*
       *\[*VALUE val*|**{*IS INITIAL*}**\]*
       *\[*READ-ONLY*\]*.
[Reference to existing types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_referring.htm)
2\. DATA var *{* *{*TYPE *\[*LINE OF*\]* type*}*
           *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*
           *\[*VALUE val*|**{*IS INITIAL*}**\]*
           *\[*READ-ONLY*\]*.
[Enumerated variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_enum.htm)

3\. DATA enum\_var *{* *{*TYPE enum\_type*}*
                *|* *{*LIKE enum\_dobj*}* *}*
                *\[*VALUE val*|**{*IS INITIAL*}**\]*
                *\[*READ-ONLY*\]*.
[Reference variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_references.htm)
4\. DATA ref *{* *{*TYPE REF TO type*}*
           *|* *{*LIKE REF TO dobj*}* *}*
           *\[*VALUE IS INITIAL*\]*
           *\[*READ-ONLY*\]*.
[Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_struc.htm)
5\. DATA BEGIN OF struc *\[*READ-ONLY*\]*.
     ...
     DATA comp ...
     INCLUDE *{*TYPE*|*STRUCTURE*}* ...
     ...
  DATA END OF struc.
[Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_itab.htm)
6\. DATA itab *{* *{*TYPE [tabkind](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_itab.htm) OF *\[*REF TO*\]* type*}*
            *|* *{*LIKE [tabkind](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_itab.htm) OF dobj*}* *}*
            *\[* [tabkeys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_keydef.htm)*\]* *\[*INITIAL SIZE n*\]*
            *\[*WITH HEADER LINE*\]*
            *\[*VALUE IS INITIAL*\]*
            *\[*READ-ONLY*\]*.

[Ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_ranges.htm)
7\. DATA rtab *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
            *\[*INITIAL SIZE n*\]*
            *\[*WITH HEADER LINE*\]*
            *\[*VALUE IS INITIAL*\]*
            *\[*READ-ONLY*\]*.
[LOB handle structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_lob_handle.htm)
8\. DATA dtype TYPE dbtab*|*view *\[*READ-ONLY*\]*
                  [lob\_handle\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_lob_handle_columns.htm)
                 *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_lob_handle_columns.htm)
                  ...                                   *\]*.

[Static boxed components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_boxed.htm)
9\. DATA struc TYPE struc\_type BOXED.

Effect

The statement DATA declares a [variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvariable_glosry.htm "Glossary Entry") of any data type. The declared data object is visible within the current context as of this position. Within the declaration part of a class or an interface, DATA declares an instance attribute whose validity is bound to an instance of a class.

This statement has various syntax forms, which allow elementary data types, reference types, structured types, and table types to be defined. With the exception of two additions ([VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm) and [READ-ONLY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm)), these are the same syntax forms as in the statement [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm). In this way, a new data type can be defined when declaring a data object. The most important difference compared with the statement TYPES is that a data type defined using DATA (and not derived from an existing type) is available only as a property of the declared data object and is not a standalone data type. This kind of data type is bound to its data object.

For the definition of a structure struc, any data declarations specified are enclosed in two DATA statements with the additions BEGIN OF and END OF. Here a structure struc is declared that contains the enclosed data objects comp as a struc-comp component. Structure definitions can be nested.

The [naming conventions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) apply to the names var, ref, struc, comp, itab, and rtab.

Notes

-   Data objects that are declared in a program, but cannot be accessed there statically, produce a warning message in the enhanced program check.
    
-   An [inline declaration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declaration_glosry.htm "Glossary Entry") of variables can be made using the declaration operator [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm).
    
-   The obsolete variant [DATA ... COMMON PART](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_common.htm) declares interface work areas.
    

Continue
[DATA - TYPE abap\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_simple.htm)
[DATA - TYPE, LIKE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_referring.htm)
[DATA - TYPE, LIKE enum](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_enum.htm)
[DATA - REF TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_references.htm)
[DATA - BEGIN OF struc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_struc.htm)
[DATA - TABLE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_itab.htm)
[DATA - RANGE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_ranges.htm)
[DATA - LOB HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_lob_handle.htm)
[DATA - BOXED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_boxed.htm)
[DATA - data\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm)