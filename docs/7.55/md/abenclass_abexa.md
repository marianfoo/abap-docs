  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

ABAP Objects - Classes

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
   count += 1.
  ENDMETHOD.
  METHOD get.
    get\_value = count.
  ENDMETHOD.
ENDCLASS.
DATA number TYPE i VALUE 5.
START-OF-SELECTION.
  DATA(cnt) = NEW counter( ).
  cnt->set( number ).
  DO 3 TIMES.
    cnt->increment( ).
  ENDDO.
  cnt->get( IMPORTING get\_value = number ).
  cl\_demo\_output=>display( number ).

Description

The class counter contains three public methods, set, increment, and get, which work with the private integer field count. Two of the methods have input and output parameters and therefore define the data interface of the class. The field count, on the other hand, is not visible externally.