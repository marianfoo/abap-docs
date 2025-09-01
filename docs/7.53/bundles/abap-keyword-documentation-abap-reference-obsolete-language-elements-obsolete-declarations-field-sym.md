# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Declarations / Field Symbols

Included pages: 3


### abenfield_symbols_obsolete.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_declarations.htm) → 

Field Symbols

-   [Obsolete Typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-symbols_obsolete_typing.htm)

Continue
[FIELD-SYMBOLS - obsolete\_typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-symbols_obsolete_typing.htm)
![Example](exa.gif "Example") [Field Symbols, Cast Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbols_struc_abexa.htm)


### abapfield-symbols_obsolete_typing.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_declarations.htm) →  [Field Symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbols_obsolete.htm) → 

FIELD-SYMBOLS - obsolete\_typing

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-symbols_shortref.htm)

Obsolete Syntax

... *{* *}* *|* STRUCTURE struc DEFAULT dobj ...

Extras:

[1\. ... *{* *}*](#!ABAP_ADDITION_1@1@)
[2\. ... STRUCTURE struc DEFAULT dobj](#!ABAP_ADDITION_2@2@)

Effect

These additions of the statement [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfield-symbols.htm) produce an obsolete typing of the field symbol and are forbidden in classes.

Addition 1

... *{* *}*

Effect

If no explicit type is specified after FIELD-SYMBOLS, the field symbol is typed implicitly with the fully generic type any. Also, the field symbol is assigned the predefined constant space when the context is loaded. This means that the field symbol is not initial directly after it has been declared, and a check using [IS ASSIGNED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_assigned.htm) is true.

Addition 2

... STRUCTURE struc DEFAULT dobj

Effect

If the addition STRUCTURE (which is forbidden within classes) is specified for a field symbol instead of [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm) and struc is a local program structure (a data object, not a data type) or a [flat structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") from ABAP Dictionary, this structure is cast for the field symbol <fs>. dobj must be used to specify a data object that is assigned to the field symbol as an initial object.

The field symbol inherits the technical attributes of structure struc as if it were completely typed. In the case of a structured data object dobj, this data object must be at least as long as the formal parameter:

-   In the case of a structured data object, its [fragment view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match the fragment view of the corresponding initial part of struc.
    
-   An elementary data object must be character-like and flat and the corresponding initial part of struc can contain only components of this type.
    

The same applies to assignments of data objects to field symbols typed using STRUCTURE when using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm).

Note

Field symbols declared using the addition STRUCTURE are a mixture of typed field symbols and a utility for [casting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencast_casting_glosry.htm "Glossary Entry") to structured data types. The additions TYPE or LIKE of the statement FIELD-SYMBOLS should be used to type field symbols, while the addition CASTING of the statement ASSIGN is used for casting.

Example

The first example shows the obsolete usage of the addition STRUCTURE.

DATA wa1 TYPE c LENGTH 512.
FIELD-SYMBOLS <scarr1> STRUCTURE scarr DEFAULT wa1.
<scarr1>-carrid = '...'.

The second example shows the replacement of STRUCTURE with the additions TYPE and CASTING.

DATA wa2 TYPE c LENGTH 512.
FIELD-SYMBOLS <scarr2> TYPE scarr.
ASSIGN wa2 TO <scarr2> CASTING.
<scarr2>-carrid = '...'.

Executable Example

[Field Symbols, Cast Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbols_struc_abexa.htm)


### abenfield_symbols_struc_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_declarations.htm) →  [Field Symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbols_obsolete.htm) → 

Field Symbols, Cast Structures

This example demonstrates how field symbols are cast.

Source Code

REPORT demo\_field\_symbols\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: wa(10) TYPE c VALUE '0123456789'.
    DATA: BEGIN OF line1,
            col1(3) TYPE c,
            col2(2) TYPE c,
            col3(5) TYPE c,
          END OF line1.
    DATA: BEGIN OF line2,
            col1(2) TYPE c,
            col2 TYPE sy-datum,
          END OF line2.
\* correct --------------------------------------------------------------
    FIELD-SYMBOLS: <f1> LIKE line1,
                   <f2> LIKE line2.
    ASSIGN wa TO: <f1> CASTING,
                  <f2> CASTING.
\* obsolete, not supported in methods -----------------------------------
  "FIELD-SYMBOLS: <f1> STRUCTURE line1 DEFAULT wa,
  "               <f2> STRUCTURE line2 DEFAULT wa.
\* ----------------------------------------------------------------------
    cl\_demo\_output=>display(
             |{ <f1>-col1 } { <f1>-col2 } { <f1>-col3 }\\n| &&
             |{ <f2>-col1 } { <f2>-col2 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The structures line1 and line2 are cast to the number string "0123456789". The structure is then accessed using the appropriate field symbol and the components are produced one by one. Note that the date component contains an invalid date after the assignment, which is only used here for demonstration purposes.

The structures are cast using the ASSIGN CASTING statement. The obsolete addition STRUCTURE of the statement FIELD-SYMBOLS, replaced by ASSIGN CASTING, is shown here as a comment.
