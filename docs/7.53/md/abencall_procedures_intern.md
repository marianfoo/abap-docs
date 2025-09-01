  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) → 

Internal Procedure Calls

All procedures which are defined in the same ABAP program and are visible from the calling position can be called internally.

-   In every ABAP program, and within a [class](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry"), the visible [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of the class or visible methods of other local classes of the same program can be called. The calling of methods is the only procedure call which is recommended for the program modularization.

-   In a [function group](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"), a [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") which has been made available for external users can also be called internally.

-   In every ABAP program that still contains [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry"), these can also still be called internally. Subroutines are an obsolete form of internal modularization and should be replaced by methods if possible.

The required program is always already loaded for internal calls.

Example

Internal programming call of method meth1 of a local class from the event block START-OF-SELECTION and the call of meth2 from meth1.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS meth1.
  PRIVATE SECTION.
    METHODS meth2.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth1.
    ...
    meth2( ).
    ...
  ENDMETHOD.
  METHOD meth2.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW cls( )->meth1( ).