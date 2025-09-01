  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields_guidl.htm) → 

Access

Background

The system fields are supplied with values by the ABAP runtime environment. In a program, however, they behave like normal variables. You can assign values to these fields using the ABAP program. This is because both the ABAP kernel and the ABAP components of the ABAP runtime environment have can perform writes on system fields.

Rule

Do not write to system fields

In application progrsms, only perform reads on system fields and never perform writes.

Details

The values of system fields are usually vital for correct program execution. This means performing writes on system fields carries a lot of risk. Write operations in system fields can lead to a loss of important information, which can prevent programs from running correctly. Therefore, you cannot overwrite system fields to change the execution of the program or use the fields to replace explicitly defined variables.

In addition, you cannot misuse system fields as implicit output parameters of procedures, irrespective of whether the fields have been explicitly set within the procedure (due to an illegal write or as the result of an executed statement).

Exception

The only system fields where it was permitted to change the field content (in an application program) are part of classic list processing. This should [no longer be used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_guidl.htm "Guideline").

Bad Example

The following source code shows a write performed on the system field sy-subrc, which occurs frequently. This write is not harmful but it also is not beneficial: sy-subrc is always set to zero when a function module is called and only adopts a different value by handling a classic exception. Therefore, the statement is redundant.

sy-subrc = 4.
CALL FUNCTION ...
   ...
   EXCEPTIONS ...
CASE sy-subrc.
   ...

Good Example

The source code below omits the write shown above.

CALL FUNCTION...
   ...
   EXCEPTIONS ...
CASE sy-subrc.
   ...