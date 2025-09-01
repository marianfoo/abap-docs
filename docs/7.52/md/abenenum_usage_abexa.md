  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Enumerated Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_types_usage.htm) → 

Enumerated Objects, Use

This example demonstrates the use of [enumerated types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry").

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
    cl\_abap\_docu\_external=>get\_abap\_docu\_for\_adt(
       EXPORTING
        language = COND #( WHEN sy-langu = 'D' THEN 'DE' ELSE 'EN' )
      IMPORTING
        html     = html  ).
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

The use of [enumeration structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") means that the same name l can occur twice. Method SHOW wraps method SHOW\_HTML of class CL\_ABAP\_BROWSER:

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

The input parameters size and format format of the method have the same enumerated types and can only contain their enumerated values. These are mapped to the corresponding constants of class CL\_ABAP\_BROWSER. These constants can be regarded as a workaround for real enumerated types, which were not available when CL\_ABAP\_BROWSER was developed.

Enumerated values can be specified for the size and format when the program is executed. The values are passed internally to the program by deserializing the character-like values into the local enumerated variables size and format. The exception for invalid values is caught internally; here the enumerated variables are initialized, which corresponds to the values of the enumeration constants sz-s and fmt-l.