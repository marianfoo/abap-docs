  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Examples for ABAP Objects](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

ABAP Objects, OO Transaction

This example demonstrates the linking of a transaction code with the method of a local class.

Source Code

\*&---------------------------------------------------------------------\*
\*& Subroutine pool  DEMO\_OO\_TRANSACTION                                \*
\*&                                                                     \*
\*&---------------------------------------------------------------------\*
PROGRAM  demo\_oo\_transaction.
\*
CLASS demo\_class DEFINITION.
  PUBLIC SECTION.
    METHODS instance\_method.
ENDCLASS.
\*
CLASS demo\_class IMPLEMENTATION.
  METHOD instance\_method.
    cl\_demo\_output=>display( 'Instance method in local class' ).
  ENDMETHOD.
ENDCLASS.

Description

The program DEMO\_OO\_TRANSACTION is a subroutine pool that does not contain any subroutines. Instead, the program contains the definition of the local class demo\_class, with which the transaction code DEMO\_OO\_METHOD is linked. When the transaction is called, the program is loaded, one instance of the class is created, and the method is called.