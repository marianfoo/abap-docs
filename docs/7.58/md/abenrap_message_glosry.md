  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20message%2C%20ABENRAP_MESSAGE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP message

Message that is represented by an instance of a class that implements the interface IF\_ABAP\_BEHV\_MESSAGE and is used in [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") implementations.

Each application can create its own classes. For convenience, each [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") contains a predefined local [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") CL\_ABAP\_BEHV\_MSG inherited from CX\_NO\_CHECK that implements IF\_ABAP\_BEHV\_MESSAGE in a minimalistic way. It can be used for RAP messages as well as for raising [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") where appropriate.