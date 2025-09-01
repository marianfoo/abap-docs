  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

AMDP, Implementation of an L Procedure

This example demonstrates the implementation of a procedure in the programming language [L](javascript:call_link\('abenllang_glosry.htm'\) "Glossary Entry") using AMDP.

Source Code

REPORT demo\_amdp\_l\_language.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
      cl\_demo\_output=>display(
        \`Example can be executed on SAP HANA Database only\` ).
      LEAVE PROGRAM.
    ENDIF.
    DATA(text) = \`World\`.
    cl\_demo\_input=>request( CHANGING field = text ).
    IF text IS INITIAL.
      RETURN.
    ENDIF.
    TRY.
        NEW cl\_demo\_amdp\_l\_hello\_world(
              )->hello\_world( EXPORTING text  = text
                              IMPORTING texts = DATA(texts) ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    cl\_demo\_output=>display( texts ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The following [L procedure](javascript:call_link\('abenl_procedure_glosry.htm'\) "Glossary Entry") is implemented in the AMDP method HELLO\_WORLD of the AMDP class CL\_DEMO\_AMDP\_L\_HELLO\_WORLD:

METHOD hello\_world BY DATABASE PROCEDURE
                   FOR HDB LANGUAGE LLANG
                   OPTIONS READ-ONLY.
\* Hello World in L
  typedef Table <String "TEXT"> TT\_TABLE;  /\* Type definition
                                              repeated  \*/
  //Main entry point
  export Void main(String text, TT\_TABLE & texts)
    { String hello = String("Hello ");
      texts."TEXT"\[0z\] = hello.append( text ).append( "!" ); }
ENDMETHOD.

The tabular output parameter is created from a predefined text and an interactive input made in the ABAP program.

Note

The programming language L can only be used internally and with restrictions at SAP. For general programming with the SAP HANA database, [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") or the script language [SQL Script](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") must be used. The use of L by customers and partners is not supported.