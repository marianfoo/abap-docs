  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Enumerated Objects (Enums)](javascript:call_link\('abenenumerated_types_usage.htm'\)) → 

Enums, Use

This example demonstrates the use of [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_enumerated\_types.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA html TYPE string.
    CLASS-METHODS:
      class\_constructor,
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: size   TYPE  cl\_demo\_wrap\_browser=>size
                 VALUE cl\_demo\_wrap\_browser=>sz-l,
          format TYPE  cl\_demo\_wrap\_browser=>format
                 VALUE cl\_demo\_wrap\_browser=>fmt-l.
    cl\_demo\_input=>add\_field( EXPORTING text = \`Size (S, M, L, XL)\`
                              CHANGING  field = size ).
    cl\_demo\_input=>request(   EXPORTING text  = \`Format (L, P)\`
                              CHANGING  field = format ).
    cl\_demo\_wrap\_browser=>show( html   = html
                                size   = size
                                format = format ).  ENDMETHOD.
  METHOD class\_constructor.
    html = cl\_abap\_docu\_external=>get\_abap\_docu\_for\_adt(
       EXPORTING
        language = COND #( WHEN sy-langu = 'D' THEN 'DE' ELSE 'EN' ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program calls the method SHOW of class CL\_DEMO\_WRAP\_BROWSER . Two enumerated types are defined as follows in this class:

TYPES:
  BEGIN OF ENUM size STRUCTURE sz,
    s, m, l, xl,
  END OF ENUM size STRUCTURE sz.
TYPES:
  BEGIN OF ENUM format STRUCTURE fmt,
    l, p,
  END OF ENUM format STRUCTURE fmt.

The use of [enumerated structures](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") means that the same name l can occur twice. The method SHOW wraps the method SHOW\_HTML of the class CL\_ABAP\_BROWSER:

METHOD show.
  cl\_abap\_browser=>show\_html(
    html\_string = html
    size    = SWITCH #(  size
                         WHEN sz-s  THEN cl\_abap\_browser=>small
                         WHEN sz-m  THEN cl\_abap\_browser=>medium
                         WHEN sz-l  THEN cl\_abap\_browser=>large
                         WHEN sz-xl THEN cl\_abap\_browser=>xlarge )
    format  = SWITCH #(  format
                         WHEN fmt-l THEN cl\_abap\_browser=>landscape
                         WHEN fmt-p THEN cl\_abap\_browser=>portrait )
    buttons = abap\_true ).
ENDMETHOD.

The input parameters size and format format of the method have the identically named enumerated types and can only contain their enumerated values. These are mapped to the corresponding constants of class CL\_ABAP\_BROWSER. These constants are to be regarded as a workaround for real enumerated types, which did not exist when CL\_ABAP\_BROWSER was developed.

Enumerated values can be entered for the size and format when the program is executed. The internal transfer to the program takes place by deserializing the character-like values into the local enumerated variables size and format. The exception for invalid values is caught internally, whereby the enumerated variables are initialized, which corresponds to the values of the enumerated constants sz-s and fmt-l.