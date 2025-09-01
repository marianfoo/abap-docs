  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Exception Handling in Release 7.53

[1\. Raising runtime errors](#!ABAP_MODIFICATION_1@1@)

[2\. Last message in a chain of exception objects](#!ABAP_MODIFICATION_2@2@)

[3\. Setting the attribute IS\_RESUMABLE](#!ABAP_MODIFICATION_3@3@)

Modification 1

Raising Runtime Errors

The new statement [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) raises [runtime errors](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") associated with an [exception object](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry"). This means more information can now be passed to the [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") than was previously possible in an [exit message](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry").

Modification 2

Last Message in a Chain of Exception Objects

The new method GET\_LATEST\_T100\_EXCEPTION in the class CL\_MESSAGE\_HELPER is used to return the last object in a chain of exception objects that has an [exception text](javascript:call_link\('abenexception_texts.htm'\)) defined by a message. Here, the chain is created using the attribute PREVIOUS.

Modification 3

Setting the Attribute IS\_RESUMABLE

The attribute IS\_RESUMABLE of an [exception object](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry") is now set after exceptions raised by the statement [RAISE RESUMABLE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) only if the [CATCH](javascript:call_link\('abapcatch_try.htm'\)) statement in question has the addition BEFORE UNWIND. Previously in catches, the attribute was set for every exception raised in this way.

After an exception is raised using the statement [RAISE RESUMABLE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) and caught using the statement [CATCH BEFORE UNWIND](javascript:call_link\('abapcatch_try.htm'\)), the attribute IS\_RESUMABLE is set for all previous exception objects referenced in the attribute PREVIOUS and not just for the current exception object. Up until the first resumable exception in the chain IS\_RESUMABLE is set to the value of ABAP\_TRUE and is set to the value of ABAP\_FALSE otherwise.