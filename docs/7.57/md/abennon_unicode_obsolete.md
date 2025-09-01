  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Program Properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_properties_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Disabling of the Unicode Check, ABENNON_UNICODE_OBSOLETE, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Disabling of the Unicode Check

When a program is created, the [ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions.htm) [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry") with enabled [Unicode checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_check_glosry.htm "Glossary Entry") is set by default.

-   Programs with the language version [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry") work in [Unicode systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry") and non-Unicode systems.
-   Programs with the [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions_obsolete.htm) language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry") only work in non-Unicode systems.

In the current [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") release, only Unicode systems are supported. Programs with the language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry") can no longer be executed in the current release. The ABAP language version must not be set back to [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry"). Higher [ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry") are possible because they cover the Unicode checks.

Programming Guideline

[Program Properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_guidl.htm "Guideline")