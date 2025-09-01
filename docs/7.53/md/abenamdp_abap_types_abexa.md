  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

AMDP, Access to ABAP Types

The example demonstrates how to access ABAP types using the [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [$ABAP.type](javascript:call_link\('abenamdp_abap_types.htm'\)).

Source Code

REPORT demo\_amdp\_abap\_types.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE cl\_demo\_amdp\_abap\_types=>itab.
    cl\_demo\_amdp\_abap\_types=>demo\_abap\_types( IMPORTING itab = itab ).
    cl\_demo\_output=>display( itab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example calls the following [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") of the class CL\_DEMO\_AMDP\_ABAP\_TYPES:

METHOD demo\_abap\_types BY DATABASE PROCEDURE
                       FOR HDB LANGUAGE SQLSCRIPT.
  DECLARE mytab table( mandt  "$ABAP.type( mandt )",
                       uname  "$ABAP.type( syst\_uname )",
                       langu  "$ABAP.type( syst\_langu )",
                       datum  "$ABAP.type( syst\_datum )",
                       text   "$ABAP.type( line-text )",
                       number "$ABAP.type( f )" );
  mytab.mandt\[1\]  := session\_context('CLIENT');
  mytab.uname\[1\]  := session\_context('APPLICATIONUSER');
  mytab.langu\[1\]  := session\_context('LOCALE\_SAP');
  mytab.datum\[1\]  := session\_context('SAP\_SYSTEM\_DATE');
  mytab.text\[1\]   := cast( 0123456789 as "$ABAP.type( line-text )" );
  mytab.number\[1\] := 333 ;
  itab = select \* from :mytab;
ENDMETHOD.

In the method, a local table variable mytab is declared using DECLARE in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry"). All columns of the table variable are declared using the [AMDP](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") macro [$ABAP.type](javascript:call_link\('abenamdp_abap_types.htm'\)) with reference to ABAP types. The first four ABAP types, MANDT, SYST\_UNAME, SYST\_LANGU, and SYST\_DATUM, are defined in ABAP Dictionary. Type line\_text comes from a TYPES statement of its own class. f stands for the built-in numeric ABAP type.

The table variable is filled using assignments to columns with one row, where the AMDP macro $ABAP.type is shown as specified in a CAST expression. Finally, the content of the table variable is imported into the tabular output parameter itab, whose row type is made up of components of the same ABAP types, which are used to define the table variable.