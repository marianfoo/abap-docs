  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Checkpoints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoints.htm) →  [BREAK-POINT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapbreak-point.htm) → 

BREAK-POINT - interner Zusatz

This addition is for internal use only.
It must not be used in application programs.

Addition:

... AT NEXT APPLICATION STATEMENT

Effect

This addition can be optionally entered after log\_text, but not together with the addition ID. It is only useful in system programs, system modules, system subprograms, and system function modules that have names beginning with %\_ .

-   If system debugging is not activated, the program does not stop until the next statement that is not located in one of the contexts listed above.
    
-   If system debugging is activated, the program stops at the statement BREAK-POINT.
    

If system debugging is not activated and the addition AT NEXT APPLICATION STATEMENT is not used, BREAK-POINT statements in the contexts listed above are ignored.