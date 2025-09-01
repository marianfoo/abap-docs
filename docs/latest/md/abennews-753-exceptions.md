  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.53](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-753.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Handling%20in%20ABAP%20Release%207.53%2C%20ABENNEWS-753-EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Exception Handling in ABAP Release 7.53

[1\. Raising Runtime Errors](#!ABAP_MODIFICATION_1@1@)
[2\. Last Message in a Chain of Exception Objects](#!ABAP_MODIFICATION_2@2@)
[3\. Setting the Attribute IS\_RESUMABLE](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Raising Runtime Errors

The new statement [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm) raises [runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry") associated with an [exception object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_object_glosry.htm "Glossary Entry"). This means more information can now be passed to the [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry") than was previously possible in an [exit message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexit_message_glosry.htm "Glossary Entry").

Modification 2   

Last Message in a Chain of Exception Objects

The new method GET\_LATEST\_T100\_EXCEPTION in the class CL\_MESSAGE\_HELPER is used to return the last object in a chain of exception objects that has an [exception text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_texts.htm) defined by a message. Here, the chain is created using the attribute PREVIOUS.

Modification 3   

Setting the Attribute IS\_RESUMABLE

The attribute IS\_RESUMABLE of an [exception object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_object_glosry.htm "Glossary Entry") is now set after exceptions raised by the statement [RAISE RESUMABLE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) only if the [CATCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_try.htm) statement in question has the addition BEFORE UNWIND. Previously in catches, the attribute was set for every exception raised in this way.

After an exception is raised using the statement [RAISE RESUMABLE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) and caught using the statement [CATCH BEFORE UNWIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_try.htm), the attribute IS\_RESUMABLE is set for all previous exception objects referenced in the attribute PREVIOUS and not just for the current exception object. Up until the first resumable exception in the chain IS\_RESUMABLE is set to the value of ABAP\_TRUE and is set to the value of ABAP\_FALSE otherwise.