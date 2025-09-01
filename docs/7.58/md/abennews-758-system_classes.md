  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-758.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Classes%20in%20ABAP%20Release%207.58%2C%20ABENNEWS-758-SYSTEM_CLASSES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

System Classes in ABAP Release 7.58

[1\. System Classes for Numbers](#!ABAP_MODIFICATION_1@1@)
[2\. New Class CL\_ABAP\_DIFF](#!ABAP_MODIFICATION_2@2@)
[3\. New Methods in CL\_ABAP\_TSTMP](#!ABAP_MODIFICATION_3@3@)
[4\. New Method in CL\_ABAP\_BEHV\_AUX](#!ABAP_MODIFICATION_4@4@)

Modification 1   

System Classes for Numbers

Two new system classes for numeric calculations are available:

-   [CL\_ABAP\_BIGINT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_bigint_doc.htm) contains methods for calculations with any size of integer in ABAP.
-   [CL\_ABAP\_RATIONAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_rational_doc.htm) contains methods for calculating with rational numbers without any precision loss.

Modification 2   

New Class CL\_ABAP\_DIFF

The new class [CL\_ABAP\_DIFF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_diff.htm) compares the content of internal tables and returns information about any differences found.

Modification 3   

New Methods in CL\_ABAP\_TSTMP

The new methods MOVE\_TRUNC, MOVE\_TO\_SHORT\_TRUNC, ADD\_TO\_SHORT\_TRUNC and SUBTRACTSECS\_TO\_SHORT\_TRUNC of system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_tstmp.htm) round the fractional seconds of long time stamps down while the existing methods MOVE, MOVE\_TO\_SHORT, ADD\_TO\_SHORT and SUBTRACTSECS\_TO\_SHORT round commercially. Since the latter might be unexpected, the new methods can be used now in order to preserve the integer part of a long time stamp.

Modification 4   

New Method in CL\_ABAP\_BEHV\_AUX

Using the new method GET\_CURRENT\_PHASE, you get information about the current RAP transactional phase.