  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-75.htm) →  [Changes in Release 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-753.htm) → 

Further Changes in Release 7.53

[1\. ABAP for SAP Cloud Platform](#!ABAP_MODIFICATION_1@1@)

[2\. Obsolete ABAP language versions](#!ABAP_MODIFICATION_2@2@)

[3\. New methods for handling code pages](#!ABAP_MODIFICATION_3@3@)

[4\. Error message after SUBMIT VIA JOB](#!ABAP_MODIFICATION_4@4@)

Modification 1

ABAP for SAP Cloud Platform

In Release 7.53, a new [ABAP version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_version_glosry.htm "Glossary Entry")
[ABAP for SAP Cloud Platform](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry") was introduced. The internal version ID in the column UCCHECK of the system table TRDIR is "5".

Modification 2

Obsolete ABAP Language Versions

The [ABAP language versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_version_glosry.htm "Glossary Entry")

-   [static ABAP with restricted object use](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry")

-   [standard ABAP with restricted object use](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_abap_restr_obj_glosry.htm "Glossary Entry")

are now [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions_obsolete.htm) and should no longer be used.

Modification 3

New Methods for Handling Code Pages

The methods CONVERT of the interfaces [IF\_ABAP\_CONV\_OUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_conv_codepage.htm) and [IF\_ABAP\_CONV\_IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_conv_codepage.htm) are more robust than the methods CONVERT\_TO and CONVERT\_FROM of the class [CL\_ABAP\_CODEPAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_codepage_obsolete.htm) and have replaced them.

Modification 4

Error Message After SUBMIT VIA JOB

The method GET\_ERROR\_MESSAGE of the class
CL\_ABAP\_SUBMIT\_HANDLING can now be used to read the last error message in cases where it was not possible to schedule a background task using [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_via_job.htm).