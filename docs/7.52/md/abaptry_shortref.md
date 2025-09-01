  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  T

TRY - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm)

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

Defines a monitored area try\_block, whose [class-based exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") cx\_class1, cx\_class2, ... can be handled in CATCH blocks catch\_block. The CLEANUP block cleanup\_block is executed if a class-based exception is raised in the TRY block and is not caught in a separate CATCH block but in a parent TRY control structure instead.

Additions

-   BEFORE UNWIND
    Is given the context of the exception until the end of the exception handling
    
-   INTO oref
    Assigns oref a reference to the exception object.