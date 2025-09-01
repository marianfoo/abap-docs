  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Class-Based%20Exceptions%20in%20ABAP%20Release%207.0%2C%20EhP2%2C%20ABENNEWS-71-EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

Class-Based Exceptions in ABAP Release 7.0, EhP2

[1\. Resumable Exceptions](#!ABAP_MODIFICATION_1@1@)
[2\. Preserving the Context of an Exception](#!ABAP_MODIFICATION_2@2@)
[3\. Retrying the TRY Block](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Resumable Exceptions

Before ABAP release 7.0, EhP2, the context in which a [class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") was raised was always emptied completely. All procedures called between the raising of the exception and any handler, and their local data, were deleted before the handler was executed. The program could only resume after the TRY control structure of the handler.

From ABAP release 7.0, EhP2, [class-based exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") can be raised and propagated as resumable exceptions. The new addition RESUMABLE can be used in

-   the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm)
-   the RAISING addition for declaring exceptions in [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods.htm) [METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm), [FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm), and [FORM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform.htm).

The new statement [RESUME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapresume.htm) is used to resume the execution of a program after the exception-raising statement, while the resumable exception is being handled.

Modification 2   

Preserving the Context of an Exception

The context of the exception must be retained while it is being handled so that the program can resume afterwards. To enable this, the new addition BEFORE UNWIND of the statement [CATCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_try.htm) has been implemented. This addition can also be used independently of resumable exceptions.

Modification 3   

Retrying the TRY Block

The new statement [RETRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapretry.htm) enables an exception-raising TRY block to be retried.