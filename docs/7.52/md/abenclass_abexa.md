  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Examples for ABAP Objects](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

ABAP Objects, Classes

This example demonstrates a class for counters.

Source Code

REPORT demo\_class\_counter .
CLASS counter DEFINITION.
  PUBLIC SECTION.
    METHODS: set
               IMPORTING value(set\_value) TYPE i,
             increment,
             get
               EXPORTING value(get\_value) TYPE i.
  PRIVATE SECTION.
    DATA count TYPE i.
ENDCLASS.
CLASS counter IMPLEMENTATION.
  METHOD set.
    count = set\_value.
  ENDMETHOD.
  METHOD increment.
    ADD 1 TO count.
  ENDMETHOD.
  METHOD get.
    get\_value = count.
  ENDMETHOD.
ENDCLASS.
DATA number TYPE i VALUE 5.
DATA cnt TYPE REF TO counter.
START-OF-SELECTION.
  CREATE OBJECT cnt.
  cnt->set( number ).
  DO 3 TIMES.
    cnt->increment( ).
  ENDDO.
  cnt->get( IMPORTING get\_value = number ).
  cl\_demo\_output=>display( number ).

Description

The counter class contains three public methods set, increment and get, which work with the private integer field count. Two of the methods have input and output parameters with which they define the data interface of the class. The field count is not visible externally.