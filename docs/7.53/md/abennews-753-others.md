  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Further Changes in Release 7.53

[1\. ABAP for SAP Cloud Platform](#!ABAP_MODIFICATION_1@1@)

[2\. Obsolete ABAP language versions](#!ABAP_MODIFICATION_2@2@)

[3\. New methods for handling code pages](#!ABAP_MODIFICATION_3@3@)

[4\. Error message after SUBMIT VIA JOB](#!ABAP_MODIFICATION_4@4@)

Modification 1

ABAP for SAP Cloud Platform

In Release 7.53, a new [ABAP version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry")
[ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry") was introduced. The internal version ID in the column UCCHECK of the system table TRDIR is "5".

Modification 2

Obsolete ABAP Language Versions

The [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry")

-   [static ABAP with restricted object use](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry")

-   [standard ABAP with restricted object use](javascript:call_link\('abenstandard_abap_restr_obj_glosry.htm'\) "Glossary Entry")

are now [obsolete](javascript:call_link\('abenabap_versions_obsolete.htm'\)) and should no longer be used.

Modification 3

New Methods for Handling Code Pages

The methods CONVERT of the interfaces [IF\_ABAP\_CONV\_OUT](javascript:call_link\('abencl_abap_conv_codepage.htm'\)) and [IF\_ABAP\_CONV\_IN](javascript:call_link\('abencl_abap_conv_codepage.htm'\)) are more robust than the methods CONVERT\_TO and CONVERT\_FROM of the class [CL\_ABAP\_CODEPAGE](javascript:call_link\('abencl_abap_codepage_obsolete.htm'\)) and have replaced them.

Modification 4

Error Message After SUBMIT VIA JOB

The method GET\_ERROR\_MESSAGE of the class
CL\_ABAP\_SUBMIT\_HANDLING can now be used to read the last error message in cases where it was not possible to schedule a background task using [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)).