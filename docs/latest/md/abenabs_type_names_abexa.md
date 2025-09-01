  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Absolute Type Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_names.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Absolute%20Type%20Names%2C%20Executable%20Example%2C%20ABENABS_TYPE_NAMES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Absolute Type Names, Executable Example

This example demonstrates the composition of [absolute type names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabsolute_typename_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_absolute\_type\_names DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
        REDEFINITION .
  PRIVATE SECTION.
    TYPES struc TYPE scarr.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_absolute\_type\_names IMPLEMENTATION.
  METHOD main.
    TYPES itab  TYPE TABLE OF scarr.
    DATA dref TYPE REF TO data.
    DATA(struc\_type) =
      \`\\class=cl\_demo\_absolute\_type\_names\` &&
      \`\\type=struc\`.
    TRY.
        CREATE DATA dref TYPE (struc\_type).
        dref->\* =  VALUE scarr( carrid = 'CC' ).
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO DATA(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
    DATA(comp\_type) =
      \`\\class=cl\_demo\_absolute\_type\_names\` &&
      \`\\type=struc-carrid\`.
    TRY.
        CREATE DATA dref TYPE (comp\_type).
        dref->\* =  'XX'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    DATA(line\_type) =
      \`\\class=cl\_demo\_absolute\_type\_names\` &&
      \`\\method=main\\type=itab\\line\`.
    TRY.
        CREATE DATA dref TYPE (line\_type).
        dref->\* = VALUE scarr( carrid = 'YY' ).
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    comp\_type =
      \`\\class=cl\_demo\_absolute\_type\_names\` &&
      \`\\method=main\\type=itab\\line-carrid\`.
    TRY.
        CREATE DATA dref TYPE (comp\_type).
        dref->\* =  'ZZ'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    comp\_type =
      \`\\type=spfli-carrid\`.
    TRY.
        CREATE DATA dref TYPE (comp\_type).
        dref->\* =  'DDX'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    line\_type =
      \`\\type=spfli\_key\_tab\\line\`.
    TRY.
        CREATE DATA dref TYPE (line\_type).
        dref->\* = VALUE spfli( carrid = 'DDY' ).
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    comp\_type =
      \`\\type=spfli\_key\_tab\\line-carrid\`.
    TRY.
        CREATE DATA dref TYPE (comp\_type).
        dref->\* =  'DDZ'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The following absolute type names are composed and used for creating [anonymous data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") with dynamic type specifications:

-   \\class=cl\_demo\_absolute\_type\_names\\type=struc
    
    Specifies the structured type struc of class CL\_DEMO\_ABSOLUTE\_TYPE\_NAMES.
    
-   \\class=cl\_demo\_absolute\_type\_names\\type=struc-carrid
    
    Specifies the type of the component carrid of the structured type struc of class CL\_DEMO\_ABSOLUTE\_TYPE\_NAMES.
    
-   \\class=cl\_demo\_absolute\_type\_names\\method=main\\type=itab\\line
    
    Specifies the line type of the tabular type itab defined in method MAIN of class CL\_DEMO\_ABSOLUTE\_TYPE\_NAMES.
    
-   \\class=cl\_demo\_absolute\_type\_names\\method=main\\type=itab\\line-carrrid
    
    Specifies the type of the component carrid of the tabular type itab defined in method MAIN of class CL\_DEMO\_ABSOLUTE\_TYPE\_NAMES.
    
-   \\type=spfli-carrid
    
    Specifies the type of the component carrid of the [DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structure_glosry.htm "Glossary Entry") SPFLI.
    
-   \\type=spfli\_key\_tab\\line
    
    Specifies the line type of the [DDIC table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_type_glosry.htm "Glossary Entry") SPFLI\_KEY\_TAB.
    
-   \\type=spfli\_key\_tab\\line-carrid
    
    Specifies the type of the component carrid of the line type of the [DDIC table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_type_glosry.htm "Glossary Entry") SPFLI\_KEY\_TAB.