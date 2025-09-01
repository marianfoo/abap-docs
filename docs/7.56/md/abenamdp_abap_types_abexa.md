---
title: "AMDP - Access to ABAP Types"
description: |
  The example demonstrates how to access ABAP types using the AMDP macro(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_macro_glosry.htm 'Glossary Entry') $ABAP.type(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_abap_types.htm). Source Code REPORT demo_a
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_abap_types_abexa.htm"
abapFile: "abenamdp_abap_types_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenamdp", "abap", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_abexas.htm) → 

AMDP - Access to ABAP Types

The example demonstrates how to access ABAP types using the [AMDP macro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_abap_types.htm).

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

This example calls the following [AMDP method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") of the class CL\_DEMO\_AMDP\_ABAP\_TYPES:

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

In the method, a local table variable mytab is declared using DECLARE in [SQLScript](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script_glosry.htm "Glossary Entry"). All columns of the table variable are declared using the [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_macro_glosry.htm "Glossary Entry") macro [$ABAP.type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_abap_types.htm) with reference to ABAP types. The first four ABAP types, MANDT, SYST\_UNAME, SYST\_LANGU, and SYST\_DATUM, are defined in the ABAP Dictionary. Type line\_text comes from a TYPES statement of its own class. f stands for the built-in numeric ABAP type.

The table variable is filled using assignments to columns with one row, where the specification of the AMDP macro $ABAP.type is also shown in a CAST expression. Finally, the content of the table variable is imported into the tabular output parameter itab, whose row type is made up of components of the same ABAP types, which are used to define the table variable.