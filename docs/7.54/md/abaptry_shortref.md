  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TRY - Quick reference

[Reference](javascript:call_link\('abaptry.htm'\))

Syntax

TRY.
    *\[*try\_block*\]*
  *\[*CATCH *\[*BEFORE UNWIND*\]* cx\_class1 cx\_class2 ... *\[*INTO oref*\]*.
    *\[*catch\_block*\]**\]*
    ...
  *\[*CLEANUP *\[*INTO oref*\]*.
    *\[*cleanup\_block*\]**\]*
ENDTRY.

Effect

Defines a monitored area try\_block, whose [class-based exceptions](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") cx\_class1, cx\_class2, ... can be handled in CATCH blocks catch\_block. The CLEANUP block cleanup\_block is executed if a class-based exception is raised in the TRY block and is not caught in a separate CATCH block but in a parent TRY control structure instead.

Additions

-   BEFORE UNWIND
    Is given the context of the exception until the end of the exception handling
    
-   INTO oref
    Assigns oref a reference to the exception object.