  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-70_ehps.htm) →  [News for Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Class-Based Exceptions in Release 7.0, EhP2, ABENNEWS-71-EXCEPTIONS, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Class-Based Exceptions in Release 7.0, EhP2

[1\. Resumable Exceptions](#!ABAP_MODIFICATION_1@1@)
[2\. Preserving the Context of an Exception](#!ABAP_MODIFICATION_2@2@)
[3\. Retrying the TRY Block](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Resumable Exceptions

Before Release 7.0, EhP2, the context in which a [class-based exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") was raised was always emptied completely. All procedures called between the raising of the exception and any handler, and their local data, were deleted before the handler was executed. The program could only resume after the TRY control structure of the handler.

From Release 7.0, EhP2, [class-based exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") can be raised and propagated as resumable exceptions. The new addition RESUMABLE can be used in

-   the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm)
-   the RAISING addition for declaring exceptions in [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods.htm) [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm), [FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfunction.htm), and [FORM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform.htm).

The new statement [RESUME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapresume.htm) is used to resume the execution of a program after the exception-raising statement, while the resumable exception is being handled.

Modification 2   

Preserving the Context of an Exception

The context of the exception must be retained while it is being handled so that the program can resume afterwards. To enable this, the new addition BEFORE UNWIND of the statement [CATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_try.htm) has been implemented. This addition can also be used independently of resumable exceptions.

Modification 3   

Retrying the TRY Block

The new statement [RETRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapretry.htm) enables an exception-raising TRY block to be retried.