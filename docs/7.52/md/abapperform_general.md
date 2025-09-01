  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [PERFORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm) → 

PERFORM - general

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_shortref.htm)

Syntax

PERFORM [subr\_identifier](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_form.htm) *\[* [parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_parameters.htm)*\]*.

Effect

This statement calls the subroutine specified with the name [subr\_identifier](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_form.htm) and assigns the actual parameters specified in [parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_parameters.htm) to the formal parameters of the subroutine.

Notes

-   Subroutines are obsolete. Do not create new subroutines in new programs. Subroutines created in existing programs for internal modularization can continue to be called. Whenever possible, however, external subroutine calls from other programs should be avoided.
    
-   Information about the behavior of class-based exceptions in subroutines can be found in [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_procedures.htm).
    

Example

Old function modules such as GUI\_DOWNLOAD, whose function groups have not been switched to using local classes, still contain a large number of PERFORM statements.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_NO\_HANDLER

-   See [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_procedures.htm).
    Runtime error: UNCAUGHT\_EXCEPTION
    

CX\_SY\_PROGRAM\_NOT\_FOUND

-   Cause: The specified program was not found.
    Runtime error: LOAD\_PROGRAM\_NOT\_FOUND
    
-   Cause: The specified program cannot exist because the program name is longer than 40 characters.
    Runtime error: PERFORM\_PROGRAM\_NAME\_TOO\_LONG
    

CX\_SY\_DYN\_CALL\_ILLEGAL\_FORM

-   Cause: The specified subroutine was not found.
    Runtime error: PERFORM\_NOT\_FOUND
    
-   Cause: The specified index was too small.
    Runtime error: PERFORM\_INDEX\_0
    
-   Cause: The specified index was negative.
    Runtime error: PERFORM\_INDEX\_NEGATIVE
    
-   Cause: The specified index was too large.
    Runtime error: PERFORM\_INDEX\_TOO\_LARGE
    

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

-   Cause: The called FORM expects more parameters than were specified.
    Runtime error: PERFORM\_PARAMETER\_MISSING
    

CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

-   Cause: More parameters were specified than expected by FORM.
    Runtime error: PERFORM\_TOO\_MANY\_PARAMETERS
    

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

-   Cause: The addressing offsets do not match in the actual and target structures in parameter passing using the addition STRUCTURE.
    Runtime error: PERFORM\_BASE\_WRONG\_ALIGNMENT
    
-   Cause: The deep components contained in the actual and target structures cannot be passed to each other. This error occurs only in parameter passing using STRUCTURE.
    Runtime error: PERFORM\_CAST\_DEEP\_MISMATCH
    
-   Cause: A type conflict occurred when passing a generically defined type to the form.
    Runtime error: PERFORM\_CONFLICT\_GENERIC\_TYPE
    
-   Cause: The table type of the actual parameter does not match the table type of the parameter defined in the form.
    Runtime error: PERFORM\_CONFLICT\_TAB\_TYPE
    
-   Cause: The type of the actual parameter does not match the type of parameter defined in the form.
    Runtime error: PERFORM\_CONFLICT\_TYPE
    
-   Cause: The actual parameter occupies less memory space than the target parameter defined in the form. This error occurs only in parameter passing using STRUCTURE.
    Runtime error: PERFORM\_PARAMETER\_TOO\_SHORT
    
-   Cause: The fragment views of the actual and target parameters do not match in parameter passing using the addition STRUCTURE.
    Runtime error: PERFORM\_CONFLICT\_UC\_STRUCT
    
-   Cause: When the form is called, an internal table is expected as the actual parameter.
    Runtime error: PERFORM\_TABLE\_REQUIRED
    
-   Cause: A hashed table was passed to a parameter defined using TABLES.
    Runtime error: PERFORM\_STD\_TAB\_REQUIRED
    

Continue
[PERFORM - subr\_identifier](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_form.htm)