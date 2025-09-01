  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20tenant%20isolation%2C%20ABENTENANT_ISOLATION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

tenant isolation

Tenant isolation means that the data of one tenant is isolated from the other [tenants](javascript:call_link\('abentenant_glosry.htm'\) "Glossary Entry"). In a [multitenancy](javascript:call_link\('abenmegatenancy_glosry.htm'\) "Glossary Entry") system, the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") supports tenant isolation by allowing an [application program](javascript:call_link\('abenapplication_program_glosry.htm'\) "Glossary Entry") to access only the data of the [application client](javascript:call_link\('abenapplication_client_glosry.htm'\) "Glossary Entry") assigned to the current tenant. Read access to the [system client](javascript:call_link\('abensystem_client_glosry.htm'\) "Glossary Entry") is also possible. [Multitenancy](javascript:call_link\('abenmegatenancy_glosry.htm'\) "Glossary Entry") is not supported in the current release.