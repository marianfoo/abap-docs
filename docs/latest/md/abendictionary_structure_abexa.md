  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) →  [Examples of Structures](javascript:call_link\('abenstructure_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Structure%20from%20ABAP%20Dictionary%2C%20ABENDICTIONARY_STRUCTURE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Structure from ABAP Dictionary

This example demonstrates a structure from the ABAP Dictionary and its use.

Source Code   

\* Public class definition
CLASS cl\_demo\_dictionary\_structure DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_dictionary\_structure IMPLEMENTATION.
  METHOD main.
    DATA carrier TYPE scarr.
    carrier-carrid = 'UA'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrier-carrid ).
    SELECT SINGLE \*
           FROM scarr
           WHERE carrid = @carrier-carrid
           INTO @carrier.
    out->write( carrier ).
  ENDMETHOD.
ENDCLASS.

Description   

Structure types of the ABAP Dictionary are typically used in ABAP programs to define structures or internal tables with a structured line type to process data that is imported from the database. The example shows how a structure carrier local to a method is declared by reference to a database table SCARR defined in the ABAP Dictionary, and used as the target area of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.