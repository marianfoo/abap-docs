  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Runtime Analysis in Release 4.6A, ABENNEWS-46-SE30, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Runtime Analysis in Release 4.6A

[1\. Measurement in Parallel Session](#!ABAP_MODIFICATION_1@1@)
[2\. Measurement Restrictions](#!ABAP_MODIFICATION_2@2@)
[3\. Aggregation](#!ABAP_MODIFICATION_3@3@)
[4\. Measurement Variants](#!ABAP_MODIFICATION_4@4@)
[5\. Unique Identification of Internal Tables](#!ABAP_MODIFICATION_5@5@)
[6\. Measurement for Particular Statements](#!ABAP_MODIFICATION_6@6@)
[7\. Hit Lists](#!ABAP_MODIFICATION_7@7@)
[8\. Use of New Tools](#!ABAP_MODIFICATION_8@8@)
[9\. Changes to the User Interface](#!ABAP_MODIFICATION_9@9@)

Modification 1   

Measurement in Parallel Session
Runtime analysis can be activated for ten simultaneous [ABAP sessions](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") (work processes). This makes it possible to switch to a long-running job from outside. It is possible to switch in and out of the work processes that are measured using a screen similar to transaction SM50.

Modification 2   

Measurement Restrictions
It is possible to restrict the duration of a measurement, the size of the performance data file, and also the objects that are measured.

-   The duration of the measurement is specified in minutes.
    
    The measurement ends after this time.
    The maximum duration is approximately 72 minutes.
    

-   The size of the performance data file is specified in kilobytes. Once this size is reached, the measurement ends.

-   It is possible to restrict the measurement to specific objects:
    
    Programs and function pools
    Global and local classes
    Methods, subroutines, or function modules.
    Particular statements
    

Modification 3   

Aggregation

Aggregations can be full aggregations and aggregations by call point. In full aggregation, all performance data for a particular type of event is summarized in a single performance record. In aggregations by call point, all performance data from a particular event onwards is summarized.

This makes it possible to use aggregation as the first step in a runtime analysis to identify the most time-consuming calls. The second, more detailed analysis can then be restricted to these objects.

Certain information does not exist when aggregations are used: There is no hierarchy. Furthermore, it is not possible to branch to the call point from a full aggregation. The effect of the display filter is that the events are displayed without their net times being recalculated.

Modification 4   

Measurement Variants

The default variant is stored under the name DEFAULT. If this variant is changed, the changed data is assigned temporarily under the name USER\_DEFAULT. If the same restrictions are used frequently, it is best to create a variant. A variant exists only in the system in which it is created, and it can be used, changed, or deleted by any user.

Modification 5   

Unique Identification of Internal Tables

The name of an internal table is the internally unique ID. This makes it possible to distinguish between identically named internal tables from different [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). The actual name of the internal table can be identified by navigating to the editor.

Modification 6   

Measurement for Particular Statements

The total runtime of all loop passes is determined in LOOP AT itab. CREATE OBJECT is only measured if the method CONSTRUCTOR is overwritten.

Modification 7   

Hit Lists

In the hit list of the database tables, the buffering is empty if buffering is switched off or not allowed. As well as the database hit list, there are object-based hit lists for classes, instances, and internal tables. For classes and instances, there is a further division between methods and events.

Modification 8   

Use of New Tools

The various hit lists are created using ABAP List Viewer. All regular ALV functions are available within the hit list, although full navigation from the list is not possible.

ABAP List Viewer is also used to display the performance statistics. They are calculated using method calls, and the load time and net runtime of the program are added to them.

Modification 9   

Changes to the User Interface

The user interface of the runtime analysis tool has been fully revised. The new features are represented by four main areas, which can be branched to from the initial screen, namely:

-   Executing the runtime analysis
-   Switching on an ABAP session
-   Setting the measurement restrictions
-   Analyzing the measurement results