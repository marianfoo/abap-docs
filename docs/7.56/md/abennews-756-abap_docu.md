  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.56](javascript:call_link\('abennews-756.htm'\)) → 

ABAP Keyword Documentation in Release 7.56

Modification

Configuration of the Documentation

From release 7.56 on, important settings of the ABAP Keyword Documentation can be configured explicitly. Before, the documentation was configured implicitly from system settings.

The configuration of the ABAP Keyword Documentation is saved in customizing table ABDOCCONFIG, that is maintained with transaction code ABAP\_DOCU\_CONFIG (based on executable program ABAP\_DOCU\_CONFIG) or with the configuration entity ABAP\_DOCU\_CONFIG\_ENTITY. All repository objects related to the configuration are documented.

The following properties can be set:

-   CP
    
    If set to X, the ABAP Keyword Documentation uses terms appropriate for the [SAP BTP ABAP environment](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry") (aka [Steampunk](javascript:call_link\('abensteampunk_glosry.htm'\) "Glossary Entry")) instead of [Application Server ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") in some footers and copyright texts.
    
    Recommendation:
    
    -   Set to X in systems of the SAP BTP ABAP Environment.
    -   Set to initial in all other systems.
-   ICF
    
    Enables or disables the Web Version of the ABAP Keyword Documentation based on [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") nodes /sap/public/bc/abap/docu and /sap/bc/abap/docu.
    
    The following settings can be applied:
    
    -   If set to X, the Web Version is enabled. The execution of example programs from the Web Version is disabled.
    -   If set to E, the Web Version is enabled. The execution of example programs from the Web Version is also enabled.
    
    Recommendation:
    
    -   Set to E in SAP development systems.
    -   Set to E in customer development systems.
    -   Set to X in SAP S/4 HANA.
    -   Set to initial in SAP BTP ABAP environment and SAP S/4HANA Cloud.
-   BATCH
    
    If set to X, the infrastructure of the ABAP Keyword Documentation is allowed to start batch jobs that prepare buffers that are needed for search in and display of the documentation.
    
    Recommendation:
    
    -   Set to X in SAP S/4 HANA.
    -   Set to initial in SAP BTP ABAP environment.
-   MAILBOX
    
    If set to X, the ABAP Keyword Documentation display offers a function to send a feedback mail to abap.docu@exchange.sap.corp. This mailbox is only available to SAP employees. Therefore, the setting makes sense for SAP's own development systems only.
    
    Recommendation:
    
    -   Set to X in SAP's own development systems.
    -   Set to initial in all other systems.
-   VERSION
    
    Determines the [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") for which the ABAP Keyword Documentation is displayed. Allowed values are defined in domain ABAPVRS. This setting can be overridden when calling the documentation using the respective APIs:
    
    -   CL\_ABAP\_DOCU for the SAP GUI version
    -   CL\_ABAP\_DOCU\_EXTERNAL for the ADT or Web version.
    
    Calls to the documentation from ABAP Workbench and ADT set the language version depending on the object currently being edited. Calls to the documentation via the ABAPDOCU and ABAPHELP transactions use the version from ABDOCCONFIG by default. An initial value for VERSION in ABDOCCONFIG displays the documentation for [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") (X).
    
    Recommendation:
    
    -   Set to X in SAP S/4 HANA
    -   Set to 5 in SAP BTP ABAP environment and SAP S/4HANA Cloud

Program ABAP\_DOCU\_CONFIG allows a choice to be made between different sets of parameters:

-   Parameter set typical for SAP development systems
-   Parameter set typical for customer development systems
-   Parameter set typical for SAP S/4 HANA systems
-   Parameter set typical for S/4 HANA cloud ABAP environment
-   Parameter set typical for SAP BTP ABAP environment
-   Current parameter set

The passed parameters are used as default values for a dialog window and can be overridden there.

If customizing table ABDOCCONFIG is initial in a customer system, the first call of the ABAP Keyword documentation supplies it with values recommended for an SAP S/4 HANA System. In SAP's own systems, values for a SAP development system are supplied. If the table is partly filled, default values are used for the missing rows. These values are initial for all properties except VERSION. If the language version is not passed by the caller and cannot be found in ABDOCCONFIG, the value X is used and a warning is shown in the documentation display.