---
title: "Examples for BDEF Derived Type Components"
description: |
  -   BDEF Derived Type Components in the Context of Requesting Permissions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_misc_abexa.htm) -   Display BDEF Derived Type Components(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_display_der
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_abexas.htm"
abapFile: "abenderived_types_abexas.htm"
keywords: ["do", "if", "data", "types", "abenderived", "abexas"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Examples%20for%20BDEF%20Derived%20Type%20Components%2C%20ABENDERIVED_TYPES_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Examples for BDEF Derived Type Components

-   [BDEF Derived Type Components in the Context of Requesting Permissions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_misc_abexa.htm)
-   [Display BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_display_derived_type_abexa.htm)
-   [Example for Message-Related BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_reported_abexa.htm)
-   [Using %cid / %cid\_ref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_cid_cidref_abexa.htm)
-   [Using %control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_control_abexa.htm)
-   [Using %data / %target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_data_abexa.htm)
-   [Using %fail](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_fail_abexa.htm)
-   [Using %is\_draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_isdraft_abexa.htm)
-   [Using %key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_key_abexa.htm)
-   [Using %pid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_pid_abexa.htm)
-   [Using %pre / %tmp / %pky](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_pre_tmp_abexa.htm)
-   [Using %tky](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_tky_abexa.htm)
-   [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_messages_abexa.htm)

Continue
![Example](exa.gif "Example") [BDEF Derived Type Components in the Context of Requesting Permissions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_misc_abexa.htm)
![Example](exa.gif "Example") [Display BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_display_derived_type_abexa.htm)
![Example](exa.gif "Example") [Example for Message-Related BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_reported_abexa.htm)
![Example](exa.gif "Example") [Using %cid / %cid\_ref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_cid_cidref_abexa.htm)
![Example](exa.gif "Example") [Using %control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_control_abexa.htm)
![Example](exa.gif "Example") [Using %data / %target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_data_abexa.htm)
![Example](exa.gif "Example") [Using %fail](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_fail_abexa.htm)
![Example](exa.gif "Example") [Using %is\_draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_isdraft_abexa.htm)
![Example](exa.gif "Example") [Using %key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_key_abexa.htm)
![Example](exa.gif "Example") [Using %pid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_pid_abexa.htm)
![Example](exa.gif "Example") [Using %pre / %tmp / %pky](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_pre_tmp_abexa.htm)
![Example](exa.gif "Example") [Using %tky](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_tky_abexa.htm)
![Example](exa.gif "Example") [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_messages_abexa.htm)